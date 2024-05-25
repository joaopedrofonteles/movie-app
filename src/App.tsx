import { Hero } from "./components/hero";
import { NavBar } from "./components/nav-bar";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen w-full">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
