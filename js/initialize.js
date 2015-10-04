keyboard = new THREEx.KeyboardState();
	
function init()
{
	maps.push(map1);
	maps.push(map2);
	maps.push(map3);
	maps.push(map4);
	maps.push(map5);
	LEVEL_MAX = maps.length;
	mapBlockedAreas[LEVEL] = [];
	START_COORDS[LEVEL] = [];
	scene = new THREE.Scene();
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x000000, 0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.autoClear = false;

	renderer2 = new THREE.WebGLRenderer();
	renderer2.setClearColor( 0x000000, 0 );
	renderer2.setSize( 150, 150 );
	renderer2.autoClear = false;

	loadSounds();
	
	populateScene();

	generateCameras();

	spawnPlayer();

	turnOnLights();
	
	// Contains the 1st POV, and all HUD elements.
	var container = document.getElementById("mainview");
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	
	// Contains 
	var container2 = document.getElementById("miniMapView");
	document.body.appendChild( container2 );
	container2.appendChild( renderer2.domElement );

	document.getElementById( "disks-level-amount" ).innerHTML = disksCollected;
	document.getElementById( "disks-level-total" ).innerHTML = disks.length;
	document.getElementById( "disks-collected-amount" ).innerHTML = disksCollectedOverall;

	document.getElementById( "level-number" ).innerHTML = LEVEL + 1;
	document.getElementById( "total-levels" ).innerHTML = LEVEL_MAX;

	totalDisks = disks.length;

	render();
}
function loadSounds()
{
	music = new Audio("assets/audio/music.mp3");
	music.loop = true;
	countdown = new Audio("assets/audio/countdown.mp3");
	datanode = new Audio("assets/audio/datanode2.mp3");
	footsteps = new Audio("assets/audio/footsteps.mp3");
}
function spawnPlayer()
{
	// Player's physical form
	var playerGeometry = new THREE.SphereGeometry( 4 );
	var playerMaterial = new THREE.MeshBasicMaterial({color:'white'});
	player = new THREE.Mesh( playerGeometry, playerMaterial );
	player.position.set(START_COORDS[LEVEL][0], START_COORDS[LEVEL][1], 2);
	scene.add( player );
}
function turnOnLights()
{
	// Main lightsource -- shadows eliminated
    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 10, 20, 20 );
    spotLight.castShadow = false;
    scene.add(spotLight);
}
function nextLevel()
{
	music.pause();
	music.currentTime = 0;
	countdown.currentTime = 0;
	scene.remove(walls);
	scene.remove(floor);
	scene.remove(ceiling);
	scene.remove(startPoint);
	scene.remove(elevator);
	scene.remove(player);
	for(var i = 0; i < disks.length; i++)
	{
		scene.remove(disks[i]);
	}
	disksCollected = 0;
	updateCounter = 0;
	disks.length = 0;
	modalFlag = true;
	LEVEL++;
	mapBlockedAreas[LEVEL] = [];
	START_COORDS[LEVEL] = [];
	populateScene();
	spawnPlayer();
	camera.position.set(START_COORDS[LEVEL][0], START_COORDS[LEVEL][1], 5);
	document.getElementById( "level-number" ).innerHTML = LEVEL + 1;
	document.getElementById( "disks-level-total" ).innerHTML = disks.length;
}