"use strict";
import GetInfoForm from "./GetInfoForm.js";

window.onload = () => {
    try {
        const title = document.querySelector('#title')
        title.innerHTML = `Helo ${decodeURIComponent(GetInfoForm()['name'])}`
    } catch {

    }
}