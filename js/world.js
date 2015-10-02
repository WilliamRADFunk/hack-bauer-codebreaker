function addFloorCeiling()
{
	var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/wood-floorboards-texture.jpg');
	floorTexture.wrapS = THREE.RepeatWrapping;
	floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set( 10, 10 );
	var floorGeometry = new THREE.BoxGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
	var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture});
	var floor = new THREE.Mesh( floorGeometry, floorMaterial );
	scene.add( floor );

	var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/tile-ceiling.jpg');
	ceilingTexture.wrapS = THREE.RepeatWrapping;
	ceilingTexture.wrapT = THREE.RepeatWrapping;
	ceilingTexture.repeat.set( 30, 30 );
	var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
	var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
	var ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
	ceiling.position.z = WALL_HEIGHT;
	scene.add( ceiling );
}

function addAWall( x, y, z, xp, yp, zp, texture )
{
	var wallg = new THREE.BoxGeometry( x, y, z );
	var wallm = new THREE.MeshBasicMaterial({map:texture});
	var wallmesh = new THREE.Mesh( wallg, wallm );
	wallmesh.position.z = zp;
	wallmesh.position.y = yp;
	wallmesh.position.x = xp;
	return wallmesh;
}

function populateScene()
{
	addFloorCeiling();

	walls = new THREE.Object3D();

	var texture1 = THREE.ImageUtils.loadTexture('assets/textures/brick-1.jpg');
	texture1.wrapS = THREE.RepeatWrapping;
	texture1.wrapT = THREE.RepeatWrapping;
	texture1.repeat.set( 2, 1 );

	var texture2 = THREE.ImageUtils.loadTexture('assets/textures/brick-1.jpg');
	texture2.wrapS = THREE.RepeatWrapping;
	texture2.wrapT = THREE.RepeatWrapping;
	texture2.repeat.set( 1, 2 );

	var texture3 = THREE.ImageUtils.loadTexture('assets/textures/brick-6.jpg');
	texture3.wrapS = THREE.RepeatWrapping;
	texture3.wrapT = THREE.RepeatWrapping;
	texture3.repeat.set( 2, 2 );

	var tileTexture = THREE.ImageUtils.loadTexture('assets/textures/tile-pentagon.jpg');
	tileTexture.wrapS = THREE.RepeatWrapping;
	tileTexture.wrapT = THREE.RepeatWrapping;
	tileTexture.repeat.set( 15, 1 );


	for(var i = 0; i < mapWidth; i++)
	{
		for(var j = 0; j < mapHeight; j++)
		{
			if(maps[LEVEL][i][j] == 0)
			{
				continue;
			}
			
			var k = (i * UNIT_SIZE) - 95;	// Wall's x-coord.
			var t = (j * UNIT_SIZE) - 95;	// Wall's y-coord.

			var a = k - (UNIT_SIZE - BOUNDARY_DISTANCE);		// Wall's min-x boundary;
			var b = k + (UNIT_SIZE - BOUNDARY_DISTANCE);		// Wall's max-x boundary;
			var c = t - (UNIT_SIZE - BOUNDARY_DISTANCE);		// Wall's min-y boundary;
			var d = t + (UNIT_SIZE - BOUNDARY_DISTANCE);		// Wall's max-y boundary;
			
			if(maps[LEVEL][i][j] == 1)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, texture1 ));
			}
			else if(maps[LEVEL][i][j] == 2)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, texture2 ));
			}
			else if(maps[LEVEL][i][j] == 3)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, texture3 ));
			}
			else if(maps[LEVEL][i][j] == 4)
			{
				var elevatorGeometry = new THREE.PlaneGeometry( UNIT_SIZE, UNIT_SIZE, 1 );
				var elevatorMaterial = new THREE.MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide} );
				var elevator = new THREE.Mesh(elevatorGeometry, elevatorMaterial);
				elevator.position.set(k, t, 0.6);
				scene.add(elevator);
			}
			else if(maps[LEVEL][i][j] == 5)
			{
				var startPointGeometry = new THREE.PlaneGeometry( UNIT_SIZE, UNIT_SIZE, 1 );
				var startPointMaterial = new THREE.MeshBasicMaterial( {color: 'green', side: THREE.DoubleSide} );
				startPoint = new THREE.Mesh(startPointGeometry, startPointMaterial);
				startPoint.position.set(k, t, 0.6);
				scene.add(startPoint);
			}
		}
	}

	scene.add( walls );
}