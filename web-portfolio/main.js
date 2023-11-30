import * as THREE from "three";

let objects = [];

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d0d0d);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshNormalMaterial({ color: 0xf2f2f2 });
material.wireframe = true;

const cubeFR1 = new THREE.Mesh(geometry, material);
objects.push(cubeFR1);
scene.add(cubeFR1);
cubeFR1.position.set(4, 2, -2);

const cubeFR2 = new THREE.Mesh(geometry, material);
objects.push(cubeFR2);
scene.add(cubeFR2);
cubeFR2.position.set(10, -3, -7);

const cubeFR3 = new THREE.Mesh(geometry, material);
objects.push(cubeFR3);
scene.add(cubeFR3);
cubeFR3.position.set(5, -7, -3);

const cubeFL1 = new THREE.Mesh(geometry, material);
objects.push(cubeFL1);
scene.add(cubeFL1);
cubeFL1.position.set(-8, 4, -8);

const cubeFL2 = new THREE.Mesh(geometry, material);
objects.push(cubeFL2);
scene.add(cubeFL2);
cubeFL2.position.set(-7, -3, -3);

const cubeFL3 = new THREE.Mesh(geometry, material);
objects.push(cubeFL3);
scene.add(cubeFL3);
cubeFL3.position.set(-7, -9, -5);

const light = new THREE.PointLight(0xffffff, 20, 100);
light.position.set(0, 0, 4);
scene.add(light);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.y = t * 0.0025;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);

  cubeFR1.rotation.x += 0.002;
  cubeFR1.rotation.y += 0.001;
  cubeFR1.rotation.z += 0.001;

  cubeFR2.rotation.x -= 0.001;
  cubeFR2.rotation.y += 0.003;
  cubeFR2.rotation.z -= 0.001;

  cubeFR3.rotation.x -= 0.001;
  cubeFR3.rotation.y -= 0.002;
  cubeFR3.rotation.z += 0.001;

  cubeFL1.rotation.x -= 0.002;
  cubeFL1.rotation.y += 0.001;
  cubeFL1.rotation.z -= 0.001;

  cubeFL2.rotation.x += 0.0007;
  cubeFL2.rotation.y -= 0.002;
  cubeFL2.rotation.z += 0.001;

  cubeFL3.rotation.x += 0.002;
  cubeFL3.rotation.y += 0.001;
  cubeFL3.rotation.z -= 0.001;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
