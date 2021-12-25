

document.querySelector(".control-button span").onclick= function(){
    // prompt box fot user to enter his name 
    let theName = prompt("enter your name");

    // check if the user entered his name or not 
    if (theName==null || theName==""){
        document.querySelector(".name span").innerHTML= "unknown"
    }else{
        document.querySelector(".name span").innerHTML= theName
    }

    // remove the splash screen to start the game 
    document.querySelector(".control-button").remove();
}

// set default duration 
let duration = 1000;

// get the memory game container
let blocksContainer = document.querySelector('.memory-game-container');

// get the block
let blocks = Array.from(blocksContainer.children);

// get the order range of the blocks 
let orderRange = [...Array(blocks.length).keys()];

//shuffle the ordered array 
shuffle(orderRange)

blocks.forEach((block,index)=>{

    // add random order to game block 
    block.style.order = orderRange[index];

    block.addEventListener('click',function(){
        block.classList.add('flip');
        
        // counter for currnt flipped cards
        let flibedItems = blocks.filter(el=>el.classList.contains('flip'));

        if(flibedItems.length ==2) {
            
            // check if the two cards match or not  
            if (flibedItems[0].getAttribute('data-name') == flibedItems[1].getAttribute('data-name') ){

                for(let i=0 ; i<flibedItems.length ; i++ ){
                    flibedItems[i].classList.add('hide');
                }
            }else{
                
                // get the tries span content
                let myTries =parseInt(document.querySelector('.tries span').innerHTML);
                myTries += 1
                document.querySelector('.tries span').innerHTML= myTries
            }
            // add class on click
            blocksContainer.classList.add('no-click');
            
            // reset all classes after 2sec
            setTimeout(() => {
                // remove class no-click
                blocksContainer.classList.remove('no-click');

                // remove class of flip from all blocks
                for(let i=0 ; i<blocks.length ; i++ ){
                    blocks[i].classList.remove('flip');
                }
            }, duration);
        }
        
    })
})

// shuffle function
function shuffle(arr){
    //set vars
    let currnet = arr.length,
        random;
    
    
    for (currnet ;currnet>0;currnet--) {

        // get random number
        random=  Math.floor(Math.random() * arr.length);

        // swap current and random values 
        arr[currnet,random]= arr[random,currnet];

    }
}
