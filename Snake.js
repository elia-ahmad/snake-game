// Name: Elia Ahmad Alshaiban
// Date: 6/11/23
// Version: 2
// Project: Snake game

//<img id="apple" src="apple.png" alt="apple">

let board =[["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"]
			]

//[y,x]
let snake =[[3,3],[4,3],[5,3]];
let snake2 =[[16,16],[15,16],[14,16]];
let direction ="right";
let direction2 ="left";
let Timer;
let Apple;
let player1;
let player2;
let heart;
let heart2;
function CreateApple()
{
let xRandompos = Math.floor(Math.random()*20);
let yRandompos = Math.floor(Math.random()*20);
//check if it is not in blank space, and reposition 
while(board[yRandompos][xRandompos] != ".")
{
xRandompos = Math.floor(Math.random()*20);
yRandompos = Math.floor(Math.random()*20);
}
Apple = [yRandompos,xRandompos];
}


function DrawBoard()
{
ClearGrid();

//snake 1
//Add snake to board
for(let i in snake){
let xPossnake=snake[i][0];
let yPossnake=snake[i][1];
board[yPossnake][xPossnake]="S";
}
let xPossnakeHead = snake[snake.length-1][0];
let yPossnakeHead = snake[snake.length-1][1];
	board[yPossnakeHead][xPossnakeHead]="H1";

//snake 2
//Add snake to board
for(let i in snake2){
	let xPossnake2=snake2[i][0];
	let yPossnake2=snake2[i][1];
	board[yPossnake2][xPossnake2]="N";
	}
	let xPossnakeHead2 = snake[snake.length-1][0];
	let yPossnakeHead2 = snake[snake.length-1][1];
	board[yPossnakeHead2][xPossnakeHead2]="H2";
//add apple
let xposapple = Apple[0];
let yposapple = Apple[1];
board[yposapple][xposapple]="A";

//draw board
let count=0;
 for(let y=0;y<board.length;y++)
 {
	for(let x=0;x<board[y].length;x++)
	{
		 count++;
		if(board[y][x]=="W") AddBlock(x,y,"brown");
		else if(board[y][x]=="." && count%2==0) AddBlock(x,y,"grass");
		else if(board[y][x]=="." && count%2!=0) AddBlock(x,y,"grass1");
		else if(board[y][x]=="S") AddBlock(x,y,"Ybody");
		else if(board[y][x]=="N") AddBlock(x,y,"Rbody");
		else if(board[y][x]=="A") AddBlock(x,y,"red");
		else if(board[y][x]=="H1") AddBlock(x,y,"Yhead");
		else if(board[y][x]=="H2") AddBlock(x,y,"Rhead");
	}
	count++; //to make grid checkered
 }
}
let timer = setInterval(scoreboard,200);
function scoreboard()
{
	clearAll();
	print("Score Board:");
	print("player one:"+player1);
	print("hearts: "+heart);
	print("player two:"+player2);
	print("hearts: "+heart2);
}
function Game()
{
	heart=3;
	heart2=3;
	player1=0;
	player2=0;
	CreateApple();
	StartGame();
}

function StartGame()
{

DrawBoard();
Timer= setInterval(Tick,600);
document.addEventListener("keydown", KeyPressed);
scoreboard();
}

function KeyPressed(event)
{
	//player 1
// w=87 d=68 a=65 s=83
// get key code value
if(event.keyCode==87 && direction!="down") direction='up';
if(event.keyCode==68 && direction!="left") direction='right';
if(event.keyCode==65 && direction!="right") direction='left';
if(event.keyCode==83 && direction!="up") direction='down';

//player 2
//left=37 up=38 right=39 down=40
// get key code value
if(event.keyCode==38 && direction2!="down") direction2='up';
if(event.keyCode==39 && direction2!="left") direction2='right';
if(event.keyCode==37 && direction2!="right") direction2='left';
if(event.keyCode==40 && direction2!="up") direction2='down';
}

