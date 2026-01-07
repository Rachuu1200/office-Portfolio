import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Team />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/:id/skills" element={<Skills />} />
        <Route path="/:id/portfolio" element={<Portfolio />} />
        <Route path="/:id/about" element={<About />} />
        <Route path="/:id/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
