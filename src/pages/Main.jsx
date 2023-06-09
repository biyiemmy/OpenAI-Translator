import { Header, Translation, Footer } from "../projects";

export const Main = () => {
  return (
    <div>
      <div className="container font-roboto mx-auto px-24 py-10 shadow-xl">
        <Header />
        <Translation />
      </div>
      <Footer />
    </div>
  );
};
