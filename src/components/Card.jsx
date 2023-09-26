import React, { useEffect, useState } from "react";
import "../styles/card.css";
import axios from "axios";

export const Card = ({ city }) => {
  const [weather, setWeather] = useState("0");
  const [flag, setFlag] = useState("");
  const loadInfo = async (city) => {
    try{
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=053c018326544c0bb31145348231209&q=${city}&aqi=no`
      );
      setWeather(response.data.current.temp_c);
    } catch(error){
      
    }
    
  };

  const loadCountryData = async(city) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${city}?fields=flags`)
    const resFlag = response.data[0].flags.png
    setFlag(resFlag)
    
    
  }

  useEffect(() => {
    loadInfo(city);
    loadCountryData(city)
  }, [city]);


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="image">
            <img src={flag} alt="" />
          </div>
          <div className="city">
            {city ? `Ubicacion: ${city}` : "Esperando ubicacion..."}
          </div>
          <div className="temp">
            {city ? `Temperatura actual de ${weather}C` : ""}
          </div>
        </div>
      </div>
    </>
  );
};
