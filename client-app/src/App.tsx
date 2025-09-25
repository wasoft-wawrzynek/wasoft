import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
