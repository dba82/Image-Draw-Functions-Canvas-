function imageFromUrl(ctx, url, offSetPoint, w, h){
	var img;

	offSetPoint = offSetPoint || [0,0];
	var draw = function(){
		w = w || img.width;
		h = h || img.height;
		ctx.drawImage(img, offSetPoint[0], offSetPoint[1],w,h);
	};
	if (this.imgCache && this.imgCache[url]){
		img = this.imgCache[url]
		draw();
	} else {
		img = new Image();
		img.onload = draw;
		img.src = url;
		this.imgCache = this.imgCache || {};
		this.imgCache[url] = img;
	}
}
