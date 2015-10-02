function keyPressed()
{
	// Simultaneous press of S W & D, or UP & RIGHT
	if( keyboard.pressed("right") && keyboard.pressed("forward") )
	{
		rotateCamera("right");
		switch( moveCamera( camera.position.x, camera.position.y, -1, 1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
	// Simultaneous press of S W & A, or UP & LEFT
	else if( keyboard.pressed("left") && keyboard.pressed("forward") )
	{
		rotateCamera("left");
		switch( moveCamera( camera.position.x, camera.position.y, -1, 1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
	// Simultaneous press of S S & D, or DOWN & RIGHT
	else if( keyboard.pressed("right") && keyboard.pressed("backward") )
	{
		rotateCamera("right");
		switch( moveCamera( camera.position.x, camera.position.y, 1, -1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
	// Simultaneous press of S & A, or DOWN & LEFT
	else if( keyboard.pressed("left") && keyboard.pressed("backward") )
	{
		rotateCamera("left");
		switch( moveCamera( camera.position.x, camera.position.y, 1, -1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
	// Pressed D, or RIGHT
	else if( keyboard.pressed("right") )
	{
		rotateCamera("right");
	}
	// Pressed A, or LEFT
	else if( keyboard.pressed("left") )
	{
		rotateCamera("left");
	}
	// Pressed W, or UP
	else if( keyboard.pressed("forward") )
	{
		switch( moveCamera( camera.position.x, camera.position.y, -1, 1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
	// Pressed S, or DOWN
	else if( keyboard.pressed("backward") )
	{
		switch( moveCamera( camera.position.x, camera.position.y, 1, -1 ) )
		{
			case "clear": // No obstructions
			{
				break;
			}
			case "collision": // Obstruction: using old or modified coordinates.
			{
				// Keep player's physical form in-sync with camera position.
				player.position.x = camera.position.x;
				player.position.y = camera.position.y;
				player.position.z = camera.position.z;
				break;
			}
			default:
			{
				break;
			}
		}
	}
}