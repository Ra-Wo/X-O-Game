var x = document.getElementsByClassName('cube'), 
    i = 0,
    b = 0;
    
    
for (;b <= (x[0].children.length -1);){
       x[0].children[b].onclick = xo;
       b++;
   };

function xo() {
    //click ==> Put X Or O 
       if (i == 0) {
            this.textContent = 'X';
            i++;
       } else if (i == 1) {
            this.textContent = 'O';
            i--;
        };
        theWinnerXorOH();
        theWinnerXorOv();
        theWinnerXorOd();
    };

// check -------- Horizontal

function theWinnerXorOH(){
   var one = 0,
       two = 1,
       tree = 2,
       num = 0;
   for (;num < 3;num++){
        if (
          x[0].children[one].textContent == 'X'
          &&
          x[0].children[two].textContent == 'X'
          &&
          x[0].children[tree].textContent == 'X'){
              
              Xwin();
              
        } else if (
          x[0].children[one].textContent == 'O'
          &&
          x[0].children[two].textContent == 'O'
          &&
          x[0].children[tree].textContent == 'O'){
              Owin();
        }
        
        one = one + 3;
        two = two + 3;
        tree = tree + 3;
   }
};


//check ---------vertical

function theWinnerXorOv(){
   var one = 0,
       two = 3,
       tree = 6,
       num = 0;
   for (;num < 3;num++){
        if (
          x[0].children[one].textContent == 'X'
          &&
          x[0].children[two].textContent == 'X'
          &&
          x[0].children[tree].textContent == 'X'){
              Xwin();
        } else if (
          x[0].children[one].textContent == 'O'
          &&
          x[0].children[two].textContent == 'O'
          &&
          x[0].children[tree].textContent == 'O'){
              Owin();
        }
        one = one + 1;
        two = two + 1;
        tree = tree + 1;
   }
};


//check -------- Diagonal

function theWinnerXorOd(){
   var one = 0,
       two = 4,
       tree = 8,
       num = 0;
   for (;num < 3;num++){
        if (
          x[0].children[one].textContent == 'X'
          &&
          x[0].children[two].textContent == 'X'
          &&
          x[0].children[tree].textContent == 'X'){
              Xwin();
        } else if (
          x[0].children[one].textContent == 'O'
          &&
          x[0].children[two].textContent == 'O'
          &&
          x[0].children[tree].textContent == 'O'){
              Owin();
        }
        
        one = one + 1;
        tree = tree -1;
   }
};


//the win functions

function Owin() {
    setTimeout(function() {
        alert('Player O Win');
        resetGame()
    }, 80);
}

function Xwin() {
    setTimeout(function(){
        alert('Player X Win');
        resetGame()
    }, 80);
}

//reset the game 

function resetGame() {
    var b = 0;
    while (b <= (x[0].children.length - 1)) {
        x[0].children[b].textContent = '';
        b++;
    };
}

document.getElementsByClassName('reset')[0].onclick = resetGame;