var color = document.getElementById('color');
	var cll = document.getElementById('cll');

	color.onchange = function(){
		colorchanged();
	}

	function colorchanged(){
		var val = color.value;
		var output = document.getElementById('output');
		var vall = "";
		var tp = document.getElementById('comb').value;
		console.log(tp)
		if(tp=="1"){
				vall = val;
		}
		if(tp=="2"){
				vall = "rgb("+hexTorgb(val)+")";
		}
		output.value = vall;
		var display = document.getElementById('display');
		display.style.background = val;
	}

	function hexTorgb(hex) {
  		return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
		}



	var copy = document.getElementById('copy');

	copy.onclick = function(){
	color.disabled =true;
	copy.disabled = true;
	cll.style.background= "#b5b0b0";	
		var copyText = document.getElementById('output');

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  var copied = document.getElementById('copied');
  copied.style.display = '';
  setTimeout(hideAgain,2500);
	}

	function hideAgain(){
		var copied = document.getElementById('copied');
  		copied.style.display = 'none';
  		copy.disabled = false;
  		color.disabled =false;
  		cll.style.background= "#996c6c";
	}