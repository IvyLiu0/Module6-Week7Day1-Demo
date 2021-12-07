import './App.css';
import {Link} from "react";
import {Route, Routes, Router} from "react-router-dom";
import BarChart from './animated-bar-chart-using-react-move/src/BarChart';
import Scene from './react-vertex-sphere-of-spheres/src/Scene';
import Tree from './collapsible-tree-w-vx/src/Tree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Group Challenge
        </p>
        
       <Router>
       <Link to="/animated">Animated Bar Chart</Link>
       <Link to="/collapsible">Collapsible Tree</Link>
       <Link to="/vertex">Vertex Sphere</Link>
         <Routes>
         <Route path="/animated" element={<BarChart />} /> 
         <Route path="/collapsible" element={<Tree />} /> 
         <Route path="/vertex" element={<Scene />} /> 
         </Routes>
       </Router>
        
      </header>
    </div>
  );
}

export default App;
