// let match = document.querySelector('.match')
// let rock = document.querySelector('.rock')
// let paper = document.querySelector('.paper')
// let scissors = document.querySelector('.scissors')

// // let n = match.style.display = 'none'
// // let v = match.style.display = 'visible'

// let btnPlay = document.querySelector('.start-play')
// btnPlay.onclick = ()=>{
//         // match.style.display = 'visible'
//         if(n){
//             v
//         }
//         else{n}
// }
// rock.onclick = ()=>{
//     hands.
// }






















const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const  match = document.querySelector('.match')
        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')
        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            })
        })
        const computerOptions = ['rockc', 'paperc', 'scissorsc']
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
            
                //  here is where we call compare hands
                compareHands(this.textContent,computerChoice);
                // update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';

            });
        });
    };
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice,computerChoice) =>{
        const winner = document.querySelector('.winner')
        // Check for a tie 
        if(computerChoice === playerChoice){
            winner.textContent = 'It is a tie!'
            return;
        }
        // Check for a rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins! '
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins! '
                cScore++;
                updateScore();
                return;                
            }
        }
         //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins! '
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins! '
                pScore++;
                updateScore();
                return;
            }
        }
        // check for scissors 
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins! '
                cScore++;
                return;
            }
            else{
                winner.textContent = 'Player Wins! '
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
    // updateScore();

}
game();