function MoveSnake()
{
	//player 1
	let isGrowing=false;


//player 1:

	//get x & y positions of head
let xPossnakeHead = snake[snake.length-1][0];
let yPossnakeHead = snake[snake.length-1][1];

//check for collisions

//current position
let xposheadnext = snake[snake.length-1][0];
let yposheadnext = snake[snake.length-1][1];

//updated
if(direction=="right") xposheadnext++;
if(direction=="left") xposheadnext--;
if(direction=="up") yposheadnext--;
if(direction=="down") yposheadnext++;
//check if hit a wall
if(board[yposheadnext][xposheadnext]=="W"|| board[yposheadnext][xposheadnext]=="S" || board[yposheadnext][xposheadnext]=="N" || board[yposheadnext][xposheadnext]=="H2") {	
	
	if(heart==0){
		GameOver();
		alert("GAME OVER! Orange won!");
		return null;
	}
	else {
		GameOver("yellow");
		print("Blue lost a heart!");
		return null; //to exit function
}
	
}

//check if hit apple
if(board[yposheadnext][xposheadnext]=="A") {
	isGrowing=true;
	player1++;
	// make apple blank
let applexpos = Apple[0];
let appleypos = Apple[1];
	board[appleypos][applexpos]=".";
	CreateApple();

	
}

if(player1==5){
	GameOver();
	alert("Blue won!");
	return null;
}

//add new position
if (direction=="right"){
snake.push([xPossnakeHead+1,yPossnakeHead]);
}
if (direction=="left"){
	snake.push([xPossnakeHead-1,yPossnakeHead]);
}
if (direction=="up"){
	snake.push([xPossnakeHead,yPossnakeHead-1]);
}
if (direction=="down"){
	snake.push([xPossnakeHead,yPossnakeHead+1]);
}

if(!isGrowing)
{
//get x & y positions of head
let xPossnakeTail = snake[0][0];
let yPossnakeTail = snake[0][1];
//fix board
board[yPossnakeTail][xPossnakeTail] = ".";
//remove last segment
snake.shift();
}


//redraw board
DrawBoard();

}
function MoveSnake2()
{
	//player 2
	let isGrowing2=false;




//player 2:

	//get x & y positions of head
	let xPossnakeHead2 = snake2[snake2.length-1][0];
	let yPossnakeHead2 = snake2[snake2.length-1][1];
	
	//check for collisions
	
	//current position
	let xposheadnext2 = snake2[snake2.length-1][0];
	let yposheadnext2 = snake2[snake2.length-1][1];
	
	//updated
	if(direction2=="right") xposheadnext2++;
	if(direction2=="left") xposheadnext2--;
	if(direction2=="up") yposheadnext2--;
	if(direction2=="down") yposheadnext2++;
	//check if hit a wall
	if(board[yposheadnext2][xposheadnext2]=="W"|| board[yposheadnext2][xposheadnext2]=="S" || board[yposheadnext2][xposheadnext2]=="N" || board[yposheadnext2][xposheadnext2]=="H1") {
		if(heart2==0){
			GameOver();
			alert("GAME OVER! Blue won!");
			return null;
		}
		else {
		GameOver('red');
		print("Orange lost a heart!");
		}
		return null; //to exit function
	}
	
	//check if hit apple
	if(board[yposheadnext2][xposheadnext2]=="A") {
		isGrowing2=true;
		player2++;
		// make apple blank
	let applexpos = Apple[0];
	let appleypos = Apple[1];
		board[appleypos][applexpos]=".";
		CreateApple();

		
	}

	if(player2==5){
		alert("Orange won!");
		GameOver();
		return null;
	}

	//add new position to right
	if (direction2=="right"){
	snake2.push([xPossnakeHead2+1,yPossnakeHead2]);
	}
	if (direction2=="left"){
		snake2.push([xPossnakeHead2-1,yPossnakeHead2]);
	}
	if (direction2=="up"){
		snake2.push([xPossnakeHead2,yPossnakeHead2-1]);
	}
	if (direction2=="down"){
		snake2.push([xPossnakeHead2,yPossnakeHead2+1]);
	}
	
	if(!isGrowing2)
	{
	//get x & y positions of head
	let xPossnakeTail2 = snake2[0][0];
	let yPossnakeTail2 = snake2[0][1];
	//fix board
	board[yPossnakeTail2][xPossnakeTail2] = ".";
	//remove last segment
	snake2.shift();
	}


//redraw board
DrawBoard();

}
//logic loop
function Tick()
{
MoveSnake();
MoveSnake2();
}

function GameOver(x)
{
	clearInterval(Timer);
	board =[["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","W"],
			["W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W","W"]
			]
			if(x=="yellow"){
				snake =[[3,3],[4,3],[5,3]];
				direction="right";
				heart--;
			}
			else if(x=="red"){
				snake2 =[[16,16],[15,16],[14,16]];
				direction2="left";
				heart--;
			}
			else {
				snake =[[3,3],[4,3],[5,3]];
				snake2 =[[16,16],[15,16],[14,16]];
				direction="right";
				direction2="left";
				player1=0;
				player2=0;
				heart=3;
				heart2=3;
				let applexpos = Apple[0];
				let appleypos = Apple[1];
				board[appleypos][applexpos]=".";
				ClearGrid();
				let count=0;
 for(let y=0;y<board.length;y++)
 {
	for(let x=0;x<board[y].length;x++)
	{
		 count++;
		if(board[y][x]=="W") AddBlock(x,y,"brown");
		else if(board[y][x]=="." && count%2==0) AddBlock(x,y,"grass");
		else if(board[y][x]=="." && count%2!=0) AddBlock(x,y,"grass1");
		else if(board[y][x]=="S") AddBlock(x,y,"Ybody");
		else if(board[y][x]=="N") AddBlock(x,y,"Rbody");
		else if(board[y][x]=="H1") AddBlock(x,y,"Yhead");
		else if(board[y][x]=="H2") AddBlock(x,y,"Rhead");
	}
	count++; //to make grid checkered
 }
				return;
			}
StartGame();
}

