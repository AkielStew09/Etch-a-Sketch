let newGridBtn = document.querySelector("#newGrid");
newGridBtn.addEventListener("click", ()=>{
    let amount = parseInt(prompt("New Grid! \nNumber of squares per side (max. 100):"));
    if(amount > 0 && amount <= 100){
        renderSquares(amount);
    } 

});

const renderSquares = (sides = 16)=>{

    let container = document.querySelector("#container");
    container.innerHTML = "";
    for(let i = 0; i < sides; ++i){

        for(let i = 0; i < sides; ++i){
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            gridSquare.style.width = `calc(100% / ${sides})`;

            
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
