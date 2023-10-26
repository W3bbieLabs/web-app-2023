console.log("😊\tlogo bar active");
const LogoBar = () => {
	const div = document.createElement( "div" );
	const logo = document.createElement( "img" );
	const desc = document.createElement( "p" );
	
	div.className = "logo-bar";
	logo.id = "w3bbie-logo";
	logo.src = "./public/W3bbie_White_On_Black.svg";
	logo.style.float="left";
	desc.id= "w3bbie-desc";
	desc.innerHTML = "W3BBIE. Dynamic community experiment for an ever-evolving internet.";
	div.appendChild( logo );
	div.appendChild( desc );
	main_div.appendChild( div );
};
LogoBar();