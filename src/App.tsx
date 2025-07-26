import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
