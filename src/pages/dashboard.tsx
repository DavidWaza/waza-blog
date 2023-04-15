
const Dashboard = ({admins}:any) => {
  return (
    <>
      <div>
        <p className="text-center my-5 text-white">Welcome {admins.name}</p>
      </div>
    </>
  );
};

export default Dashboard;
