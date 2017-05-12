window.addEventListener('load', initApp);
function initApp () {
	// Init camera.
	var video_wrapper = document.getElementById('video_wrapper');
	var vc = new VideoCamera(video_wrapper);
	vc.setCamera(function (e) {
		vc.video.play();
		vc.realign();
	},
	function (err) {
		alert('No camera');
	});

	// Init interface.
	var overlay = document.getElementById('overlay');
	var btnStart = document.getElementById('btnStart');
	btnStart.onclick = function () {
		overlay.classList.add('hide');
		countdown(4, snapshot);
	}

	function snapshot () {
		var data = vc.getSnapShot();
		var div = document.createElement('div');
		div.className = 'snapshot';
		var img = document.createElement('img');
		img.src = data;
		div.appendChild(img);
		document.body.appendChild(div);
		flash();

		setTimeout(function () {
			document.body.removeChild(div);
			overlay.classList.remove('hide');
		},3500);
	}

	function flash() {
		var flash = document.createElement('div');
		flash.className = 'flash';
		document.body.appendChild(flash);
		setTimeout(function () {
			document.body.removeChild(flash);
		},500);
	}
}