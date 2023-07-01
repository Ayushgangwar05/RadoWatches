import { useEffect, useState } from "react";
import "./App.css";
import CERAMIC from "./components/CERAMIC";
import Creationsimg from "./components/Creationsimg";
import Navbarheading from "./components/Navbarheading";
import Navbarmain from "./components/Navbarmain";
import Creations from "./components/creations";
import Captain from "../src/components/CaptainCook";
import CaptainImage from "./components/CaptainImage";
import Watchesimg from "./components/Watchesimg";
import Materials from "./components/Materials";
import Customer from "./components/Customer";
import Contactrole from "./components/Contactrole";
import End from "../src/components/End";

function App({ LoadFunction }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(Captain);
    console.log(setdata);
  }, []);

  return (
    <div id="Mainid">
      <div>
        <Navbarheading />
        <Navbarmain />
      </div>
      <div>
        <CERAMIC />
        <Creations />
        <Creationsimg />
        <CaptainImage data={data} />
        <Watchesimg />
        <Materials />
        <Customer />
        <Contactrole />
        <End />


        
      </div>
    </div>
  );
}

export default App;
