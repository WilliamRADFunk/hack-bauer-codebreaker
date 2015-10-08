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

			for(var i = 0; i < enemies.length; i++)
			{
				if( enemies[i].state == "seek")
				{
					chase(enemies[i]);
				}

				var dx;
				var dy;
				if(enemies[i].entity.position.x < 0 && player.position.x > 0)
				{
					dx = Math.abs(enemies[i].entity.position.x) + player.position.x;
				}
				else if(player.position.x < 0 && enemies[i].entity.position.x > 0)
				{
					dx = Math.abs(player.position.x) + enemies[i].entity.position.x;
				}
				else
				{
					dx = Math.abs(player.position.x - enemies[i].entity.position.x);
				}

				if(enemies[i].entity.position.y < 0 && player.position.y > 0)
				{
					dy = Math.abs(enemies[i].entity.position.y) + player.position.y;
				}
				else if(player.position.y < 0 && enemies[i].entity.position.y > 0)
				{
					dy = Math.abs(player.position.y) + enemies[i].entity.position.y;
				}
				else
				{
					dy = Math.abs(player.position.y - enemies[i].entity.position.y);
				}

				if(dx < 2 && dy < 2)
				{
					document.getElementById( 'minutes' ).innerHTML = "YOU";
					document.getElementById( 'seconds' ).innerHTML = "LOSE";
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