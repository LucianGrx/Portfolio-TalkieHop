import * as THREE from 'three';
import "./style.css";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import gsap from "gsap";

let mixer, mixer2, cosmog, pika,sobble, mixer3, skeleton, bulbasaur, lucario, stickman, mixer4;
const panelText = $('#panel-text');


const scene = new THREE.Scene();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2500);

camera.position.z = -30;
camera.position.y = 80;
camera.position.x = -80;


const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);
const loaderr = new THREE.TextureLoader();
const texturee = loaderr.load('/images/light.jpg');
scene.background = texturee;

scene.add(camera);


const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById("progress-bar");
loadingManager.onProgress = function(url, loaded, total) {
    progressBar.value = (loaded / total) * 100;
  }
const tutorialTab = document.querySelector(".tutorial");


const progressBarContainer = document.querySelector(".progress-bar-container")
loadingManager.onLoad = function(url, loaded, total) {
      progressBarContainer.style.display = 'none';
    }

    loadingManager.onLoad = function() {
      progressBarContainer.style.display = 'none';
      tutorialTab.style.display = 'flex';
    }

loadingManager.onError = function(url) {
  console.error("Got o problem loading ", url);
}


let position = 0;


const loader = new GLTFLoader(loadingManager);
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
loader.setDRACOLoader( dracoLoader );
loader.load(
	'/components/gamingroom/scene.gltf',
	function ( gltf ) {
    const room = gltf.scene.children[0];
    room.scale.set(1,1,1);
		scene.add( gltf.scene );


    function showPanel(text, delay, topPosition, rightPosition) {
      $('#panel').hide();
      $('#panel').css({top:topPosition, right:rightPosition});
      setTimeout(function() {
        $('#panel').show();
        panelText.text(text)
      }, delay);
    }

    function moveCameraFunction() {
      switch (position) {
        case 0:
          $('#panel-title').text('The Beginning From a Bedroom');
          showPanel("In a small and modest bedroom, in a quiet and ordinary neighborhood, a young and passionate mind stared at an old computer. Here, in this quiet corner of the world, our story began. Mark, a Harvard student, dreamed of creating something special.", 2500);
          moveCamera(-9.8, 12, -22);
          rotateCamera(-2.5, 1, 2.6);
          position = 1;
          $("#animate-button").text("NEXT");
          break;
        case 1:
          $('#panel-title').text('The Dream Taking Shape');
          showPanel("With every line of code written in his dorm room, Mark's dream took shape. He developed a social networking platform for his peers, and it quickly came to life. People started connecting, sharing, and socializing.", 2500);
          moveCamera(-17.6, 8.13, 4);
          rotateCamera(-2.2, -1, -2.2);
          position = 2;
          break;
        case 2:
          $('#panel-title').text('From Harvard to Silicon Valley');
          showPanel("Mark and his team launched their platform on a larger scale, and in no time, they felt its impact on the world. They moved to Silicon Valley, where they grew rapidly. His dream from his dorm room had transformed into a global reality.", 2500);
          moveCamera(2.3, 10.5, 0);
          rotateCamera(-2.4, 1, 2.5);
          position = 3;
          initializeAudio();
          video.play();
          break;
        case 3:
          $('#panel-title').text('Challenges and Hurdles');
          showPanel("Along the way, Mark faced countless challenges and hurdles. However, he learned to adapt, confront critics, and keep innovating. He knew that nothing could stop a dedicated dreamer.", 2000);
          moveCamera(-11, 8.9, 4);
          rotateCamera(-1.6, 1, 1.6);
          position = 4;
          break;
        case 4:
          $('#panel-title').text('A Global Community');
          showPanel("Thus, Facebook evolved into a global community. Billions of people were connected worldwide, and the modest Harvard dorm room had become the heart of a digital revolution.", 1800);
          moveCamera(0.3, 9.7, -3.1);
          rotateCamera(-2.7, -0.5, -2.9);
          position = 5;
          break;
        case 5:
          $('#panel-title').text('The Inspirational Message');
          showPanel("As Mark demonstrated, small dreams can become a reality. What matters most is to keep believing and taking action. Every line of code, every obstacle overcome, and every connection made brings you closer to turning your dreams into reality. Who knows what impact you'll have on the world?", 2500);
          moveCamera(-4.3, 13, -5.5);
          rotateCamera(-2.7, 0.3, 3);
          position = 6;
          break;
        case 6:
          $("#animate-button").hide();
          $('#numar-obiecte').css({ position: 'absolute' });
          $('#panel').hide();
          break;
      }
    
      console.log(camera.position);
      console.log(camera.rotation);
    }
    
    window.addEventListener('keydown', function(event) {
      if (event.key === 'p') {
        moveCameraFunction();
      }
    });
    
    const animateButton = document.getElementById('animate-button');
    animateButton.addEventListener('click', function() {
      moveCameraFunction();
    });



    
  }, function (xhr) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },
   function ( error ) {

    console.error( error );
  
  } );
  const loader2 = new GLTFLoader();
  loader2.load(
    '/components/cosmog/scene.gltf',
    function ( gltf ) {
      cosmog = gltf.scene
      cosmog.scale.set(5,5,5);
      cosmog.position.set(6, 0, 3);
      scene.add( gltf.scene );
    },
     function ( error ) {
  
      console.error( error );
    
    } );

    const loader3 = new GLTFLoader();
    loader3.load(
      '/components/pika/scene.gltf',
      function ( gltf ) {
        pika = gltf.scene
        pika.scale.set(1.5,1.5,1.5);
        pika.position.set(6, 5.4, 0);
        scene.add( gltf.scene );
        
      },
       function ( error ) {
    
        console.error( error );
      
      } );

      const loader4 = new GLTFLoader();
      loader4.load(
        'sobble.glb',
        function ( gltf ) {
          sobble = gltf.scene
          sobble.scale.set(4,4,4);
          sobble.position.set(-14, 6, 6);
          sobble.rotation.y = Math.PI / 2;
          mixer3 = new THREE.AnimationMixer(gltf.scene);
          const idle=mixer3.clipAction(gltf.animations[0]);
          idle.play();

          scene.add( gltf.scene );
          
        },
         function ( error ) {
      
          console.error( error );
        
        } );

        const loader5 = new GLTFLoader();
        loader5.load(
          'components/skeleton/scene.gltf',
          function ( gltf ) {
            skeleton = gltf.scene;
            skeleton.scale.set(3, 3, 3);
            skeleton.position.set (-5, 5.2, 2.4);
            skeleton.rotateOnAxis(new THREE.Vector3(1,1.2,0),180* Math.PI / 180)
            skeleton.rotation.y = 109.5;
            scene.add(gltf.scene);
          },
          function(error) {
            console.error(error);
          }
        );

        const loader6 = new GLTFLoader();
        loader6.load(
          'components/bulbasaur/scene.gltf',
          function ( gltf ) {
            bulbasaur = gltf.scene;
            bulbasaur.scale.set(0.3, 0.3, 0.3);
            bulbasaur.position.set (-14, 6, 4);
            bulbasaur.rotation.y = 7.3
            scene.add(gltf.scene);
          },
          function(error) {
            console.error(error);
          }
        );

        const loader7 = new GLTFLoader();
        loader7.load(
          'components/lucario/scene.gltf',
          function ( gltf ) {
            lucario = gltf.scene;
            lucario.scale.set(6, 6, 6);
            lucario.position.set (-20, 0.6, -17);
            lucario.rotation.y = 7.3
            scene.add(gltf.scene);
          },
          function(error) {
            console.error(error);
          }
        );

        const geometryLucario = new THREE.SphereGeometry(10, 64, 64);
        const textureLucario = new THREE.TextureLoader().load('/images/foc.png');
        const materialLucario = new THREE.MeshBasicMaterial({
          map: textureLucario,
          color: 0xffffff,
          opacity: 0.3
          
            });
        const meshLucario = new THREE.Mesh(geometryLucario, materialLucario);
        const light2 = new THREE.PointLight(0xffffff, 10, 20);
        meshLucario.add(light2);
        meshLucario.position.set(-19.65, 8.4, -11.5);
        meshLucario.scale.set(0.12, 0.12, 0.12);
        scene.add(meshLucario);

        const loader8 = new GLTFLoader();
        loader8.load(
          'stickman.glb',
          function ( gltf ) {
            stickman = gltf.scene;
            stickman.scale.set(2.5, 2.5, 2.5);
            stickman.position.set (-21, 0.6, -3);
            stickman.rotation.y = 22.2;
            mixer4 = new THREE.AnimationMixer(gltf.scene);
          const idle=mixer4.clipAction(gltf.animations[0]);
          idle.play();
            scene.add(gltf.scene);
          },
          function(error) {
            console.error(error);
          }
        );

        let video = document.getElementById("melodieSpeciala");
        let videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;

        let movieMaterial = new THREE.MeshBasicMaterial({
          map: videoTexture,
          side: THREE.FrontSide,
          toneMapped: false,
        });
        let movieGeometry = new THREE.BoxGeometry(0.1, 3.6, 6.1);
        let movieCubeScreen = new THREE.Mesh(movieGeometry, movieMaterial);
        movieCubeScreen.position.set(-5, 8.3, 9);
        movieCubeScreen.rotation.y = 4.9;
        scene.add(movieCubeScreen);


  function moveCamera(x, y, z) {
          gsap.to(camera.position, {
        x,
        y,
        z,
        duration: 3
      });
  }
  function rotateCamera(x, y, z){
      gsap.to(camera.rotation, {
        x,
        y,
        z,
        duration: 3.2
      });
  }
        
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame( animate );

            
    var delta = clock.getDelta();
    

    if ( mixer3 ) mixer3.update( delta );
    if ( mixer4 ) mixer4.update( delta );
    if (cosmog) {
      cosmog.rotation.y = 3.4 + Math.sin(clock.getElapsedTime()) * 0.5;
    } 
    if (cosmog) {
      cosmog.position.y = 4.8 + Math.sin(clock.getElapsedTime()) * 0.5;
    }
    if (pika) {
      pika.position.y = 5.8 + Math.sin(clock.getElapsedTime() * 10) * 0.5;
    }
    if (skeleton) {
      skeleton.rotation.z = 3.4 + Math.sin(clock.getElapsedTime()*2) * 0.1;
    }
    meshLucario.rotation.y = Date.now() * -0.5;
    meshLucario.rotation.x = Date.now() * -0.5;

    renderer.render( scene, camera ); 
  }
  

