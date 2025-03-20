import FrontPage from "./components/FrontPage";
import StatTrak from "./components/StatTrak";
import Form from "./components/Form";
import Test from "./components/Test";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} /> 
        <Route path="/form" element={<Form />} />
        <Route path="/stattrak" element={<StatTrak />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
export default App;
