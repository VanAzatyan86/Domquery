let myPicture = document.querySelectorAll(".myPicture");
let onlyText = document.querySelectorAll(".onlyText");
let h5 = document.getElementsByTagName("h5");
let h6 = document.getElementsByTagName("h6");
let p = document.getElementsByTagName("p");

console.log(h5);
 for (let i = 0; i < myPicture.length; i++) {
    myPicture[i].classList.add("myStyle")
 };
 for (let i = 0; i <  h5.length; i++){
   h5[i].style.color = "#102A42";
   h5[i].style.fontFamily ="var(--ff-primary)";
 };
 for (let i = 0; i <  h6.length; i++){
   h6[i].style.color = "#C59D5F"
 };
 for (let i = 0; i <  p.length; i++){
   p[i].style.color = "#567F91";
   p[i].style.fontSize = "17px";
 }

