let score=JSON.parse(localStorage.getItem
    ('score')) || {
      win:0,
      losers:0,
      ties:0
    };


    updateScoreElement();


    let computerMove = '';
    let result = '';
    let isautoplaying=false;
    let intervald;

    function pikeupcomputerMove() {
        let randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
  
        return computerMove;
      }
      
      function autoplay(){
        
        if(!isautoplaying){
        intervald=setInterval(()=>{
          const playeMove=pikeupcomputerMove();
          playgame(playeMove);
        },1000)

        isautoplaying=true;
      }else{
        clearInterval(intervald);
        isautoplaying=false;
      }
      }  

   

    function playgame(playerMove) {
      const computerMove=pikeupcomputerMove();
      let result = '';
      if (playerMove === "Rock") {
        if (computerMove === 'Rock') {
          result = 'You tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      } else if (playerMove === 'paper') {
        if (computerMove === 'Rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'You tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
      } else if (playerMove === 'scissors') {
        if (computerMove === 'Rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'You tie.';
        }
      }
      if(result==='You win.'){
        score.win +=1;
      }else if(result ==='You lose.'){
        score.losers +=1;
      }else if(result==='You tie.'){
        score.ties +=1;
      }
      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();
      document.querySelector('.js-result').innerHTML= result;
      const movesElement = document.querySelector('.js-Move');
      movesElement.innerHTML = `
        You
        <img src="/images/${playerMove}-emoji.png" class="move-icon">
        <img src="/images/${computerMove}-emoji.png" class="move-icon">
        Computer
      `;
      document.querySelector('.js-result').innerHTML= result;

    //  alert( `${result} \n\n wins:${score.win} loses: ${score.losers} ties: ${score.ties}`);



    }
    function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `
          Wins: ${score.win}, Losses: ${score.losers}, Ties: ${score.ties}`;

        }

        document.querySelector('.js-Rook-button')
        .addEventListener('click',()=>{
          playgame('Rock');
        });
        document.querySelector('.js-papeer-button')
        .addEventListener('click',()=>{
          playgame('paper');
        });
        document.querySelector('.js-scissors-button')
        .addEventListener('click',()=>{
          playgame('scissors');
        });
        document.body.addEventListener('keydown',(event)=>{
          if(event.key==='r' || event.key==='R'){
            playgame('Rock');
          }
        });
        document.body.addEventListener('keydown',(event)=>{
          if(event.key==='p' || event.key==='P'){
            playgame('paper');
          }
        });
        document.body.addEventListener('keydown',(event)=>{
          if(event.key==='s' || event.key==='S'){
            playgame('scissors');
          }
        });
       /* document.body.addEventListener('keydown',(event)=>{
          if(event.key==='a' || event.key==='A'){
            autoplay();
            if(document.querySelector('.auto-play-button js-auto-play-button').innerHTML==='auto play'){
              document.querySelector('.reset-score-button').innerHTML='Stop';
            }else if(document.querySelector('.auto-play-button js-auto-play-button').innerHTML==='Stop'){
              document.querySelector('.reset-score-button').innerHTML='auto play';
            }
          }
        });*/
        document.body.addEventListener('keydown',(event)=>{
          if(event.key==='0'|| event.key==='0'){
            score.win=0;
            score.losers=0;
            score.ties=0;
            localStorage.removeItem('score');
            updateScoreElement();
            updateResultElment();
          }
        });
        if(score.win>score.losers){
          document.title='good job!';
        }else if(score.win<score.losers){
          document.title='loser';
        }else if (score.losers === score.win || score.win ===score.losers){
          document.title='not bad';

        }else{
          document.title='Rock Paper Scissors';
        }
        document.body.addEventListener('keydown', (event) => {
          if (event.key === 'a' || event.key === 'A') {
            autoplay();
        
            // Check if the button element is selected correctly
            const autoPlayButton = document.querySelector('.auto-play-button.js-auto-play-button');
            if (!autoPlayButton) {
              console.error("Couldn't find the auto play button element");
              return;
            }
        
            if (autoPlayButton.innerHTML === 'auto play') {
              autoPlayButton.innerHTML = 'Stop';
            } else if (autoPlayButton.innerHTML === 'Stop') {
              autoPlayButton.innerHTML = 'auto play';
            }
        
            // Log the updated text for verification (optional)
            console.log("Auto play button text updated to:", autoPlayButton.innerHTML);
          }
        });
 
            function clickB(){
              let k=document.querySelector('.auto-play-button js-auto-play-button');
              if(k.innerHTML==='auto play'){
                autoPlayButton.innerHTML = 'Stop';
              }else if(k.innerHTML==='Stop'){
                k.innerHTML='auto play';
            }
            }
      
