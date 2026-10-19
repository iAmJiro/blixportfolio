
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-cream">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <div
          key={location.pathname}
          className="page-enter"
        >
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
