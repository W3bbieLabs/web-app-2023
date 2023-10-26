console.log("👽\tvideo overlay active");
const VideoOverlay = () => {
	const overlay = document.createElement("div");
	overlay.className = "background-video-overlay";
	overlay.id = "video-overlay";
	overlay.style.height = "100vh";
	overlay.style.width = "100vw";
	overlay.style.objectFit = "cover";
	overlay.style.position = "fixed";
	overlay.style.top = 0;
	overlay.style.left = 0;
	overlay.style.zIndex = -1;
	overlay.style.opacity = 0.2;
	overlay.style.filter = "sepia(80%)";
	overlay.style.mixBlendMode = "difference";
	document.body.appendChild( overlay );
};
VideoOverlay();