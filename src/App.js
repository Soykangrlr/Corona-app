import { useState } from "react";

import CoronaForCountry from "./components/card/coronaForCountry";
import CoronaForContinent from "./components/coronaForContinent/coronaForContinent";
import Header from "./components/headers/headesr";
import TotalData from "./components/totalData/totalData";

function App() {
  const [key,setKey]=useState(1)
  return (
    <>
    <Header onMenuChange={_key=>{
      setKey(_key)
    }}/>
    <div className="md:container md:mx-auto p-8 page-content" >
    {
      key==1&& <CoronaForCountry/>
      
    }
    {
      key==2&& <TotalData/>
      
    }
    {
      key==3&& <CoronaForContinent/>
      
    }
    </div>
    
    </>
  );
}

export default App;
