//console.log("js has been loaded!! LFG!");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("mobileMenu");

//"event name", callback function
menuBtn.addEventListener("click", function(){
    //console.log("clicked!");
    mobileMenu.classList.add("active");
}); //end of menuBtn click

closeBtn.addEventListener("click", function(){
    //console.log("clicked!");
    mobileMenu.classList.remove("active");
}); //end of menuBtn click

