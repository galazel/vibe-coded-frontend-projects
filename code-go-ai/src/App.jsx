import { Routes, Route } from "react-router-dom";
import DashboardPage from "./layouts/dashboard-layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}></Route>
    </Routes>
  );
}

export default App;
