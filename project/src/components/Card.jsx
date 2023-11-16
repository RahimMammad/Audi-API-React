import React from 'react'
import "./Card.css"

const Card = ( {item} ) => {
    // console.log(item);
  return (
    <div style={{width: "400px", padding: "20px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <img style={{width: "100%", height: "250px"}} src={item.image} alt="" />
        <h1 style={{fontSize: "28px"}}>{item.manufacturer} {item.model}</h1>
        <h3>Engine: {item.engine}.0 {item.charger}</h3>
        <h3>Horse-power: {item.horsepower} Bhp</h3>
        <h3>Torque: {item.torque} N/m</h3>
        <h3>0-100: {item.acceleration} second</h3>
        <h3>Type: {item.car_type} second</h3>
        <span style={{fontWeight: "600", fontSize: "22px"}}>Price: {item.price}$</span>
    </div>
  )
}

export default Card