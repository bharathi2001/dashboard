import './App.css';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Sidebar from './sidebar/Sidebar';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            ></Route>
            <Route
              path="/payments"
              element={<Dashboard />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
