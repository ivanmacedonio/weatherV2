import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Card } from "./Card";
import "../styles/input.css";

export const Input = () => {
  const { register, handleSubmit } = useForm();
  const [city, setCity] = useState("");

  const handleonSubmit = (data) => {
    const res = data.city;
    setCity(res);
  };

  return (
    <div>
      <div className="title">Weather app</div>
      <form onSubmit={handleSubmit(handleonSubmit)} className="input">
        <TextField
          id="outlined-basic"
          label="Ingrese una localizacion"
          variant="outlined"
          {...register("city")}
        />
      </form>

      <Card city={city} />
    </div>
  );
};
