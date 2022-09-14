"use strict";
import GetInfoForm from "./GetInfoForm.js";

window.onload = () => {
  const name = GetInfoForm()["name"];
  if (name != undefined) {
    const title = document.querySelector("#title");
    title.innerHTML = `Helo ${decodeURIComponent(name)}`;
  }
};
