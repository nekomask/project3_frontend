import './App.css';
import ItemContainer from './itemContainer/itemContainer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Show from "./Pages/Show"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ItemContainer />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}



export default App;