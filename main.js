const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
   constructor(field){
    this._field = field
   }

   print(){
    return this._field.map(e => e.join('')).join('')
   }

   static generateField(height, width){
    return this_field[height][width];
}

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
    ['░', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '░', 'O'],
    ['░', 'O', '░'],
  ]);


//counting positing to move right
let index = 1
startGame();


//This function starts the game
function startGame(){
    //user give the direction
    console.log(myField.print())
    //printIntials()
    let intiailStartingpoint = startingPoint(myField._field)
    //print the starting points
    console.log('Intial starting point is ' + intiailStartingpoint)

    let direction; 
    let cap = ''

    
    //loop till the user finds the hat
    while(cap !== '^'){
        direction = prompt('Which way? ');
        
        if(direction === 'r'){
            if(index < myField._field[0].length){
                myField._field[0][0 + index] = "*"
                index++
            }else {
                console.log('You have reached end, choose another way!')
            }
        }else if(direction === 'd'){
    
        }else if(direction === 'l'){
    
        }else if (direction === 'u'){
    
        }else if(direction === 'p' || direction === 'print'){
            console.log(myField.print())
        }else{
            console.log('Put in the correct input!')
        }
        cap = direction;
        if(cap === '^'){
            console.log('You have found your hat');
        }else if(cap === 'O'){
            console.log('You have fallen in the hole!');
            cap = '^'
        }else if(direction === 'print'){
        }
    }
}

//this function looks for the starting point,
//stating point has a *
function startingPoint(field){
    let startPoint = []

    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            if(field[i][j] === '*'){
                startPoint.push(i)
                startPoint.push(j)
            }
        }
    }
     return startPoint
}

  
//printing directions
function printIntials(){
    console.log('r for right, l for left, d for down, u for up, print for printing the field')
}


//move  right
function moveRight(){
    //toDo
}

//move down
function moveDown(){
    //toDo
}

//move left
function moveLeft(){
    //toDo
}

//move up
function moveUp(){
    //toDo
} 