const light = new THREE.DirectionalLight(0xFFE169, 0.2);
light.position.set(-18.260, 18.977, 2.552);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
ambientLight.intensity = 1; 
scene.add(ambientLight);


const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


//----- SURPRISE ------


function createConfetti() {
  const confettiGroup = new THREE.Group();
  const confettiMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
  });
  const colors = [0xff0000,0x00ff00,0x0000ff,0xffff00,0xff00ff ];
  for (let i = 0; i < 50; i++) {
    const confettiGeometry = new THREE.PlaneGeometry(1, 1);
    const confettiColor = colors[Math.floor(Math.random() * colors.length)];
    confettiMaterial.color.setHex(confettiColor);
    const confetti = new THREE.Mesh(confettiGeometry, confettiMaterial);
    confetti.position.set(Math.random() * 30 - 5,Math.random() * 40 - 5,Math.random() * 30 - 5);
    confetti.rotation.set(Math.random() * Math.PI,Math.random() * Math.PI,Math.random() * Math.PI);
    confettiGroup.add(confetti);
  }
  scene.add(confettiGroup);
  let confettiRotationSpeed = 0.05;
  function animateConfetti() {
    confettiGroup.rotation.y += confettiRotationSpeed;
    confettiGroup.children.forEach(confetti => {
      confetti.position.y -= 0.1;
      confetti.position.x += (Math.random() - 0.5) * 0.1;
      confetti.position.z += (Math.random() - 0.5) * 0.1;
    });
    requestAnimationFrame(animateConfetti);
    let allConfettiFallen = true;
    confettiGroup.children.forEach(confetti => {
      if (confetti.position  .y > 10) {
        allConfettiFallen = false;
      }
    });
    if (allConfettiFallen) {
      scene.remove(confettiGroup);
    }}
    animateConfetti();
    }document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
      createConfetti();
      }
      });


