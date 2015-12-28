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
	camera.rotation.y = Math.PI / 2;
	
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
	var clear = true;
	// Looking for all collisions, data nodes, elevator blocks, and anything interactive.
	for(var i = 0; i < mapBlockedAreas[LEVEL].length; i++)
	{
		// Player is attempting to enter an occupied square
		if(x >= mapBlockedAreas[LEVEL][i][0] && x <= mapBlockedAreas[LEVEL][i][1] && y >= mapBlockedAreas[LEVEL][i][2] && y <= mapBlockedAreas[LEVEL][i][3])
		{
			clear = false;
			for(var j = 0, k = 0; j < 1, k > -1; j+=0.1, k-=0.1)
			{
				var x_test = camera.position.x + STRIDE * Math.sin( camera.rotation.y + j ) * xd;
				var y_test = camera.position.y + STRIDE * Math.cos( camera.rotation.y + j ) * yd;
				if(x_test >= mapBlockedAreas[LEVEL][i][0] && x_test <= mapBlockedAreas[LEVEL][i][1] && y_test >= mapBlockedAreas[LEVEL][i][2] && y_test <= mapBlockedAreas[LEVEL][i][3])
				{
					var x_test = camera.position.x + STRIDE * Math.sin( camera.rotation.y + k ) * xd;
					var y_test = camera.position.y + STRIDE * Math.cos( camera.rotation.y + k ) * yd;
					if(x_test >= mapBlockedAreas[LEVEL][i][0] && x_test <= mapBlockedAreas[LEVEL][i][1] && y_test >= mapBlockedAreas[LEVEL][i][2] && y_test <= mapBlockedAreas[LEVEL][i][3])
					{
						var x_test = camera.position.x + STRIDE * Math.sin( camera.rotation.y + k ) * xd;
						var y_test = camera.position.y + STRIDE * Math.cos( camera.rotation.y + j ) * yd;
						if(x_test >= mapBlockedAreas[LEVEL][i][0] && x_test <= mapBlockedAreas[LEVEL][i][1] && y_test >= mapBlockedAreas[LEVEL][i][2] && y_test <= mapBlockedAreas[LEVEL][i][3])
						{
							var x_test = camera.position.x + STRIDE * Math.sin( camera.rotation.y + j ) * xd;
							var y_test = camera.position.y + STRIDE * Math.cos( camera.rotation.y + k ) * yd;
							if(x_test >= mapBlockedAreas[LEVEL][i][0] && x_test <= mapBlockedAreas[LEVEL][i][1] && y_test >= mapBlockedAreas[LEVEL][i][2] && y_test <= mapBlockedAreas[LEVEL][i][3])
							{
								//This possibility was a bust.
							}
							else
							{
								var clear = true;
								for(var m = 0; m < mapBlockedAreas[LEVEL].length; m++)
								{
									if(x_test >= mapBlockedAreas[LEVEL][m][0] && x_test <= mapBlockedAreas[LEVEL][m][1] && y_test >= mapBlockedAreas[LEVEL][m][2] && y_test <= mapBlockedAreas[LEVEL][m][3])
									{
										clear = false;
									}
								}
								if(clear)
								{
									camera.position.x = x_test;
									camera.position.y = y_test;
									return "collision";
								}
							}
						}
						else
						{
							var clear = true;
							for(var m = 0; m < mapBlockedAreas[LEVEL].length; m++)
							{
								if(x_test >= mapBlockedAreas[LEVEL][m][0] && x_test <= mapBlockedAreas[LEVEL][m][1] && y_test >= mapBlockedAreas[LEVEL][m][2] && y_test <= mapBlockedAreas[LEVEL][m][3])
								{
									clear = false;
								}
							}
							if(clear)
							{
								camera.position.x = x_test;
								camera.position.y = y_test;
								return "collision";
							}
						}
					}
					else
					{
						var clear = true;
						for(var m = 0; m < mapBlockedAreas[LEVEL].length; m++)
						{
							if(x_test >= mapBlockedAreas[LEVEL][m][0] && x_test <= mapBlockedAreas[LEVEL][m][1] && y_test >= mapBlockedAreas[LEVEL][m][2] && y_test <= mapBlockedAreas[LEVEL][m][3])
							{
								clear = false;
							}
						}
						if(clear)
						{
							camera.position.x = x_test;
							camera.position.y = y_test;
							return "collision";
						}
					}
				}
				else
				{
					var clear = true;
					for(var m = 0; m < mapBlockedAreas[LEVEL].length; m++)
					{
						if(x_test >= mapBlockedAreas[LEVEL][m][0] && x_test <= mapBlockedAreas[LEVEL][m][1] && y_test >= mapBlockedAreas[LEVEL][m][2] && y_test <= mapBlockedAreas[LEVEL][m][3])
						{
							clear = false;
						}
					}
					if(clear)
					{
						camera.position.x = x_test;
						camera.position.y = y_test;
						return "collision";
					}
				}
			}
		}
	}
	if(!clear)
	{
		return "collision";
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