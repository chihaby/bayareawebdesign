import Navbar from "./Navbar";
import Meta from "./Meta";
import Hero from "./Hero";
import Benefit from "./Benefit";
import Service from "./Services";
import About from "./About";
import CTA from "./CTA";
import Footer from "./Footer";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm"]}
      minBreakpoint="sm"
    >
      <Meta />
      <Navbar />
      <Hero />
      <Benefit />
      <About />
      <Service />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
