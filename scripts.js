
	var clickedTime; var createdTime; var reactionTime;
		
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
		
	function getTime() {
		var time = Math.random();
		time = 5000*time;
		return(time);
	}
		
		
	function displayBox() {
		document.getElementById("box").style.backgroundColor = getRandomColor();
		if(Math.random() > 0.5) {
			document.getElementById("box").style.borderRadius="100px";
		} else {
			document.getElementById("box").style.borderRadius="0px";
		}
			
		var top = Math.floor(Math.random() * 300);
		var left = Math.floor(Math.random() * 500);
		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"px";
			
		setTimeout(function() {
			document.getElementById("box").style.display="block";
			createdTime = Date.now();
			}, getTime());
	}
		
	document.getElementById("box").onclick=function() {
		clickedTime = Date.now();
		reactionTime = (clickedTime-createdTime)/1000; /* msec to sec */
			
		document.getElementById("time").innerHTML = reactionTime;
			
		this.style.display="none";
			
		displayBox();
	}
		
	displayBox();