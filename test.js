var m = document.querySelector("a-marker");

m.addEventListener("markerFound", (e)=>{
    console.log("found");
    alert('marker found');
    document.getElementById("HeadText").style.visibility = "visible";
});

m.addEventListener("markerLost", (e)=>{
    console.log("lost");
    alert('marker lost');
    document.getElementById("HeadText").style.visibility = "hidden";
});