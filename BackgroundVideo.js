console.log("🎥\trabbit is looping");
const BackgroundVideo = ( appendage_point ) => {
	const video = document.createElement( "video" );
	const source = document.createElement( "source" );
	video.appendChild(source);
	video.className = "background-video";
	video.autoplay = true;
	video.muted = true;
	video.loop = true;
	video.controls = false;
	video.style.filter = "blur(0px)";
	source.src = "./public/site-loop-vid.mp4";
	source.type = "video/mp4";
	document.querySelector(appendage_point).appendChild( video );
};
BackgroundVideo( "body" );
