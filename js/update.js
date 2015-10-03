function render()
{
	updateCounter++;
	timer--;

	// Calculates minutes and seconds left from number of frames passed.
	var minutes = Math.floor(timer / 3600);
	var seconds = Math.floor( (timer - (minutes * 3600)) / 60 );

	// Keeps track of the time, updating the HUD timer.
	if(updateCounter % 59 == 0)
	{
		document.getElementById( 'minutes' ).innerHTML = minutes;
		document.getElementById( 'seconds' ).innerHTML = seconds;
	}

	// Player presses a keyboard key.
	keyPressed();

	requestAnimationFrame( render );
	
	renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
	
	renderer2.enableScissorTest(true);
	renderer2.setViewport( 0, 0, 150, 150);
	renderer2.render( scene, miniMapCamera );
}