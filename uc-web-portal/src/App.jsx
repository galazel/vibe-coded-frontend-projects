import { Routes, Route } from "react-router-dom";
import AccountManagement from "./layouts/account-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountManagement/>}></Route>
    </Routes>
  );
}

export default App;
