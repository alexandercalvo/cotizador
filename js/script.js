let $d = document,
$btnSearch = $d.querySelector("#btnSearch"),
$modal = $d.querySelector(".modal"),
$button = $d.querySelector(".button"),
$btnAdd = $d.querySelectorAll(".btnPlus"),

$numberAdult = $d.querySelector("#adult");
$numberChildren = $d.querySelector("#children")

$btnDecrement = $d.querySelectorAll("btnDecrese")
$button .addEventListener("click", (e)=>{
    e.preventDefault();
    $modal.classList.toggle("visibility");

});
let count=2;
$btnAdd.forEach((plus)=>{
    plus.addEventListener("click", (e)=>{
     
        if(e.target.classList[1] == "btnPlusAdult"){ 

              
          
            count++;
            $numberAdult.textContent=count;
       }
       if(e.target.classList[1] == "btnChildren"){
      
      
            count++;
            $numberChildren.textContent=count;
        }
     if(e.target.classList[1] == plus.classList[1]){
      
        count++;
      
    }
            
           
        
    });
});