console.log("👾\tcalls to action engaged");
const CallsToAction = () => {
	const cta_div = document.createElement("div");
	cta_div.className = "cta";
	const createCallToAction = ( call_to_action ) => {
		const cta_section = document.createElement( "section" );
		cta_section.className = "cta-section";
		cta_section.id = `cta-section-${ call_to_action }`;
		
		const cta_button = document.createElement("button");
		cta_button.className = "cta-button";
		cta_button.id = `cta-button-${ call_to_action }`;
		cta_button.innerHTML = call_to_action;

		cta_section.appendChild( cta_button );
		cta_div.appendChild( cta_section )	
	}
	createCallToAction( "join w3bbie" );
	createCallToAction( "claim a rabbit" );
	createCallToAction( "play ready, set, bang!" );
	main_div.appendChild(cta_div);
};
CallsToAction();