import { Route, Routes } from "react-router-dom";

import Dashboard from "../../Dashboard/components";

const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/:carName" element={<>ABC</>} />
        <Route exact path="/booking" element={<>ABC</>} />
    </Routes>
  )
};

export default AppRoutes;
