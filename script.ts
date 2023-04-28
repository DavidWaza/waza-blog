import { PrismaClient, User } from "@prisma/client";

// interface UserData extends Omit<User, "id"> {}
interface UserData {
    name:string,
    email:string
}

const prisma = new PrismaClient();
async function main() {
    
    const userData: UserData = {
        name: 'Waza',
        email: 'waza@prisma.io',
      };

    const user = await prisma.user.create({
       data:userData,
})

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
