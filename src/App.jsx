import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/add-experience"
          element={
            <>
              <Home showAddExperience={true} />
            </>
          }
        />
        <Route
          path="/add-project"
          element={
            <>
              <Home showAddProject={true} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
