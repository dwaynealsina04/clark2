 const cafeList = document.querySelector('#cafe-list');


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
       
      
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function temporary() {
    
    document.getElementById("temp").src="images\2.jpg";
   
    
    
    
}