import FPB from "./components/FPB";
import Form from "./components/Form";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FPB />} /> 
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
export default App;