// --- SURPRISE ---



function initializeAudio() {
  const listener = new THREE.AudioListener();
  const listenerPokemon = new THREE.AudioListener();
  camera.add(listener);
  camera.add(listenerPokemon);
  const sound = new THREE.PositionalAudio(listener);
  const soundPokemon = new THREE.PositionalAudio(listenerPokemon);
  const audioLoader = new THREE.AudioLoader();
  const audioLoaderPokemon = new THREE.AudioLoader();
  audioLoader.load( 'components/music2.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop(true);
    sound.setVolume(6);
    sound.setRefDistance(1);
    sound.play();
  });
  audioLoaderPokemon.load( 'components/sounds/pikachu.mp3', function( buffer ) {
    soundPokemon.setBuffer( buffer );
    soundPokemon.setVolume(0.5);
    soundPokemon.play();
  });
  // skeleton.add(sound);
  pika.add(soundPokemon)
}


//Resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
//Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})

const loop = () => {
  // controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
  videoTexture.needsUpdate = true;
  videoTexture.update();
}
loop();




const lightMode = {
  bgColor: '/images/light.jpg',
  ambientLightColor: 0xffffff,
};

const darkMode = {
  bgColor: '/images/dark.jpeg',
  ambientLightColor: 0x171717,
  directionalLightColor: 0x6c6cff,
  directionalLightIntensity: 0.5,
};
let currentMode = lightMode;
const toggleButton = document.querySelector('.toggle-button');
const toggleCircle = document.querySelector('.toggle-circle');
const toggleText = document.querySelector('.toggle-text');

