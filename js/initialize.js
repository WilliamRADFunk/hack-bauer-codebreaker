keyboard = new THREEx.KeyboardState();
	
function init()
{
	maps.push(map1);
	mapBlockedAreas[LEVEL] = [];
	scene = new THREE.Scene();

	generateCameras();
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( 0x000000, 0 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.autoClear = false;

	renderer2 = new THREE.WebGLRenderer();
	renderer2.setClearColor( 0x000000, 0 );
	renderer2.setSize( 150, 150 );
	renderer2.autoClear = false;
	
	populateScene();

	// Main lightsource -- shadows eliminated
    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 10, 20, 20 );
    spotLight.castShadow = false;
    scene.add(spotLight);
	
	// Player's physical form
	var playerGeometry = new THREE.SphereGeometry( 4 );
	var playerMaterial = new THREE.MeshBasicMaterial({color:'white'});
	player = new THREE.Mesh( playerGeometry, playerMaterial );
	player.position.set(START_COORDS[LEVEL][0], START_COORDS[LEVEL][1], 2)
	scene.add( player );
	
	// Contains the 1st POV, and all HUD elements.
	var container = document.getElementById("mainview");
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );
	
	// Contains 
	var container2 = document.getElementById("miniMapView");
	document.body.appendChild( container2 );
	container2.appendChild( renderer2.domElement );

	render();
}