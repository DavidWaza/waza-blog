import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="loader">
      <div className="flex justify-center relative h-full p-44">
        <Image
          src="/images/cube_loader.gif"
          width={200}
          height={200}
          alt="alt"
        />
      </div>
    </div>
  );
};
export default LoadingPage;
