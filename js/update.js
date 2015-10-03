function render()
{
	updateCounter++;
	timer--;

	// Calculates minutes and seconds left from number of frames passed.
	var minutes = Math.floor(timer / 3600);
	var seconds = Math.floor( (timer - (minutes * 3600)) / 60 );

	// Checks to see if player collects a disk.
	if(updateCounter % 15 == 0)
	{
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 2.5) && (player.position.x <= disks[i].position.x + 2.5) )
			{
				if( (player.position.y >= disks[i].position.y - 2.5) && (player.position.y <= disks[i].position.y + 2.5) )
				{
					//TODO: Update HUD
					console.log("Encountered disk " + disks[i].position.x + ", " + disks[i].position.y);

					scene.remove(disks[i]);
					console.log("scene removed disk " + disks[i].position.x + ", " + disks[i].position.y);
					disks.splice(disks[i], 1);
					console.log("array removed disk " + disks[i].position.x + ", " + disks[i].position.y);
					disksCollected++;
					console.log(disksCollected);
					console.log(disks.length);
					break;
					//document.getElementById( 'enemy-targets-count' ).innerHTML = enemyList.length;
					//enemy_killed_01.play();
				}
			}
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

	requestAnimationFrame( render );
	
	renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
	
	renderer2.enableScissorTest(true);
	renderer2.setViewport( 0, 0, 150, 150);
	renderer2.render( scene, miniMapCamera );
}