console.log('coucou');

const x = 50;
const y = 50;
const temps = 20;

const parent = document.querySelector("#plateau");
parent.classList.add('grid');
parent.style.gridTemplateColumns = "repeat("+x+",14px)";
parent.style.gridTemplateRows = "repeat("+y+",14px)";




// console.log(plateau);
first_generation();

function first_generation(){

    let plateau = [];
    for (let colomn = 0; colomn<x ; colomn++){
        let range = [];
        for (let ligne = 0; ligne<y ; ligne++){
            parent.appendChild(document.createElement("div")); 
            range.push(Boolean(Math.round(Math.random())))
        }
        plateau.push(range);
    }

    for (let l=0; l<x; l++){
        for (let c=0; c<y; c++){
             let rang = l*x+c; 
            //  console.log(rang); 
             let current = document.querySelector("#plateau :nth-child("+ rang +")");  
            if(current){
                if(plateau[l][c]==true){
                    current.classList.add('alive');
                    // console.log("vie");
                }
                if(plateau[l][c]==false){
                    current.classList.remove('alive');
                    // console.log("mort");
                }
            }

          

        }
    } 
     next_generation();
}


function next_generation(){

    let array =[];
    for (let l=0; l<x; l++){
        for (let c=0; c<y; c++){

            console.log(l,c);

            // au dessus
            if(l-1>=0){
                console.log(l-1,c);
                if(plateau[l-1][c]){
                    if(plateau[l-1]==true){
                    array.push(true);
                    }
                }
                if(plateau[l-1][c-1]){
                    if(plateau[l-1][c]==true){
                        array.push(true);
                    }
                }
                if(plateau[l-1][c+1]){
                    if(plateau[l-1][c]==true){
                        array.push(true);
                    }
                }
            }

            // à coté
            if(c-1>=0){
                if(plateau[l][c-1]){
                    if(plateau[l-1][c]==true){
                        array.push(true);
                    }
                }
                if(plateau[l][c+1]){
                    if(plateau[l-1][c]==true){
                        array.push(true);
                    }
                }
            }
            

            //dessous

            if(l+1<50){
                if(plateau[l+1][c]){
                    if(plateau[l-1][c]==true){
                    array.push(true);
                    }
                }
                if(plateau[l+1][c-1]){
                    if(plateau[l-1][c]==true){
                    array.push(true);
                    }
                }
                if(plateau[l+1][c+1]){
                    if(plateau[l-1][c]==true){
                    array.push(true);
                    }
                }
                
            }

            if(array.length > 3){
                plateau[l][c]=false;
                current.classList.remove('alive');
            }
           console.log(array);
        }
    }
}