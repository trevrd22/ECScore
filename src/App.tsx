import FPB from "./components/FPB";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FPB />} /> 
      </Routes>
    </Router>
  );
}
export default App;
