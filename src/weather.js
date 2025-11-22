import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${response.data.temperature.current} degrees C`
    );
  }

  let apiKey = "3o03ae1d8at693bf40d8fb4c10733055&units=metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="blue"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "20px" }}
      wrapperClass="custom-loader"
      visible={true}
    />
  );
}
