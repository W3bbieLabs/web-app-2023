console.log("🔗\tpage navigation active");
const PageNavigation = () => {
	const pages = [
		{ name: "Projects", url: "./projects.html" },
		{ name: "Team", url: "./team.html" },
		{ name: "YouTube", url: "https://www.youtube.com/@w3bbie" },
		{ name: "Podcasts", url: "https://podcasters.spotify.com/pod/show/w3bbie/episodes/EP-1--W3bbie-and-Lil-Nouns-A-Shared-Journey-Toward-Decentralization-e293h38" },
		{ name: "Twitter (X)", url: "https://twitter.com/w3bbie_xyz" },
		{ name: "Instagram", url: "https://www.instagram.com/w3bbie.xyz/" },
	];
	const page_nav_div = document.createElement( "div" );
	const page_nav_section = document.createElement( "section" );
	page_nav_div.className = "page-nav";
	page_nav_section.className= "page-nav-section";
	pages.forEach( (page) => {
		page_link = document.createElement("a");
		page_link.className = "site-link";
		page_link.id = `link-${ page.name.toLowerCase() }`;
		page_link.href = page.url;
		if ( page_link.name === "Projects" || page_link.name === "Team" )
			page_link.target = "_self"
		else
			page_link.target = "_blank";
		page_link.innerHTML = page.name;
		page_nav_section.appendChild( page_link );
		page_nav_div.appendChild( page_nav_section );
	});
	main_div.appendChild( page_nav_div );
};
PageNavigation();