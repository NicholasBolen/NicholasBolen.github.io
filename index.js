function toggleFullscreen() {
	if (!document.fullscreenElement) {
		document.body.requestFullscreen();
		document.body.setAttribute("fullscreen", "");
	} else {
		document.exitFullscreen();
		document.body.removeAttribute("fullscreen");
	}
} 
