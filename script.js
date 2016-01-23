$(document).ready(function(){
var countx=0;
var county=0;
var b0=false;
var b1=false;
var b2=false;
var b3=false;
var b4=false;
var b5=false;
var b6=false;
var b7=false;
var b8=false;
var start=false;
var flag=0;
var count=true;
var button=document.getElementsByClassName("column");
var x=document.getElementById("result");

$(".button").hover(function(){
	
	$(this).toggleClass("highlight");

});
$("#go").click(function(){

		if($("#input1").val()==="" || $("#input2").val()==="")
			alert("Please Enter Player Names..!!")
		else
			start=true;
});
$("#reset").click(function(){

	console.log("Clicked reset");
	countx=0;
	county=0;
	b0=false;
	b1=false;	
	b2=false;
	b3=false;
	b4=false;
	b5=false;
	b6=false;
	b7=false;
	b8=false;
	start=false;
	flag=0;
	count=true;
	for(i=0; i<button.length; i++){
		button[i].innerHTML="";
	}
	$("#input1").val("");
	$("#input2").val("");
	x.innerHTML="";
		
});


$("#b1").click(function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b0){
		b0=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(500);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(0,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(0,"O"))
			checkDraw();
		}
		
	}

});

button[1].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b1){
			b1=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(1,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(1,"O"))
			checkDraw();
		}
		
	}

}

button[2].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b2){
		b2=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(2,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(2,"O"))
			checkDraw();
		}
		
	}

}

button[3].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b3){
		b3=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(3,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(3,"O"))
			checkDraw();
		}
		
	}

}

button[4].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b4){
		b4=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(4,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(4,"O"))
			checkDraw();
		}
		
	}

}

button[5].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b5){
		b5=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(5,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(5,"O"))
				checkDraw();
		}
		b5=true;
	}

}

button[6].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b6){
		b6=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(6,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(6,"O"))
			checkDraw();
		}
		

	}

}

button[7].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b7){
			b7=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(7,"X"))
				checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(7,"O"))
				checkDraw();
		}
		
	}

}

button[8].onclick=function(){
	if(!start){alert("Enter Names And Click Go..!!!")}
	else if(!b8){
		b8=true;
		if(count){
			$(this).text("X");
			$(this).hide();
			$(this).fadeIn(1000);
			count=false;
			countx++;
			if(countx>=3)
				if(!validate(8,"X"))
			checkDraw();
		}
		else{
			$(this).text("O");
			$(this).hide();
			$(this).fadeIn(1000);
			count=true;
			county++;
			if(county>=3)
				if(!validate(8,"O"))
			checkDraw();
		}
		
	}

}




