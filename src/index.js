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

import img1 from "../img/carusel1.png";
import img2 from "../img/carusel2.png";
import img3 from "../img/carusel3.png";
import imgLogo from "../img/otus.png";

const imageLogo = document.querySelector("#imageLogo");
imageLogo.src = imgLogo;

const image1 = document.querySelector("#image1");
image1.src = img1;

const image2 = document.querySelector("#image2");
image2.src = img2;

const image3 = document.querySelector("#image3");
image3.src = img3;
