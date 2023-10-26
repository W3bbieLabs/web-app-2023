console.log( "🚩\theadline active" );
const Headline = () => {
	const default_headline = "Enter the Rabbit Hole Era.";
	const headline_div = document.createElement( "div" );
	const headline_element = document.createElement( "h1" );
	headline_div.className = "headline-div";
	headline_element.innerHTML = default_headline;
	headline_element.id = "headline";
	headline_div.appendChild( headline_element );
	main_div.appendChild( headline_div );
};
Headline();
