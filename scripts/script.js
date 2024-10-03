// JavaScript Document
console.log("hoi");

const yellowButton = document.querySelector(".container button")

const goShopping = document.querySelector(".container a")

yellowButton.onclick = verandereContainer;


function verandereContainer(){
    goShopping.classList.toggle("big")
    console.log("hoi")
}