import FPB from "./components/FPB";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
        <div className="format">
        <h1 style={{ marginBottom: "20px" }}>Trevor's Room Booking Form</h1>
        <div>
          <FPB />
        </div>
      </div>
      </Route>
      </Routes>
    </Router>
  );
}
export default App;
