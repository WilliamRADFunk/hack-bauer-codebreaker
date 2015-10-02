function addFloorCeiling()
{
	switch(LEVEL)
	{
		case 0:
		{
			var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/floor-concrete.jpg');
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
			break;
		}
		case 1:
		{
			var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/floor-wood-light.jpg');
			floorTexture.wrapS = THREE.RepeatWrapping;
			floorTexture.wrapT = THREE.RepeatWrapping;
			floorTexture.repeat.set( 10, 10 );
			var floorGeometry = new THREE.BoxGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture});
			var floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/ceiling-textured-white.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			var ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
			ceiling.position.z = WALL_HEIGHT;
			scene.add( ceiling );
			break;
		}
	}
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

	var exteriorWallTexture_01 = THREE.ImageUtils.loadTexture('assets/textures/brick-2.jpg');
	exteriorWallTexture_01.wrapS = THREE.RepeatWrapping;
	exteriorWallTexture_01.wrapT = THREE.RepeatWrapping;
	exteriorWallTexture_01.repeat.set( 2, 2 );

	var interlockingCementBlocksTexture_02 = THREE.ImageUtils.loadTexture('assets/textures/tiles-basement.jpg');
	interlockingCementBlocksTexture_02.wrapS = THREE.RepeatWrapping;
	interlockingCementBlocksTexture_02.wrapT = THREE.RepeatWrapping;
	interlockingCementBlocksTexture_02.repeat.set( 4, 4 );

	var greyWallTexture_03 = THREE.ImageUtils.loadTexture('assets/textures/wall-painted-grey.jpg');
	greyWallTexture_03.wrapS = THREE.RepeatWrapping;
	greyWallTexture_03.wrapT = THREE.RepeatWrapping;
	greyWallTexture_03.repeat.set( 4, 4 );

	var tilePentagonTexture = THREE.ImageUtils.loadTexture('assets/textures/tile-pentagon.jpg');
	tilePentagonTexture.wrapS = THREE.RepeatWrapping;
	tilePentagonTexture.wrapT = THREE.RepeatWrapping;
	tilePentagonTexture.repeat.set( 15, 1 );


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
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, exteriorWallTexture_01 ));
			}
			else if(maps[LEVEL][i][j] == 2)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, interlockingCementBlocksTexture_02 ));
			}
			else if(maps[LEVEL][i][j] == 3)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, greyWallTexture_03 ));
			}
			else if(maps[LEVEL][i][j] == 8)
			{
				var startPointGeometry = new THREE.PlaneGeometry( UNIT_SIZE, UNIT_SIZE, 1 );
				var startPointMaterial = new THREE.MeshBasicMaterial( {color: 'green', side: THREE.DoubleSide} );
				startPoint = new THREE.Mesh(startPointGeometry, startPointMaterial);
				startPoint.position.set(k, t, 0.6);
				scene.add(startPoint);
			}
			else if(maps[LEVEL][i][j] == 9)
			{
				var elevatorGeometry = new THREE.PlaneGeometry( UNIT_SIZE, UNIT_SIZE, 1 );
				var elevatorMaterial = new THREE.MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide} );
				var elevator = new THREE.Mesh(elevatorGeometry, elevatorMaterial);
				elevator.position.set(k, t, 0.6);
				scene.add(elevator);
			}
		}
	}

	scene.add( walls );
}