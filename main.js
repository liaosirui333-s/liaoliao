
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





const scene = new THREE.Scene ();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

const renderer= new THREE.WebGLRenderer();

//import model here
const glftLoader= new GLTFLoader();
glftLoader.load('liaosirui333-s.github.io/animal heal.gltf',(glftScene) => {
  //loadedModel=gltfScene;


test.scene.add(gltfScene.scene);
});






//above model














renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement)
