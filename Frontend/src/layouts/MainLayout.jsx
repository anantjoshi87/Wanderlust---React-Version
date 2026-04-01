import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer";
import { LoginRequiredModal } from "@/components/common/LoginRequiredModal";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <LoginRequiredModal />
    </>
  );
};

export default MainLayout;
