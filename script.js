console.info('%c➤ Nickname Generator by Peaksol', 'color: #2196F3; font-size: 20px')
function Generate(){
	document.getElementById('output').value = GetNick();
}

function Copy(){
	output.select();
	if(output.value!='' && document.execCommand('copy')){
		alert('Name Copied!');
	}
}