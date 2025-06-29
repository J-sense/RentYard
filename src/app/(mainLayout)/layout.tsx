import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
