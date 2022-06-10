import React  from "react";

import sun from "./images/1.png"

import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChartBar, faDisplay, faGear, faMapLocationDot,  } from '@fortawesome/free-solid-svg-icons'



function Weather({onFormSubmit, city, pressure, showImage, finalTemp, humidity, description, visibility}) {
  
 
  


  return (
      
    <div className="flex flex-row ml-10 mt-5">
    
   <div className="flex" >
   <div className=" flex flex-col gap-10 h-screen w-16 mr-5">
    
   <FontAwesomeIcon icon={faChartBar} className="text-slate-500 border-2 hover:border-2 py-5 rounded-xl hover:bg-orange-400 hover:text-white"  />
   <FontAwesomeIcon icon={faDisplay} className=" text-slate-500 border-2 hover:border-2 py-5 rounded-xl hover:bg-orange-400 hover:text-white" />
   <FontAwesomeIcon icon={faMapLocationDot} className="text-slate-500 border-2 hover:border-2 py-5 rounded-xl hover:bg-orange-400 hover:text-white" />
   <FontAwesomeIcon icon={faCalendarCheck} className="text-slate-500 border-2 hover:border-2 py-5 rounded-xl hover:bg-orange-400 hover:text-white" />
   <FontAwesomeIcon icon={faGear} className="text-slate-500 border-2 hover:border-2 py-5 rounded-xl hover:bg-orange-400 hover:text-white" />
      </div>
        <Card
        className="rounded-lg "
        style={ showImage === 'Clear' ? {  backgroundImage: `url(${sun})`, width: '18em', height: "12em"} : {width: '18em', height: "12em" }} >
        
            <Card.Body>
                <Card.Title className="ml-3">Whats the weather in {city}</Card.Title>
                <Card.Text className="flex flex-col ml-3 mt-5">
                <h1 className="text-3xl font-bold">{finalTemp} °</h1>
                    <h3 className="uppercase">{description}</h3>
                </Card.Text>
            </Card.Body>
            <ListGroup className="flex flex-row list-group-flush mt-6 font-bold">
                <ListGroupItem className="bg-blue-900 rounded-xl mx-2 text-white px-1">Pressure {pressure}mb</ListGroupItem>
                <ListGroupItem className="bg-lime-400 rounded-xl mx-2 px-1 text-slate-800 text-center">Humidity {humidity}% </ListGroupItem>
                <ListGroupItem className="bg-orange-600 rounded-xl mx-2 px-1 text-slate-800">Visibility {visibility}mi</ListGroupItem>
            </ListGroup>
            
        </Card>
        
        </div>
    </div>

    
  );
}

export default Weather;