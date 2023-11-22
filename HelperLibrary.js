
function ClearGrid()
{
	var DOMGrid = document.getElementById("grid_id");
    DOMGrid.innerHTML = "";
	
}
    
function AddBlock(x,y, color)
{
	var DOMGrid = document.getElementById("grid_id");
    
	var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "gx" + x + "y" + y);
			newDiv.setAttribute("class", color);
            DOMGrid.appendChild(newDiv);
	
}

function ChangeBlockColor(x,y, color)
{
	
    targetDiv = document.getElementById("gx" + x + "y" + y);
    targetDiv.setAttribute("class", color);
	
}
function print(text1, text2)
{
	var element = document.getElementById("scoreboard_id");
	var newDiv = document.createElement("div");
	
	var combinedText = text1;
	if (text2 != undefined) combinedText = text1 + " " + text2;
	
	newDiv.innerHTML = combinedText;
	newDiv.setAttribute("class", "workingText");
	element.appendChild(newDiv);	
}

function clearAll(){
	const element = document.getElementById("scoreboard_id");
	element.textContent = " ";	
}