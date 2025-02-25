import { Outlet } from "react-router-dom";
import { Header, Body } from "./Components";

function App() {
  return (
    <div className="bg-black text-gray-200 h-screen">
      <Header />
      <Body />
    </div>
  );
}

export default App;
