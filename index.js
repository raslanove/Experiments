window.addEventListener('load', function() { 

    var div = document.getElementById("myDiv");

    setInterval(function() {
        console.log(window.getComputedStyle(div).getPropertyValue("background-color") );
    }, 50);
});
