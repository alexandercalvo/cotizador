let $d = document,
$btnSearch = $d.querySelector("#btnSearch"),
$modal = $d.querySelector(".modal"),
$button = $d.querySelector(".button"),
$btnAdd = $d.querySelectorAll(".btnPlus"),
$btnDecrese =$d.querySelectorAll(".btnDecrese"),
$numberAdult = $d.querySelector("#adult"),
$numberChildren = $d.querySelector("#children"),
$numberRooms = $d.querySelector('#rooms'),
$child = $d.querySelector('.child'),
child
$btnFind = $d.querySelector("#search");
$btnDecrement = $d.querySelectorAll("btnDecrese");


$d.addEventListener("click", (e)=>{

    if(e.target.matches(".btnPlus")){
        clickAdd(e.target);
    } 
    if(e.target.matches(".btnDecrese")){
        clickDecrement(e.target);
    }
    
    if(e.target.matches(".button") || e.target.matches(".fa-user") || e.target.matches(".paragrap")){
        e.preventDefault();
        $modal.classList.toggle("visibility");  
    }

    if(e.target== $btnSearch){
        console.log(arreglo);
    }
});
let arreglo = "";
$d.addEventListener("keydown", (e)=>{
    if(e.target== $btnFind){

         let t = new  KeyboardEvent(e);
         
            arreglo += e.key;
    
       
    }
})

const addChildren = () =>{
        let child = $d.createElement("input");
        child.setAttribute("type", "text");
        child.setAttribute("placeholder", "edad niños");
        $child.appendChild(child);
    
}

const removeChildren = ()=>{
    let child = $d.createElement("input");
        child.setAttribute("type", "text");
        child.setAttribute("placeholder", "edad niños");
        console.log(($child.children.length) -1);
        child.removeChild(child.children[($child.children.length) -2]);
       
}
const clickAdd = (target) =>{
    if(target.classList[1] == "btnPlusAdult"){ 
        $numberAdult.textContent =  setCount( $numberAdult.textContent, "add");
    }
    if(target.classList[1] == "btnChildren"){
        $numberChildren.textContent = setCount($numberChildren.textContent, "add");
        if($numberChildren.textContent>0){
            addChildren();
          

        }
    }
    if(target.classList[1] == "btnRooms"){
        $numberRooms.textContent = setCount( $numberRooms.textContent, "add");
    }    
        

}

const clickDecrement = (target) =>{
    if(target.classList[1] == "btnAdult"){
        $numberAdult.textContent =  setCount( $numberAdult.textContent, "decrement");
   }

   if(target.classList[1] == "btnChildren"){
       $numberChildren.textContent = setCount($numberChildren.textContent, "decrement");
       if($numberChildren.textContent>0){
        removeChildren();
      }
   }

   if(target.classList[1] == "btnRooms"){
       $numberRooms.textContent = setCount( $numberRooms.textContent, "decrement");
       
   }

}

const setCount = (count, operation ) =>{
    if(count ==1  && operation =="decrement"){
         return count;
    }

    if(operation=="add"){
       count = Number(count) + 1;

    }
    if(operation =="decrement"){
       count =  Number(count) -1;
    }

    return count;
}