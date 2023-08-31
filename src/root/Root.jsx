import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="bg-lime-700 p-2 font-bold text-white text-center">
        T-CHANNELS DEMO
      </div>
      <div className="p-4">
        <Outlet />
      </div>
      <div>
        A T-CHANNELS DEMO--R&D
      </div>
    </>
  );
};

export default Root;