var validate= function(position,ch){

	if(position===0){

		if(button[position+1].innerHTML===ch){
			if(button[position+2].innerHTML===ch){
				flag=1;
				stop(ch,position,position+1,position+2);

			}
		}
		if(button[position+3].innerHTML===ch){
			if(button[position+6].innerHTML===ch){
				flag=1;
				stop(ch,position,position+3,position+6);
			}
		}
		if(button[position+4].innerHTML===ch){
			if(button[position+8].innerHTML===ch){
				flag=1;
				stop(ch,position,position+4,position+8);
			}
		}
	}
	else if(position===6){
		if(button[position+1].innerHTML===ch){
			if(button[position+2].innerHTML===ch){
				flag=1;
				stop(ch,position,position+1,position+2);
			}
		}
		if(button[position-3].innerHTML===ch){
			if(button[position-6].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position-6);
			}
		}
		if(button[position-2].innerHTML===ch){
			if(button[position-4].innerHTML===ch){
				flag=1;
				stop(ch,position,position-2,position-4);

			}
		}
	}
	else if(position===2){
		if(button[position-1].innerHTML===ch){
			if(button[position-2].innerHTML===ch){
				flag=1;
				stop(ch,position,position-1,position-2);
			}
		}
		if(button[position+3].innerHTML===ch){
			if(button[position+6].innerHTML===ch){
				flag=1;
				stop(ch,position,position+3,position+6);
			}
		}
		if(button[position+2].innerHTML===ch){
			if(button[position+4].innerHTML===ch){
				flag=1;
				stop(ch,position,position+2,position+4);
			}
		}
	}
	else if(position===8){
		if(button[position-3].innerHTML===ch){
			if(button[position-6].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position-6);
			}
		}
		if(button[position-1].innerHTML===ch){
			if(button[position-2].innerHTML===ch){
				flag=1;
				stop(ch,position,position-2,position-1);
			}
		}
		if(button[position-4].innerHTML===ch){
			if(button[position-8].innerHTML===ch){
				flag=1;
				stop(ch,position,position-4,position-8);
			}
		}
	}
	else if(position===1){
		if(button[position+3].innerHTML===ch){
			if(button[position+6].innerHTML===ch){
				flag=1;
				stop(ch,position,position+3,position+6);
			}
		}
		if(button[position-1].innerHTML===ch){
			if(button[position+1].innerHTML===ch){
				flag=1;
				stop(ch,position,position-1,position+1);
			}
		}		
	}
	else if(position===7){
		if(button[position-3].innerHTML===ch){
			if(button[position-6].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position-6);
			}
		}
		if(button[position-1].innerHTML===ch){
			if(button[position+1].innerHTML===ch){
				flag=1;
				stop(ch,position,position+1,position-1);
			}
		}		
	}
	else if(position===3){
		if(button[position+1].innerHTML===ch){
			if(button[position+2].innerHTML===ch){
				flag=1;
				stop(ch,position,position+1,position+2);
			}
		}
		if(button[position-3].innerHTML===ch){
			if(button[position+3].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position+3);
			}
		}		
	}
	else if(position===5){
		if(button[position-1].innerHTML===ch){
			if(button[position-2].innerHTML===ch){
				flag=1;
				stop(ch,position,position-1,position-2);
			}
		}
		if(button[position-3].innerHTML===ch){
			if(button[position+3].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position+3);
			}
		}		
	}
	else if(position===4){
		if(button[position+1].innerHTML===ch){
			if(button[position-1].innerHTML===ch){
				flag=1;
				stop(ch,position,position+1,position-1);
			}
		}
		if(button[position-3].innerHTML===ch){
			if(button[position+3].innerHTML===ch){
				flag=1;
				stop(ch,position,position-3,position+3);
			}
		}
		if(button[position+2].innerHTML===ch){
			if(button[position-2].innerHTML===ch){
				flag=1;
				stop(ch,position,position+2,position-2);
			}
		}
		if(button[position-4].innerHTML===ch){
			if(button[position+4].innerHTML===ch){
				flag=1;
				stop(ch,position,position+4,position-4);
			}
		}		
	}
	if(flag===1)
		return true;
	else
		return false;
}

var stop= function(ch,p1,p2,p3){

	if(ch==="X"){ch=$("#input1").val()}
	else{ch=$("#input2").val()}
	
	b0=true;
	b1=true;
	b2=true;
	b3=true;
	b4=true;
	b5=true;
	b6=true;
	b7=true;
	b8=true;
	var rslt=ch+" WINS.....!!!";
	var y="#b"+(p1+1);
	var z="#b"+(p2+1);
	var w="#b"+(p3+1);
	console.log(y);
	setTimeout(function(){$(y).addClass('effect')},1000);
	setTimeout(function(){$(z).addClass('effect')},1000);
	setTimeout(function(){$(w).addClass('effect')},1000);

	//while(start);

	setTimeout(function(){$(y).removeClass('effect')},5000);
	setTimeout(function(){$(z).removeClass('effect')},5000);
	setTimeout(function(){$(w).removeClass('effect')},5000);

	setTimeout(function(){$(x).text(rslt)},1000);	
	//x.innerHTML=ch+" WINS.....!!!";

	
}

var check=function(){console.log("HEY")}

var checkDraw= function(){

	if(b0===true && b1===true && b2===true && b3===true && b4===true && b5===true && b6===true && b7===true && b8===true)	
		x.innerHTML="Draw.....!!";
}
});
