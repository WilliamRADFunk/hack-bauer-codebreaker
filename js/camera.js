function generateCameras()
{
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.x = START_COORDS[LEVEL][0];
	camera.position.y = START_COORDS[LEVEL][1];
	camera.position.z = 5;
	camera.rotation.x = 0;
	camera.rotation.y = 0;
	camera.rotation.z = 0;
	var pos = new THREE.Vector3( START_COORDS[LEVEL][0], 200, 0 );
	camera.lookAt( pos );
	
	miniMapCamera = new THREE.OrthographicCamera( -100, 100, 100, -100, 0.1, 3000, 1 );
	miniMapCamera.position.x = 0;
	miniMapCamera.position.y = 0;
	miniMapCamera.position.z = 300;
	miniMapCamera.lookAt( scene.position );
}

function moveCamera( x_old, y_old, xd, yd )
{
	var x = camera.position.x + STRIDE * Math.sin( camera.rotation.y ) * xd;
	var y = camera.position.y + STRIDE * Math.cos( camera.rotation.y ) * yd;
	
	// Looking for all collisions, data nodes, elevator blocks, and anything interactive.
	for(var i = 0; i < mapBlockedAreas[LEVEL].length; i++)
	{
		// Player is attempting to enter an occupied square
		if(x >= mapBlockedAreas[LEVEL][i][0] && x <= mapBlockedAreas[LEVEL][i][1] && y >= mapBlockedAreas[LEVEL][i][2] && y <= mapBlockedAreas[LEVEL][i][3])
		{
			// Checking combination of old x-coordinate with new y-coordinate.
			if(x_old < mapBlockedAreas[LEVEL][i][0] || x_old > mapBlockedAreas[LEVEL][i][1])
			{
				// Combination is valid, move into new coordinates.
				if(y < mapBlockedAreas[LEVEL][i][2] || y > mapBlockedAreas[LEVEL][i][3])
				{
					camera.position.x = x_old;
					camera.position.y = y;
					return "Collision";
				}
				// Combination not valid, keep old coordinates
				else
				{
					return "Collision";
				}
			}
			// Checking combination of old y-coordinate with new x-coordinate.
			else if(y_old < mapBlockedAreas[LEVEL][i][2] || y_old > mapBlockedAreas[LEVEL][i][3])
			{
				// Combination is valid, move into new coordinates.
				if(x < mapBlockedAreas[LEVEL][i][0] || x > mapBlockedAreas[LEVEL][i][1])
				{
					camera.position.x = x;
					camera.position.y = y_old;
					return "Collision";
				}
				// Combination not valid, keep old coordinates
				else
				{
					return "Collision";
				}
			}
		}
	}

	// No obstructions, move into desired space.
	camera.position.x = x;
	camera.position.y = y;
	// Keep player's physical form in-sync with camera position.
	player.position.x = camera.position.x;
	player.position.y = camera.position.y;
	player.position.z = camera.position.z;
	return "empty";
}

function rotateCamera(dir)
{
	if(dir == "left")
	{
		camera.rotation.y += 0.04;
	}
	else
	{
		camera.rotation.y -= 0.04;
	}
}