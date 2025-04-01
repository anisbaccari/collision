// Create Babylon.js scene
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 1); // Black background

    // Add a camera
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 3, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add a light
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Create a ground with a realistic stone texture
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 15, subdivisions: 50}, scene);

    // Apply a Standard Material with stone texture
    const stoneMaterial = new BABYLON.StandardMaterial("stoneMaterial", scene);
    const uvScale = 4;
    const texArray = [];

        //  Load Textures diffuseTexture defines the base color of the material. +
    const diffuseTex = new BABYLON.Texture("./img/grass/01_grass_diffuse.jpg", scene);
    stoneMaterial.diffuseTexture = diffuseTex;
    texArray.push(diffuseTex);

    // bumpTexture (or normal map) adds surface detail without extra geometry. + 
    const normalTex = new BABYLON.Texture("./img/grass/01_grass_normal.jpg", scene);
    stoneMaterial.bumpTexture = normalTex;
    stoneMaterial.invertNormalMapX = true;
    stoneMaterial.invertNormalMapY = true;
    texArray.push(normalTex);

    //ambientTexture enhances shadows for a more realistic look +
    const aoTex = new BABYLON.Texture("./img/grass/01_grass_ao.jpg", scene);
    stoneMaterial.ambientTexture = aoTex;
    texArray.push(aoTex);
    

    //specularTexture controls how light reflects on the material.
/*     const specTex = new BABYLON.Texture("./img/grass/01_grass_spec.jpg", scene);
    stoneMaterial.specularTexture = specTex;
    texArray.push(specTex); */

    // Adjusts texture tiling to repeat over the ground for a better look.
    texArray.forEach((tex) => {
        tex.uScale = uvScale;
        tex.vScale = uvScale;
    });

    ground.material = stoneMaterial;

    return scene;
};

const scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});

// Resize event
window.addEventListener("resize", function () {
    engine.resize();
});