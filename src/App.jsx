import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div className="flex w-full h-screen bg-zinc-800 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
