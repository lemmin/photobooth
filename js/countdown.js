function countdown (n, callback) {
	n = parseInt(n);
	if (!n) {
		return;
	}

	showNum(n);

	function showNum (num) {
		var div = document.createElement('div');
		div.className = 'countdown';
		div.innerText = num;
		document.body.appendChild(div);

		num--;
		setTimeout(function () {
			document.body.removeChild(div);
			if (num) {
				showNum(num);
			}
			else {
				callback();
			}
		}, 1000);
	}
}