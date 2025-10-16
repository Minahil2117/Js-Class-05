//Task 1
const changeColor = () => {
  let paras = document.querySelectorAll(".myPara"); 
  paras[0].style.color = "blue";
  paras[1].style.color = "green"; 
  paras[2].style.color = "yellow";
}
//Task 2
const changeBorders = () => {
  let images = document.querySelectorAll(".myImage");
  if (images.length >= 4) {
    images[0].style.border = "5px solid red";
    images[1].style.border = "5px dotted blue";
    images[2].style.border = "5px dashed green";
    images[3].style.border = "5px double yellow";
  } else {
    console.error("Not enough elements with class 'myImage' found.");
  }
}