toggleButton.addEventListener('click', () => {
  currentMode = currentMode === lightMode ? darkMode : lightMode;
  toggleButton.classList.toggle('dark');
  toggleText.innerText = currentMode === lightMode ? 'Light Mode' : 'Dark Mode';
  updateScene();
});

function updateScene() {
  const loaderr = new THREE.TextureLoader();
  const texturee = loaderr.load(currentMode.bgColor);
  scene.background = texturee;
  const ambientLight = new THREE.AmbientLight(currentMode.ambientLightColor);
  const directionalLight = new THREE.DirectionalLight(currentMode.directionalLightColor, 0.2);
  directionalLight.position.set(-18.260, 18.977, 2.552);
  scene.remove(scene.children.find(child => child instanceof THREE.AmbientLight));
  scene.remove(scene.children.find(child => child instanceof THREE.DirectionalLight));
  scene.add(ambientLight);
  scene.add(directionalLight);
}

// setEventListeners();

// const tl = gsap.timeline({defaults: { duration: 1 }});
// tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});
// tl.fromTo('nav', {y: '-100%'}, {y: "0%"});
// tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });

// let mouseDown = false
// window.addEventListener('mousedown')

// FIND THE CUBE

let findPieces = [];
let PiecesFinded = false;




const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

// ---- Pieces ------

const basicCube = new THREE.BoxGeometry();
const materialBasicCube = new THREE.MeshBasicMaterial({color:0x6c6cff});
const meshBasicCube = new THREE.Mesh(basicCube, materialBasicCube);
meshBasicCube.position.set(-0.5, 11, 8);

