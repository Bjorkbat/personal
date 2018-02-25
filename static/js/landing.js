var canvasWidth = document.getElementById("ThreeContainer").offsetWidth;
var canvasHeight = document.getElementById("ThreeContainer").offsetHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, canvasWidth/canvasHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0xFFFFFF);
renderer.setSize( canvasWidth, canvasHeight );
document.getElementById("ThreeContainer").appendChild( renderer.domElement );

// Setup some lighting
var ambientLight = new THREE.AmbientLight(0xA0A0A0);
scene.add(ambientLight);

var directLight = new THREE.DirectionalLight(0xFFFFFF, 0.37);
directLight.position.set(0, 2, 0);
scene.add(directLight);

var cubeGeo = new THREE.BoxGeometry( 1, 1, 1 );
var cubeMat = new THREE.MeshPhongMaterial( {
  color: 0x083D77,
  shading: THREE.FlatShading
});
var cube = new THREE.Mesh( cubeGeo, cubeMat );
scene.add( cube );
cube.position.x = -3;

var polyGeo = new THREE.IcosahedronGeometry(1, 0);
var polyMat = new THREE.MeshPhongMaterial({
  color: 0xFB3640,
  shading: THREE.FlatShading
});
var polyhedra = new THREE.Mesh(polyGeo, polyMat);
scene.add(polyhedra);

var octaGeo = new THREE.OctahedronGeometry(1, 0);
var octaMat = new THREE.MeshPhongMaterial({
  color: 0xF4D35E,
  shading: THREE.FlatShading
});
var octahedra = new THREE.Mesh(octaGeo, octaMat);
scene.add(octahedra);
octahedra.position.x = 3;

camera.position.z = 10;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  polyhedra.rotation.x -= 0.01;
  polyhedra.rotation.y += 0.01;

  octahedra.rotation.x += 0.01;
  octahedra.rotation.y -= 0.01;

  renderer.render(scene, camera);
};

render();
