const renderSquares = ()=>{
    let container = document.querySelector("#container");
    for(let i = 0; i < 16; ++i){

        for(let i = 0; i < 16; ++i){
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "gridSquare");
            
            container.appendChild(gridSquare);
        }
    }
    
}




renderSquares();