const basicCube2 = new THREE.BoxGeometry();
const materialBasicCube2 = new THREE.MeshBasicMaterial({color:0x8c3c00});
const meshBasicCube2 = new THREE.Mesh(basicCube2, materialBasicCube2);
meshBasicCube2.position.set(9, 9, -17);

const basicCube3 = new THREE.BoxGeometry();
const materialBasicCube3 = new THREE.MeshBasicMaterial({color:0xc9ff77});
const meshBasicCube3 = new THREE.Mesh(basicCube3, materialBasicCube3);
meshBasicCube3.position.set(9, 6, -10);

const basicCube4 = new THREE.BoxGeometry();
const materialBasicCube4 = new THREE.MeshBasicMaterial({color:0xff6c3c});
const meshBasicCube4 = new THREE.Mesh(basicCube4, materialBasicCube4);
meshBasicCube4.position.set(-14, 5, -13);

const basicCube5 = new THREE.BoxGeometry();
const materialBasicCube5 = new THREE.MeshBasicMaterial({color:0x3c6cff});
const meshBasicCube5 = new THREE.Mesh(basicCube5, materialBasicCube5);
meshBasicCube5.position.set(-12, 1, 7);

const basicCube6 = new THREE.BoxGeometry();
const materialBasicCube6 = new THREE.MeshBasicMaterial({color:0xff3c6c});
const meshBasicCube6 = new THREE.Mesh(basicCube6, materialBasicCube6);
meshBasicCube6.position.set(2, 6, 7);

const basicCube7 = new THREE.BoxGeometry();
const materialBasicCube7 = new THREE.MeshBasicMaterial({color:0x77c9ff});
const meshBasicCube7 = new THREE.Mesh(basicCube7, materialBasicCube7);
meshBasicCube7.position.set(-18, 1, 21);

const basicCube8 = new THREE.BoxGeometry();
const materialBasicCube8 = new THREE.MeshBasicMaterial({color:0x6cff3c});
const meshBasicCube8 = new THREE.Mesh(basicCube8, materialBasicCube8);
meshBasicCube8.position.set(10, 18, 10);
scene.add(meshBasicCube,meshBasicCube2,meshBasicCube3,meshBasicCube4,meshBasicCube5,meshBasicCube6,meshBasicCube7,meshBasicCube8);

const obiecteDeGasit = [meshBasicCube, meshBasicCube2, meshBasicCube3, meshBasicCube4, meshBasicCube5, meshBasicCube6, meshBasicCube7, meshBasicCube8];
// ---- Pieces ------


function resetMaterials() {
  for (let i = 0; i < scene.children.length; i++) {
    if (scene.children[i].material) {
      scene.children[i].material.color.set(0xFF6600);
    }
  }
}

function hoverPieces() {
  raycaster.setFromCamera(mouse, camera);

  for (const obiect of obiecteDeGasit) {
    const intersects = raycaster.intersectObject(obiect);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;

      if (findPieces.indexOf(intersectedObject) === -1) {
        intersectedObject.material.transparent = true;
        intersectedObject.material.color.set(0xff0000);
        findPieces.push(intersectedObject);
        scene.remove(intersectedObject);
        showPiecesFind();
      }
    }
  }
}


function showPiecesFind() {
  const numberPiecesElement = $('#numar-obiecte');
  console.log("merge")
  numberPiecesElement.text(`${findPieces.length} / 8`)
  if (findPieces.length === 8) {
    $("#win-game").show();
    setTimeout(() => {
      $("#win-game").hide();
      $("#social-media").show();
    }, 5000);
    numberPiecesElement.css({display:"none"});
    for(let i=0; i<3; i++){
      createConfetti();
    }
  }
}

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
 
    hoverPieces();
}

window.addEventListener('click', onMouseMove, false);

animate();