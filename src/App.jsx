import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { Residencies } from "./components/Residencies";
import { Value } from "./components/Value";
import { Contacts } from "./components/Contacts";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contacts />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};
