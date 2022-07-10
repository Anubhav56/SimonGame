let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let win = true;
let on;
let lose;

const row1Box1 = document.querySelector(".box .row1 .box1");
const row1Box2 = document.querySelector(".box .row1 .box2"); 
const row1Box3 = document.querySelector(".box .row1 .box3"); 
const row2Box1 = document.querySelector(".box .row2 .box1"); 
const row2Box2 = document.querySelector(".box .row2 .box2"); 
const row2Box3 = document.querySelector(".box .row2 .box3"); 
const row3Box1 = document.querySelector(".box .row3 .box1"); 
const row3Box2 = document.querySelector(".box .row3 .box2"); 
const row3Box3 = document.querySelector(".box .row3 .box3"); 



const turnCounter = document.querySelector("#turn");
turnCounter.innerHTML = "-";

const startButton = document.querySelector("#start");

startButton.addEventListener('click', ()=>{
	if(win || lose)
		play();
});

function setOrder() {
	order = [];
	for (let i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 9) + 1);
	}
}

function play() {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	turnCounter.innerHTML = 1;
	good = true;
	lose = false;
	noise = true;

	setOrder();
	compTurn = true;

	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	on = false;

	if(flash == turn){
		clearInterval(intervalId);
		// console.log("hi");
		compTurn = false;
		clearColor();
		on = true;
	}

	if(compTurn){
		clearColor();
		setTimeout(() => {
			if(order[flash] == 1) colorChange(row1Box1);
			if(order[flash] == 2) colorChange(row1Box2);
			if(order[flash] == 3) colorChange(row1Box3);
			if(order[flash] == 4) colorChange(row2Box1);
			if(order[flash] == 5) colorChange(row2Box2);
			if(order[flash] == 6) colorChange(row2Box3);
			if(order[flash] == 7) colorChange(row3Box1);
			if(order[flash] == 8) colorChange(row3Box2);
			if(order[flash] == 9) colorChange(row3Box3);

			flash++;
		},200);
	}
	// console.log(flash);
}

function playAudio() {
	let audio = document.querySelector("#clip");
	audio.play();
}

function colorChange(cell){
	if(noise){
		playAudio();
	}
	noise = true;
	cell.style.backgroundColor = "greenyellow";
}

function clearColor() {
	row1Box1.style.backgroundColor = "grey";
	row1Box2.style.backgroundColor = "grey";
	row1Box3.style.backgroundColor = "grey";
	row2Box1.style.backgroundColor = "grey";
	row2Box2.style.backgroundColor = "grey";
	row2Box3.style.backgroundColor = "grey";
	row3Box1.style.backgroundColor = "grey";
	row3Box2.style.backgroundColor = "grey";
	row3Box3.style.backgroundColor = "grey";
}

function flashColor(flag) {
	row1Box1.style.backgroundColor = flag;
	row1Box2.style.backgroundColor = flag;
	row1Box3.style.backgroundColor = flag;
	row2Box1.style.backgroundColor = flag;
	row2Box2.style.backgroundColor = flag;
	row2Box3.style.backgroundColor = flag;
	row3Box1.style.backgroundColor = flag;
	row3Box2.style.backgroundColor = flag;
	row3Box3.style.backgroundColor = flag;
}

function check() {
	if(playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
		good = false;

	if(playerOrder.length == 20 && good)
		winGame();

	if(good == false){
		flashColor("red");
		turnCounter.innerHTML = "LOSE!";
		lose = true;
		noise = false;
		on = false;
	}

	if(turn == playerOrder.length && good && !win){
		turn++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		turnCounter.innerHTML = turn;
		setOrder();
		intervalId = setInterval(gameTurn, 800);
	}
}

function winGame() {
	flashColor("green");
	turnCounter.innerHTML = "WIN!!";
	on = false;
	win = true;
}

row1Box1.addEventListener('click', (event)=>{
	if(on){
		playerOrder.push(1);
		colorChange(row1Box1);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
})

row1Box2.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(2);
		colorChange(row1Box2);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row1Box3.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(3);
		colorChange(row1Box3);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row2Box1.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(4);
		colorChange(row2Box1);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row2Box2.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(5);
		colorChange(row2Box2);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row2Box3.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(6);
		colorChange(row2Box3);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row3Box1.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(7);
		colorChange(row3Box1);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row3Box2.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(8);
		colorChange(row3Box2);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});

row3Box3.addEventListener('click', ()=>{
	if(on){
		playerOrder.push(9);
		colorChange(row3Box3);
		check();
		if(!win && !lose){
			setTimeout(()=>{
				clearColor();
			},400);
		}
	}
});



