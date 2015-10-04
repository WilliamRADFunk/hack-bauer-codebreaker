function render()
{
	if(!modalFlag && gameFlag)
	{
		if(updateCounter == 60)
		{
			modalFlag = true;
		}

		if(updateCounter == 61)
		{
			countdown.play();
		}
		updateCounter++;
		timer--;

		// Calculates minutes and seconds left from number of frames passed.
		var minutes = Math.floor(timer / 3600);
		var seconds = Math.floor( (timer - (minutes * 3600)) / 60 );
		// Waits till countdown sound ends before starting music.
		if(updateCounter == 600)
		{
			music.play();
		}
		// When timer runs out, it's game over.
		if(timer <= 0)
		{
			document.getElementById( 'minutes' ).innerHTML = "YOU";
			document.getElementById( 'seconds' ).innerHTML = "LOSE";
			music.pause();
			gameFlag = false;
		}

		// Keeps track of disks collected, updating the HUD.
		if(updateCounter % 5 == 0)
		{
			document.getElementById( 'disks-collected-amount' ).innerHTML = disksCollectedOverall;
			document.getElementById( 'disks-level-amount' ).innerHTML = disksCollected;
		}

		// Checks to see if player has reached an elevator
		if(LEVEL != LEVEL_MAX-1 && updateCounter % 10 == 0)
		{
			if( (player.position.x >= elevator.position.x - 5) && (player.position.x <= elevator.position.x + 5) &&
				(player.position.y >= elevator.position.y - 5) && (player.position.y <= elevator.position.y + 5) )
			{
				nextLevel();
			}
		}
		else if(updateCounter % 10 == 0)
		{
			if( (player.position.x >= computer.position.x - 5) && (player.position.x <= computer.position.x + 5) &&
				(player.position.y >= computer.position.y - 5) && (player.position.y <= computer.position.y + 5) )
			{
				nextLevel();
			}
		}

		// Keeps track of the time, updating the HUD timer.
		if(updateCounter % 59 == 0)
		{
			document.getElementById( 'minutes' ).innerHTML = minutes;
			document.getElementById( 'seconds' ).innerHTML = seconds;
		}

		// Player presses a keyboard key.
		keyPressed();
	}

		requestAnimationFrame( render );
		
		renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
		renderer.render( scene, camera );
		
		renderer2.enableScissorTest(true);
		renderer2.setViewport( 0, 0, 150, 150);
		renderer2.render( scene, miniMapCamera );
}