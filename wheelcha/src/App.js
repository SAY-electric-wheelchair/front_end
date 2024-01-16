import {Route, Routes} from "react-router-dom";
import MapHome from "./mainPage/MapHome";
import './App.css';
import PlaceDetail from "./mainPage/PlaceDetail";
import RepairReport from "./mainPage/RepairReport";
import SendAddress from "./mainPage/SendAddress";
import SearchLocation from "./mainPage/SearchLocation";
function App() {
  return (
    <Routes>
        <Route path="/" element={<MapHome/>} />
        <Route path="/detail/:placeId" element={ <PlaceDetail/> } />
        <Route path="/reportRepair/:placeId" element={ <RepairReport/> } />
        <Route path="/sendAddress/:placeId" element={ <SendAddress/> } />
        <Route path="/searchLocation" element={ <SearchLocation/> } />
    </Routes>
  );
}

export default App;
