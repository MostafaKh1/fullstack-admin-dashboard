import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import AuthComponent from "./components/AuthComponent";
import { UseAppSelector } from "./store";

function App() {
  const { isAuth } = UseAppSelector((state) => state.announcement);
  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/dashboard"
              element={AuthComponent(Dashboard, isAuth)}
            />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
