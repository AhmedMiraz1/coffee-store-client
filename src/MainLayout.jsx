import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const MainLayout = () => {
  return (
    <div className="container mx-auto px-8 my-12">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
