import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import sun from "./images/1.png"
import rain from "./images/4.png"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

function Weather() {
  const [temp, setTemp] = useState(" ") ;
  const [pressure, setPressure ] = useState('');
  const [ humidity, setHumidity ] = useState('');
  const [ visibility, setVisibility] = useState('');
  const [city, setCityName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ showImage, setImage] = useState('');




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
      }).catch((err)=>{
          setTemp('')
      });
  };
  if ( showImage === 'Haze') {
     <img src={sun} alt="weather" height={200} width={200} /> } else if ( showImage === "Thunderstorm") {
      return <img src={rain} alt="weather" height={200} width={200} />
    }
  


  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" name="cityName" />
          <Form.Text className="text-muted">
            Enter your city for Weather Informations.
          </Form.Text>
        </Form.Group>
        <Button  variant="primary" type="submit">
          Search City Weather
        </Button>
      </Form>
      
      
      <br />

      
     
   
        <Card style={ showImage === 'Clear' ? { backgroundImage: `url(${sun})`, width: '18em', height: "12em"} : {width: '18em', height: "12em" }} >
        
            <Card.Body>
                <Card.Title>Whats the weather like in {city}</Card.Title>
                <Card.Text className="">
                <h1>{temp} °</h1>
                    <h3>{description}</h3>
                </Card.Text>
            </Card.Body>
            <ListGroup className="flex flex-row list-group-flush">
                <ListGroupItem className="bg-blue-900 rounded-xl mx-2 text-white">Pressure {pressure}mb</ListGroupItem>
                <ListGroupItem className="bg-lime-400 rounded-xl mx-2 px-1">Humidity {humidity}% </ListGroupItem>
                <ListGroupItem className="bg-orange-600 rounded-xl mx-2">Visibility {visibility}mi</ListGroupItem>
            </ListGroup>
            
        </Card>

        </div>

    
  );
}

export default Weather;