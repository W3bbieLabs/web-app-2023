console.log("👀 hover states active");

const logo_bar = document.querySelector( ".logo-bar" );
const logo_bar_desc = document.querySelector("#w3bbie-desc");
logo_bar.addEventListener( "mouseover", ()=>{
	const desc = document.querySelector("#w3bbie-desc");
	logo_bar_desc.style.color = "rgb(0,0,0)";
} );
logo_bar.addEventListener( "mouseout", ()=>{
	const desc = document.querySelector("#w3bbie-desc");
	logo_bar_desc.style.color = "rgb(255,255,255)";
} );