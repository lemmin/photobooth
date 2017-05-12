
function VideoCamera (wrapper) {
	this.video = document.createElement('video');
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');
	this.wrapper = wrapper;
	this.wrapper.appendChild(this.video);

	this.setCamera = function (success, failure) {
		navigator.mediaDevices.getUserMedia({video:{width:1920,height:1280}}).then((stream) => {
			this.video.srcObject = stream;
			this.video.onloadedmetadata = success;
		}).catch(failure);
	}

	// Mimic background-size:cover.
	this.realign = () => {
		var resolution = this.video.videoWidth/this.video.videoHeight;
		if (window.innerWidth/resolution > window.innerHeight) {
			var w = window.innerWidth;
			var h = w/resolution;
			var offset = (h-window.innerHeight)/2;
			this.video.width = w;
			this.video.height = h;
			this.wrapper.style.top = '-' + offset + 'px';
		}
		else {
			var h = window.innerHeight;
			var w = h*resolution;
			var offset = (w-window.innerWidth)/2;
			this.video.height = h;
			this.video.width = w;
			this.video.style.left = '-' + offset + 'px';
		}
	}

	this.getSnapShot = function () {
		this.canvas.width = this.video.width;
		this.canvas.height = this.video.height;
		this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);

		return data = this.canvas.toDataURL('image/png');
	}
}