document.addEventListener('DOMContentLoaded',()=>{
   const bird= document.querySelector('.bird');
   const ground= document.querySelector('.ground');
   const game= document.querySelector('.game');

   let birdLeft = 220;
   let birdBottom = 400;
   let gravity = 2;
   let isgameOver = false;

   function startG(){
    bird.style.left=birdLeft+'px'
    bird.style.bottom=birdBottom+'px'
    birdBottom = birdBottom - gravity;
   }
   let timer = setInterval(startG,10);
   function jump(){
    if(birdBottom <380){
    birdBottom = birdBottom + 50;
    }
    bird.style.bottom = birdBottom+"px"
   }
   document.addEventListener('keyup',jump);
   function randomBlock(){
      let blockLeft = 500;
      let blockBottom = Math.random()*60;
    let block = document.createElement('div');
    if(isgameOver==false){
      block.classList.add('block');
    }
    game.appendChild(block);
    block.style.left = blockLeft+"px";
    block.style.bottom = blockBottom+"px";
    function moveBlock(){
      blockLeft = blockLeft - 2;
      block.style.left=blockLeft+"px";
      if(blockLeft == -60){
         clearInterval(timeblock);
         game.removeChild(block)
      }
      if(birdBottom==0 || blockLeft>200 && blockLeft<280 && birdLeft==220 && birdBottom<blockBottom+180){
         gameOver();
         clearInterval(timeblock);
      }
    }
    let timeblock = setInterval(moveBlock,10);
   }
   if (isgameOver==false){ 
      setInterval(randomBlock,2000);
       }
   function gameOver(){
      isgameOver =true
      clearInterval(timer);
      document.removeEventListener('keyup',jump);
      // alert('game over')
   }
});