function Dice(){
    let randomplayer1=Math.floor(Math.random() * 6) + 1;
    let randomplayer2=Math.floor(Math.random() * 6) + 1;

    let image1=randomplayer1+".jpg";
    let image2=randomplayer2+".jpg";



    document.getElementById("player1").src = image1;
    document.getElementById("player2").src = image2;


    if (randomplayer1 > randomplayer2) {
        document.getElementById("result").textContent = "Player 1 Wins!";
      } 
    else if (randomplayer2 > randomplayer1) {
        document.getElementById("result").textContent = "Player 2 Wins!";
      } 
    else  {
        document.getElementById("result").textContent = "Draw!";
      }
}
window.onload=Dice;