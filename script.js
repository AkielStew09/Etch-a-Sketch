let newGridBtn = document.querySelector("#newGrid");
newGridBtn.addEventListener("click", ()=>{
    let amount = parseInt(prompt("New Grid! \nNumber of squares per side:"));

});

const renderSquares = (sides = 16)=>{
    let container = document.querySelector("#container");
    for(let i = 0; i < sides; ++i){

        for(let i = 0; i < sides; ++i){
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            
            container.appendChild(gridSquare);
        }
    }
    let squares = document.querySelectorAll(".gridSquare");

    squares.forEach((square)=>{
        square.addEventListener("mouseenter", (e)=>{
            e.target.classList.add("hover");
        });
    });
    
    
    
}




renderSquares();
