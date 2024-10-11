import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";

import "./styles/global.css";

function App() {
  return (
    <div className="bg-background w-full h-screen text-base-text font-roboto">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
