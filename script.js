console.info('%c➤ Nickname Generator by Peaksol', 'color: #2196F3; font-size: 20px')

function Settings(){
	// "Settings" button
	let input = document.getElementById('input');
	if(localStorage.getItem('custom')){
		input.value = localStorage.getItem('custom');
	}
	else {
		Reset();
		localStorage.setItem('custom', input.value);
	}
	document.getElementById('main').classList.add("hidden");
	document.getElementById('settings').classList.remove("hidden");
}

function Generate(){
	// "Generate" button
	let result = GetNick(localStorage.getItem('custom').split("\n"));
	if(result){
		document.getElementById('output').value = result;
	}
	else {
		alert('Couldn\'t generate a vaild name. Make sure your custom patterns are vaild and not too long.');
	}
}

function Copy(){
	// Copy the result when it's clicked
	output.select();
	if(output.value!='' && document.execCommand('copy')){
		alert('Name Copied!');
	}
}

function Reset(){
	// "Reset" button
	document.getElementById('input').value = "{adj}{n}{num}\n{n}And{n}\nThe{adj}{n}\n{adj}{n}Gamer\n{n}For{n}\n{adj}{n}HD\n{n}Is{adj}"
}

function Apply(){
	// "Apply" button
	let input = document.getElementById('input');
	localStorage.setItem('custom', input.value.replace(/\s+$/g, ''));
	document.getElementById('main').classList.remove('hidden');
	document.getElementById('settings').classList.add('hidden');
}