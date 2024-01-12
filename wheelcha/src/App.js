import {Route, Routes} from "react-router-dom";
import MapHome from "./mainPage/MapHome";
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MapHome/>} />
    </Routes>
  );
}

export default App;
