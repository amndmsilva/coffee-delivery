import { Header } from "./components/Header";
import { Home } from "./components/Home";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-background w-full h-screen text-base-text font-roboto">
      <Header />
      <Home />
    </div>
  );
}

export default App;
