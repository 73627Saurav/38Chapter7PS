document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red"

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "yellow";
})     
// We use the Array.from() method when we want to convert an iterable object into an actual array