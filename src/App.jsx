import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Team from "./pages/Team";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Team List */}
        <Route path="/" element={<Team />} />

        {/* Single Profile Page */}
        <Route path="/team/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
