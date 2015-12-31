function render()
{
	if(!modalFlag && gameFlag)
	{
		if(updateCounter == 90)
		{
			modalFlag = true;
		}

		if(updateCounter == 91)
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
		// Updates enemy movement
		if(updateCounter % 5 == 0)
		{
			for(var i = 0; i < enemies.length; i++)
			{
				if( enemies[i].state == "seek")
				{
					chase(enemies[i]);
				}

				var dx;
				var dy;
				
				dx = axisDiff(enemies[i], "x");
				dy = axisDiff(enemies[i], "y");

				if(dx < 4.5 && dy < 4.5)
				{
					document.getElementById( 'minutes' ).innerHTML = "YOU";
					document.getElementById( 'seconds' ).innerHTML = "LOSE";
					document.getElementById( "modalMessage" ).innerHTML = "Oh, no!!!</br></br>You've been captured by the Umbakastanian Security Forces. Our state department is rushing to deny your very existence. I'm afraid nothing but endless torture and an inevitable execution awaits you, Hack.</br></br>Meanwhile, W-U-Ds have gone off in every major capitol around the world. Civilization as we've come to know it is collapsing.</br></br>You've failed the world, Hack. You've failed humanity. Good job ::heavy sarcasm::";
					turnOnModal();
					music.pause();
					gameFlag = false;
				}
			}
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

		if(updateCounter % 30 == 0)
		{
			for(var j = 0; j < enemies.length; j++)
			{
				if( enemies[j].state == "idle" && isPlayerClose(enemies[j]) )
				{
					enemies[j].state = "seek";
				}
			}
		}

		if(updateCounter % 31 == 0)
		{
			for(var k = 0; k < enemies.length; k++)
			{
				if(enemies[k].state == "seek" && !isPlayerClose(enemies[k]))
				{
					enemies[k].state = "idle";
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
	}

		requestAnimationFrame( render );
		
		renderer.setViewport( 0, 0, window.innerWidth, window.innerHeight );
		renderer.render( scene, camera );
		
		renderer2.enableScissorTest(true);
		renderer2.setViewport( 0, 0, 150, 150);
		renderer2.render( scene, miniMapCamera );
}
function makeGuess()
{
	var selectionElement = document.getElementById( 'guesses' );
	var selection = selectionElement.options[selectionElement.selectedIndex].value;
	console.log("You chose: " + selection);
	if(selection === pword)
	{
		console.log("You chose right!");
		levelSpecificModal(6);
	}
	else
	{
		console.log("You chose wrong!");
		levelSpecificModal(7);
	}
}