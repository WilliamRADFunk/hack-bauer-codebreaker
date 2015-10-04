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
			floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/tile-ceiling.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
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
			floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/ceiling-textured-white.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
			ceiling.position.z = WALL_HEIGHT;
			scene.add( ceiling );
			break;
		}
		case 2:
		{
			var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/carpet-crosspattern-tan.jpg');
			floorTexture.wrapS = THREE.RepeatWrapping;
			floorTexture.wrapT = THREE.RepeatWrapping;
			floorTexture.repeat.set( 10, 10 );
			var floorGeometry = new THREE.BoxGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture});
			floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/wall-painted-grey.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
			ceiling.position.z = WALL_HEIGHT;
			scene.add( ceiling );
			break;
		}
		case 3:
		{
			var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/tiles-bathroom-2.jpg');
			floorTexture.wrapS = THREE.RepeatWrapping;
			floorTexture.wrapT = THREE.RepeatWrapping;
			floorTexture.repeat.set( 10, 10 );
			var floorGeometry = new THREE.BoxGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture});
			floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/wall-painted-white.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
			ceiling.position.z = WALL_HEIGHT;
			scene.add( ceiling );
			break;
		}
		case 4:
		{
			var floorTexture = THREE.ImageUtils.loadTexture('assets/textures/tiles-bathroom-small.jpg');
			floorTexture.wrapS = THREE.RepeatWrapping;
			floorTexture.wrapT = THREE.RepeatWrapping;
			floorTexture.repeat.set( 30, 30 );
			var floorGeometry = new THREE.BoxGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var floorMaterial = new THREE.MeshBasicMaterial({map:floorTexture});
			floor = new THREE.Mesh( floorGeometry, floorMaterial );
			scene.add( floor );

			var ceilingTexture = THREE.ImageUtils.loadTexture('assets/textures/weave-brown.jpg');
			ceilingTexture.wrapS = THREE.RepeatWrapping;
			ceilingTexture.wrapT = THREE.RepeatWrapping;
			ceilingTexture.repeat.set( 30, 30 );
			var ceilingGeometry = new THREE.PlaneGeometry( SCENE_WIDTH, SCENE_HEIGHT, 1 );
			var ceilingMaterial = new THREE.MeshBasicMaterial( {map:ceilingTexture, side: THREE.BackSide} );
			ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
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

	var blueWallTexture_04 = THREE.ImageUtils.loadTexture('assets/textures/wall-painted-lightblue.jpg');
	blueWallTexture_04.wrapS = THREE.RepeatWrapping;
	blueWallTexture_04.wrapT = THREE.RepeatWrapping;
	blueWallTexture_04.repeat.set( 4, 4 );

	var blackTileTexture_05 = THREE.ImageUtils.loadTexture('assets/textures/tiles-bathroom-medium.jpg');
	blackTileTexture_05.wrapS = THREE.RepeatWrapping;
	blackTileTexture_05.wrapT = THREE.RepeatWrapping;
	blackTileTexture_05.repeat.set( 4, 4 );

	var tanWeaveTexture_05 = THREE.ImageUtils.loadTexture('assets/textures/weave-tan.jpg');
	tanWeaveTexture_05.wrapS = THREE.RepeatWrapping;
	tanWeaveTexture_05.wrapT = THREE.RepeatWrapping;
	tanWeaveTexture_05.repeat.set( 4, 4 );

	var floppyDiskTexture = THREE.ImageUtils.loadTexture('assets/textures/floppy-drive.png');
	floppyDiskTexture.wrapS = THREE.RepeatWrapping;
	floppyDiskTexture.wrapT = THREE.RepeatWrapping;
	floppyDiskTexture.repeat.set( 1, 1 );

	var enemy1Materials = 
	[
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture('assets/textures/enemy1_2.jpg')
		}),
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture('assets/textures/enemy1_3.jpg')
		}),
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture('assets/textures/enemy1_4.jpg')
		}),
		new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture('assets/textures/enemy1.jpg')
		}),
		new THREE.MeshBasicMaterial({
			color: 'red'
		}),
		new THREE.MeshBasicMaterial({
			color: 'black'
		})
	];

	enemy1Materials[0].map.minFilter = THREE.NearestFilter;
	enemy1Materials[1].map.minFilter = THREE.NearestFilter;
	enemy1Materials[2].map.minFilter = THREE.NearestFilter;
	enemy1Materials[3].map.minFilter = THREE.NearestFilter;
	
	/*
	var enemy1Texture = THREE.ImageUtils.loadTexture('assets/textures/enemy1.jpg');
	*/
	var elevatorTexture = THREE.ImageUtils.loadTexture('assets/textures/elevator.jpg');

	var computerTexture = THREE.ImageUtils.loadTexture('assets/textures/computer.jpg');

	for(var i = 0; i < mapWidth; i++)
	{
		for(var j = 0; j < mapHeight; j++)
		{			
			var k = (i * UNIT_SIZE) - 95;	// location's x-coord.
			var t = (j * UNIT_SIZE) - 95;	// location's y-coord.

			var a = k - (UNIT_SIZE - BOUNDARY_DISTANCE);		// location's min-x boundary;
			var b = k + (UNIT_SIZE - BOUNDARY_DISTANCE);		// location's max-x boundary;
			var c = t - (UNIT_SIZE - BOUNDARY_DISTANCE);		// location's min-y boundary;
			var d = t + (UNIT_SIZE - BOUNDARY_DISTANCE);		// location's max-y boundary;

			if(maps[LEVEL][i][j] == 0)
			{
				var floppyDiskGeometry = new THREE.BoxGeometry(1, 1, 1);
				var floppyDiskMaterial = new THREE.MeshBasicMaterial({map: floppyDiskTexture});
				var floppy = new THREE.Mesh(floppyDiskGeometry, floppyDiskMaterial);
				floppy.name = "disk";
				floppy.position.set(k, t, 3);
				disks.push(floppy);
				scene.add(floppy);
			}
			else if(maps[LEVEL][i][j] == 1)
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
			else if(maps[LEVEL][i][j] == 4)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, blueWallTexture_04 ));
			}
			else if(maps[LEVEL][i][j] == 5)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, blackTileTexture_05 ));
			}
			else if(maps[LEVEL][i][j] == 6)
			{
				mapBlockedAreas[LEVEL].push([a, b, c, d]);
				walls.add(addAWall( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT, k, t, WALL_HEIGHT / 2, tanWeaveTexture_05 ));
			}
			else if(maps[LEVEL][i][j] == 7)
			{
				
				var enemy1Geometry = new THREE.BoxGeometry( UNIT_SIZE / 2, UNIT_SIZE / 2, WALL_HEIGHT / 4, 1, 1, 1 );
				var enemy1Mat = new THREE.MeshFaceMaterial( enemy1Materials );
				enemy1 = new THREE.Mesh(enemy1Geometry, enemy1Mat);
				
				/*
				var enemy1Geometry = new THREE.SphereGeometry(3);
				var enemy1Material = new THREE.MeshBasicMaterial({map: enemy1Texture});
				enemy1Material.map.minFilter = THREE.NearestFilter;
				var enemy1 = new THREE.Mesh(enemy1Geometry, enemy1Material);
				*/
				enemy1.position.set(k, t, WALL_HEIGHT / 4);
				enemies.push(enemy1);
				scene.add(enemy1);
			}
			else if(maps[LEVEL][i][j] == 8)
			{
				var startPointGeometry = new THREE.PlaneGeometry( UNIT_SIZE, UNIT_SIZE, 1 );
				var startPointMaterial = new THREE.MeshBasicMaterial( {color: 'green', side: THREE.DoubleSide} );
				startPoint = new THREE.Mesh(startPointGeometry, startPointMaterial);
				startPoint.position.set(k, t, 0.6);
				START_COORDS[LEVEL].push(k);
				START_COORDS[LEVEL].push(t);
				scene.add(startPoint);
			}
			else if(maps[LEVEL][i][j] == 9)
			{
				var elevatorGeometry = new THREE.BoxGeometry( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT );
				var elevatorMaterial = new THREE.MeshBasicMaterial( {map: elevatorTexture} );
				elevatorMaterial.map.minFilter = THREE.NearestFilter;
				elevator = new THREE.Mesh(elevatorGeometry, elevatorMaterial);
				elevator.position.set(k, t, WALL_HEIGHT / 2);
				scene.add(elevator);
			}
			else if(maps[LEVEL][i][j] == 10)
			{
				var computerGeometry = new THREE.BoxGeometry( UNIT_SIZE, UNIT_SIZE, WALL_HEIGHT );
				var computerMaterial = new THREE.MeshBasicMaterial( {map: computerTexture} );
				computerMaterial.map.minFilter = THREE.NearestFilter;
				computer = new THREE.Mesh(computerGeometry, computerMaterial);
				computer.position.set(k, t, WALL_HEIGHT / 2);
				scene.add(computer);
			}
		}
	}

	scene.add( walls );
}