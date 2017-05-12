function rand(min, max) {
  return Math.random()*(max-min)+min;
}
function randColor(min, max) {
    var r = Math.floor(rand(min,max)),
        g = Math.floor(rand(min,max)),
        b = Math.floor(rand(min,max));
    return 'rgba('+r+','+g+','+b+',1)';
}

// XHR
function getJSON (url, onsuccess, onerror) {
	var r = new XMLHttpRequest();
	r.open('GET', url);
	r.send();

	r.onload = function () {
		onsuccess(JSON.parse(this.responseText));
	}
	r.onerror = onerror;
}

function createLightbox(obj) {
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  
  var x = document.createElement('x');
  x.className = 'x';
  
  var clone = obj.cloneNode(1);
  
  lb.onclick = function (e) {
    if (e.target != lb && e.target != x) {
      return;
    }
    lb.parentNode.removeChild(lb);
    document.body.classList.remove('lightbox-on');
  }
  
  lb.appendChild(x);
  lb.appendChild(clone);
  document.body.appendChild(lb);
  document.body.classList.add('lightbox-on');
}