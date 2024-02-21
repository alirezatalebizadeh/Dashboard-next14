import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/Footer";

export default function Lauout({ children }) {
  return (
    <div className="flex ">
      <div className="w-1/5  p-5">
        <Sidebar />
      </div>
      <div className="flex-1 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
