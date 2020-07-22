// window.onload = function() {  // reload file every second
// 	setInterval(function() { location.reload(); } , 1000);
// };

function getHistory(){
	return document.getElementById("history").innerText;
}
function printHistory (num) {
	document.getElementById("history").innerText=num;
}
function getOutputValue () {
	return document.getElementById("output").innerText;
}
function printOutput (num) {
	if(num=="")
	{
		document.getElementById("output").innerText=num;
	}
	else{
		document.getElementById("output").innerText=num;
	}
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
	operator[i].addEventListener('click',function(){
		if(this.id=="clear")
		{
			printHistory("");
			printOutput("");
		}
		else if(this.id=="inverse")
		{
			var negative=getOutputValue()*-1;
			printOutput(negative);
		}
		else if(this.id=="."){
			var start=getOutputValue();
			start=start+this.id;
			printOutput(start);
		}
		// else if(this.id=="+")
		// {
		// 	history=history+this.id;
		// 			printHistory(history);
		// 			printOutput("");
		// }
		else{
			var output=getOutputValue();
			var history=getHistory();
			if(output=="" && history!="")
			{
				if(isNaN(history[history.length-1]))
				{
					history=history.substring(0,history.length-1);
				}
			}
			if(output!="" || history!="")
			{
				history=history+output;
				if(this.id=="=")
				{
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
	number[i].addEventListener('click',function(){
		var output=getOutputValue();
		if(output!=NaN)
		{
			output=output+this.id;
			printOutput(output);
		}
	});
}