import React, {useState} from "react";
import Weather from "./Weather";
import "./index.css"
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Login from "./Login";
import AirQuality from "./AirQuality";
import {  auth } from "./Firebase";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthContextProvider  } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState();
  const [temp, setTemp] = useState() ;
  const [pressure, setPressure ] = useState('');
  const [ humidity, setHumidity ] = useState('');
  const [ visibility, setVisibility] = useState('');
  const [city, setCityName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ showImage, setImage] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
 const [ tempMin, setTempMin] = useState();
 const [ tempMax, setTempMax] = useState();
 
//  setUser(localStorage.getItem('emailVerfied'))
// var userIn = {...localStorage.getItem('emailVerified')};
// console.log(userIn)
// if (user !== false ) {
//   setUser(true)
// }  
  // setUser(auth.currentUser)

 const onFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.cityName);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${formDataObj.cityName}&units=imperial&appid=9f2719b9da8433e4284c2819c1e75cc2`
      )
      .then((response) => {
        console.log(response);
        setTemp(response.data.main.temp)
        setPressure(response.data.main.pressure)
        setHumidity(response.data.main.humidity)
        setVisibility(response.data.visibility)
        setCityName(response.data.name)
        setDescription(response.data.weather[0].description)
        setImage(response.data.weather[0].main)
        setSunrise(response.data.sys.sunrise)
        setSunset(response.data.sys.sunset)
        setTempMin(response.data.main.temp_min)
        setTempMax(response.data.main.temp_max)
      }).catch((err)=>{
          setTemp('')
      });
  };
  var finalTemp = Math.floor(temp)
  var finalSunrise =  new Date(sunrise).toLocaleTimeString()
 var finalSunset = new Date(sunset).toLocaleTimeString();
 var finalMax = Math.floor(tempMax)
 var finalMin = Math.floor(tempMin)

  
  return (

    <AuthContextProvider >
      <Router>
      <Routes>
       <Route path='login' element={<Login />}></Route>
       <Route path='home' element={<App />}></Route>
     </Routes>
     
    
        { auth.currentUser ? <Login /> : 
        
        <div className="">
      
      
        <Form className="flex flex-col items-center mt-10" onSubmit={onFormSubmit}>
          
          <Form.Group className="flex items-center gap-4 mb-3" controlId="formBasicEmail">
          <div className="flex">
          <img src={localStorage.getItem('profilePic')} alt="avatar" height={40} width={40}  className="rounded-full mr-3" /> 
          <div><h1>Hello,</h1><h1 className="font-bold">{localStorage.getItem('name')}</h1></div>
              </div>
            
            <Form.Control className="mr-5 border-2 bg-slate-200 placeholder:text-black rounded-md pl-3" type="text" placeholder="Enter City" name="cityName" /> 
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "  type="submit">
            Search City Weather
          </Button>
          </Form.Group>
        
        </Form>
        <div className="flex" >
          <Weather temp={temp}
            pressure={pressure}
            visibility={visibility}
            city={city}
            humidity={humidity}
            onFormSubmit={onFormSubmit}
            finalTemp={finalTemp}
            description={description}
            showImage={showImage}
            sunrise={sunrise}
            sunset={sunset}
          />
            <AirQuality city={city}
            onFormSubmit={onFormSubmit}
            finalSunrise={finalSunrise}
            finalSunset={finalSunset}
            finalMax={finalMax}
            finalMin={finalMin}
            /> 
        
        
        </div>
        </div>}
    </Router>
    </AuthContextProvider>
  );
}

export default App;
