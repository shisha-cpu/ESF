
import './home.css'
import { ImageGallery } from './ImageGallery';
import React from "react";

export function Home() {


  return (
    <section className="main container">

<section>
  <div className="main-img  ">
    <img src="https://cdn.culture.ru/images/db88684e-0552-5a76-a067-b2993bdda4ac" alt="background" />
    <div className="overlay">
      <h1 className="img-title"><div className="title-strong">НАЗВАНИЕ</div> <br /> специализированный магазин товаров для людей с инвалидностью</h1>
      <button className="contact-btn"><b>Связаться с нами</b></button>
      {/* <Button  text={"Связаться с нами  "} /> */}
    </div>
  </div>
</section>
<ImageGallery />


</section>
  )
}
