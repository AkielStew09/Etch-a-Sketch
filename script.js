let newGridBtn = document.querySelector("#newGrid");

newGridBtn.addEventListener("click", ()=>{
    let amount = parseInt(prompt("New Grid! \nNumber of squares per side (max. 100):"));
    if(amount > 0 && amount <= 100){
        renderSquares(amount);
    } 

});

const renderSquares = (sides = 16)=>{

    //retrieve container and initialise it to empty.
    let container = document.querySelector("#container");
    container.innerHTML = "";

    //nested for loop, to feel more two dimensional idk. I'm used to doing it like this
    for(let i = 0; i < sides; ++i){

        for(let i = 0; i < sides; ++i){
            //create square div, apply the class and set the width to exactly 
            // take up the width with the calc function, dividing the 
            //100% container width by the number of sides.
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            gridSquare.style.width = `calc(100% / ${sides})`;

            
            container.appendChild(gridSquare);
        }
    }
    //retrieve all the squares
    let squares = document.querySelectorAll(".gridSquare");

    //iterates and adds the mouseenter event to each one
    // which adds the hovered class.
    squares.forEach((square)=>{
        square.addEventListener("mouseenter", (e)=>{
            e.target.classList.add("hovered");
        });
    });
    
    
    
}




//renderSquares();
