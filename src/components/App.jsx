import { useState } from 'react';

import './App.css';
import Header from "./Header";
import Main from "./Main";

function App() {
  const [weatherData, setWeatherData] = useState({type: "cold"});
  return (
    <>
    <div className="page"> 
      <div className="page_content">
        <Header></Header>
        <Main data={weatherData}></Main>
       </div>    
    </div>
    </>
  )
}

export default App
