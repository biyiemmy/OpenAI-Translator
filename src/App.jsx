import "./App.css";
import "typeface-roboto";
import { Header, Translation, Footer } from "./projects/";

const App = () => {
  return (
    <>
      <div className="container font-roboto mx-auto px-24 py-10 shadow-xl">
        <Header />
        <Translation />
      </div>
      <Footer />
    </>
  );
};

export default App;
