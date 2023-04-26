import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "../styles/header.css";
import "../styles/footer.css";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  //obtener scroll
  const [scroll, setScroll] = React.useState(0);
  const [menuMobile, setMenuMobile] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <div className={menuMobile ? "bodyOffOverflow" : ""}>
      <div className="content">
        <Header
          scroll={scroll}
          menuMobile={menuMobile}
          setMenuMobile={setMenuMobile}
        />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
