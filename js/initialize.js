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
	availableMoves[LEVEL] = [];
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
	datanode = new Audio("assets/audio/datanode.mp3");
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
	/* Dismantles previous level 					*/
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
	disks.length = 0;
	for(var j = 0; j < enemies.length; j++)
	{
		scene.remove(enemies[j].entity);
	}
	enemies.length = 0;
	/* Dismantles previous level 					*/

	/* Resets level-specific counters				*/
	disksCollected = 0;
	updateCounter = 0;
	/* Resets level-specific counters				*/

	/* Builds next level 							*/
	LEVEL++;
	levelSpecificModal();
	turnOnModal();
	mapBlockedAreas[LEVEL] = [];
	availableMoves[LEVEL] = [];
	START_COORDS[LEVEL] = [];
	populateScene();
	spawnPlayer();
	totalDisks += disks.length;
	/* Builds next level 							*/

	/* Positions camera in new starting location.	*/
	camera.position.set(START_COORDS[LEVEL][0], START_COORDS[LEVEL][1], 5);
	camera.rotation.x = 0;
	camera.rotation.y = 0;
	camera.rotation.z = 0;
	var pos = new THREE.Vector3( START_COORDS[LEVEL][0], 200, 0 );
	camera.lookAt( pos );
	camera.rotation.y = Math.PI / 2;
	/* Positions camera in new starting location.	*/

	/* Updates HUD for level-specific variables.	*/
	document.getElementById( "level-number" ).innerHTML = LEVEL + 1;
	document.getElementById( "disks-level-total" ).innerHTML = disks.length;
	/* Updates HUD for level-specific variables.	*/
}
// Story elements presented in modal form at start of each level
// First level already in HTML.
function levelSpecificModal(lev)
{
	LEVEL = (lev == null || lev == undefined) ? LEVEL : lev;
	var modal = document.getElementById( "modal" );
	switch(LEVEL)
	{
		// Level #2
		case 1:
		{
			document.getElementById( "modalMessage" ).innerHTML = "Great job, Hack!</br></br>You've managed to outsmart the Umbakastanian security on the ground floor. Don't get cocky, though. As you get closer to the mainframe, security will get tighter...and faster.</br></br>I hope I don't have to remind you that if you get caught...you're on your own.";
			break;
		}
		// Level #3
		case 2:
		{
			document.getElementById( "modalMessage" ).innerHTML = "You've made it to the 3rd floor. Our intel suggests Umbakastanian security is getting suspicious. Don't let your guard down, because they won't.";
			break;
		}
		// Level #4
		case 3:
		{
			document.getElementById( "modalMessage" ).innerHTML = "Almost there, Hack!</br></br>You should meet with heavier resistence there on the 4th floor. From what we've heard over the wiretaps, security knows there's an intruder inside.</br></br>Keep your eyes open and your head low.";
			break;
		}
		// Level #5
		case 4:
		{
			document.getElementById( "modalMessage" ).innerHTML = "This is it, Hack!</br></br>You've made it to the most secure floor in the entire consulate. This is where they house their secret mainframe, and the control center for their W-U-Ds. If you can make it there, and crack their secret encryption, you could save millions.</br></br>We're all counting on you Hack. Good luck!";
			break;
		}
		case 5:
		{
			var percentComplete = disksCollectedOverall / totalDisks;
			var bonusLetters = Math.round(8 * percentComplete);
			console.log(bonusLetters);
			pwordDisplay = "";
			for(var i = 0; i < 8; i++)
			{
				if(Math.round(Math.random()) && bonusLetters > 0)
				{
					pwordDisplay += pword[i] + " ";
					bonusLetters--;
				}
				else pwordDisplay += "_ ";
			}
			//document.getElementById( "modalMessage" ).innerHTML = "There's no encryption to crack just yet, Hack.</br></br>This was actually a training mission to see how many of the data nodes you could collect in the alloted time.</br></br>You managed to get " + disksCollectedOverall + " out of " + totalDisks + "</br></br>See if you can't do better next time.";
			document.getElementById( "modal" ).innerHTML = 
			"<div id='modalMessage' style='margin-bottom: 20px;'>This is it, Hack. You've made it to the super-secret terminal. You managed to collect <span style='color: red; font-weight: strong;'>" + disksCollectedOverall + "</span> out of <span style='color: red; font-weight: strong;'>" + totalDisks + "</span> pieces of intel. That will buy you some clues in deciphering the encryption.</br></br>It seems the Umbakistanians are using a series of randomly generated words as their rotating pass code. You only get one chance, Hack. Don't waste it.</div>";
			document.getElementById( "modal" ).innerHTML += 
			"<div id='question' style='margin-bottom: 20px; text-align: center;'>" + pwordDisplay + "</div>";
			document.getElementById( "modal" ).innerHTML += listbox + "<button onclick='makeGuess()'>CONTINUE</button>";
			break;
		}
		case 6:
		{
			document.getElementById( "modal" ).innerHTML = "<div id='modalMessage' style='margin-bottom: 20px;'>You did it, Hack!!!</br></br>You cracked into their mainframe, downloaded the locations to all of the WUDs, and collected evidence against the Umbakastanians.</br></br>The world is now a safer place because of you, Hack!</div>";
			document.getElementById( "modal" ).innerHTML += "<button onclick='turnOffModal()'>REPLAY</button>";
			break;
		}
		case 7:
		{
			document.getElementById( "modal" ).innerHTML = "<div id='modalMessage' style='margin-bottom: 20px;'>Wrong, Hack!!!</br></br>You triggered their mainframe's security, and now their system is under automatic lockdown. We'll never get in now.</br></br>WUDs are going off in every major city around the world as we speak. You've failed us all, Hack. You've failed us all!</div>";
			document.getElementById( "modal" ).innerHTML += "<button onclick='turnOffModal()'>REPLAY</button>";
			break;
		}
	}
}
function LoadFile()
{
	var oFrame = document.getElementById("frmFile");
	var rawContent = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	while (rawContent.indexOf("\r") >= 0) rawContent = rawContent.replace("\r", "");
	var arrLines = rawContent.split("\n");

	var words = [];
	for(var i = 0; i < arrLines.length; i++) {
		if(arrLines[i].length == 8) words.push(arrLines[i]);
	}

	var wordIndex = Math.floor(Math.random() * 7367);
	wordIndex = (wordIndex > words.length) ? (words.length - 1) : wordIndex;
	pword = words[wordIndex];
	console.log(pword); //DEBUG
	
	var pwordIndex = Math.floor(Math.random() * 8);
	console.log(pwordIndex);

	listbox = "<select id='guesses' style='margin-left: 25%; width: 50%;'>";
	for(var j = 0; j < 10; j++) {
		if(j === pwordIndex)
		{
			possiblePwords.push(pword);
			listbox += "<option value='" + pword + "'>" + pword + "</option>";
		}
		else
		{
			var curChoice = words[Math.floor(Math.random() * 7366)];
			if(possiblePwords.indexOf(curChoice) === -1 && curChoice.charAt(0) === pword.charAt(0))
			{
				possiblePwords.push(curChoice);
				console.log(curChoice);
				listbox += "<option value='" + curChoice + "'>" + curChoice + "</option>";
			}
			else j--;
		}
	}
	listbox += "</select>";
}