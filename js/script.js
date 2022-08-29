let $d = document,
$btnSearch = $d.querySelector("#btnSearch"),
$modal = $d.querySelector(".modal"),
$button = $d.querySelector(".button"),
$btnAdd = $d.querySelectorAll(".btnPlus"),

$numberAdult = $d.querySelector("#adult");
$numberChildren = $d.querySelector("#children")
$numberRooms = $d.querySelector('#rooms');

$btnDecrement = $d.querySelectorAll("btnDecrese")
$button .addEventListener("click", (e)=>{
    e.preventDefault();
    $modal.classList.toggle("visibility");

});
$btnAdd.forEach((plus)=>{
    
    let count=2;
    plus.addEventListener("click", (e)=>{
        if(e.target.classList[1] == "btnPlusAdult"){ 
            count++;
            $numberAdult.textContent=count;
        }
        if(e.target.classList[1] == "btnChildren"){
            count++;
            $numberChildren.textContent=count;
        }
        if(e.target.classList[1] == "btnRooms"){
            count++;
            $numberRooms.textContent=count;
        }

                 
           
        
    });
});
