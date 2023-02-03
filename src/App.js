import React from "react";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "./App.css"

const App = ()=>{
return(
  <div>
    <ImageSlider slides={SliderData}></ImageSlider>
  </div>
)
}
export default App