function keyPressed()
{
	// Simultaneous press of S W & D, or UP & RIGHT
	if( ( keyboard.pressed("right1") || keyboard.pressed("right2") ) &&
		( keyboard.pressed("forward1") || keyboard.pressed("forward2") ) )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
	// Simultaneous press of S W & A, or UP & LEFT
	else if( ( keyboard.pressed("left1") || keyboard.pressed("left2") ) &&
			 ( keyboard.pressed("forward1") || keyboard.pressed("forward2") ) )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
	// Simultaneous press of S S & D, or DOWN & RIGHT
	else if( ( keyboard.pressed("right1") || keyboard.pressed("right2") ) &&
			 ( keyboard.pressed("back1") || keyboard.pressed("back2") ) )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
	// Simultaneous press of S & A, or DOWN & LEFT
	else if( ( keyboard.pressed("left1") || keyboard.pressed("left2") ) &&
			 ( keyboard.pressed("back1") || keyboard.pressed("back2") ) )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
	// Pressed D, or RIGHT
	else if( keyboard.pressed("right1") || keyboard.pressed("right2") )
	{
		rotateCamera("right");
	}
	// Pressed A, or LEFT
	else if( keyboard.pressed("left1") || keyboard.pressed("left2") )
	{
		rotateCamera("left");
	}
	// Pressed W, or UP
	else if( keyboard.pressed("forward1") || keyboard.pressed("forward2") )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
	// Pressed S, or DOWN
	else if( keyboard.pressed("back1") || keyboard.pressed("back2") )
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
		for(var i = 0; i < disks.length; i++)
		{
			if( (player.position.x >= disks[i].position.x - 5) && (player.position.x <= disks[i].position.x + 5) )
			{
				if( (player.position.y >= disks[i].position.y - 5) && (player.position.y <= disks[i].position.y + 5) )
				{
					var tempObjectHolder = disks[i];
					disks.splice(i, 1);
					scene.remove(tempObjectHolder);
					disksCollected++;
					disksCollectedOverall++;
					datanode.pause();
					datanode.currentTime = 0;
					datanode.play();
					break;
				}
			}
		}
	}
}
function turnOffModal()
{
	if(LEVEL > 4)
	{
		if( (player.position.x >= computer.position.x - 5) && (player.position.x <= computer.position.x + 5) &&
			(player.position.y >= computer.position.y - 5) && (player.position.y <= computer.position.y + 5) )
		{
			window.location.reload();
		}
	}
	
	if(updateCounter >= 91)
	document.getElementById("modal").style.display = "none";
	modalFlag = false;
}
function turnOnModal()
{
	document.getElementById("modal").style.display = "block";
	modalFlag = false;
}