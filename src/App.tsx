import { Banner } from "./components/banner";
import { Hero } from "./components/hero";
import { MainContent } from "./components/main-content";
import { NavBar } from "./components/nav-bar";

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full">
      <NavBar />
      <Hero />
      <MainContent />
      <Banner /> 
    </div>
  );
};

export default App;
