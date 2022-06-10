import React from 'react'

import { Card, ListGroup, ListGroupItem } from "react-bootstrap"


function AirQuality({city, onFormSubmit, finalSunset, finalSunrise, tempMin, tempMax, finalMin, finalMax}) {
  
  
    return (
    <div> 
    <Card
    className="rounded-lg flex flex-col"
    >
     
        <Card.Body>
            <Card.Title className="ml-3">AirQuality in {city}</Card.Title>
            <Card.Text className="flex flex-col ml-3 mt-3">
            <div> <h3>Low of the day {finalMin}°</h3><h3>High of the day {finalMax}°</h3>
     
            </div>
            </Card.Text>
        </Card.Body>
        <ListGroup className="flex flex-row list-group-flush mt-6 font-bold py-4">
            <ListGroupItem className="bg-blue-900 rounded-xl mx-2 text-white py-3 px-1 flex flex-col w-20 h-24">Sunset {finalSunset}</ListGroupItem>
            <ListGroupItem className="bg-blue-900 rounded-xl mx-2 text-white py-3 px-1">Sunrise {finalSunrise}</ListGroupItem>
          
        </ListGroup>
        <div className='flex justify-evenly' >
        <label htmlFor="customRange2" className="form-label">Good</label>
        <label htmlFor="customRange2" className="form-label">Hazardous</label>
        </div>
        <input type="range" className="form-range" min="0" max="5" id="customRange2"></input>
    </Card></div>
  )
}

export default AirQuality