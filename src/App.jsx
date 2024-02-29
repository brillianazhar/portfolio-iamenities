import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <>
      <div className="main relative">
        <Header />
        <Home />
        <About />
        <Client />
        <Product />
        <WhyUs />
        <Contact />
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}

export default App;
