import './App.css';
import {Link} from "react";
import {Route, Routes, Router} from "react-router-dom";
import BarChart from './BarChart';
import TreeTree from './Scene';
import Example from './Tree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Group Challenge
        </p>
        
        <ul>
          <li><a href="/animated">BarChart</a></li>
          <li><a href="/collapsible">Tree</a></li>
          <li><a href="/vertex">Sphere</a></li>
        </ul>

       <Router>
            {/* <Link to="/animated">Animated Bar Chart</Link>
            <Link to="/collapsible">Collapsible Tree</Link>
            <Link to="/vertex">Vertex Sphere</Link> */}
         <Routes>
         <Route path="/animated" element={<BarChart />} /> 
         <Route path="/collapsible" element={<TreeTree />} /> 
         <Route path="/vertex" element={<Example />} /> 
         </Routes>
       </Router>
        
      </header>
    </div>
  );
}

export default App;
