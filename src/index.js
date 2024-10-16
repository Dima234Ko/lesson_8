/* eslint-disable no-unused-vars */
import "./style.css";
import "./body.css";
import "./header.css";
import "./media.css";
import "./footer.css";
import "./bootstrap/dist/css/bootstrap.css";

// import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";

import { Carousel } from "./carusel.js";

document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.getElementById("carouselExample");
  const carousel = new Carousel(carouselElement);
});

import img from "../img/otus.png";
import img2 from "../img/carusel1.png";
import img3 from "../img/carusel2.png";
import img4 from "../img/carusel3.png";

const image = document.querySelector("#logo");
image.src = img;

const image2 = document.querySelector("#image2");
image2.src = img2;

const image3 = document.querySelector("#image3");
image3.src = img3;

const image4 = document.querySelector("#image4");
image4.src = img4;
