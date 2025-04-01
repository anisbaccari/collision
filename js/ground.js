
/ * ================= GROUND ================= */


/* 
// Create a ground 


 */

const Ground = {
    width: 50,
    height: 30, // Babylon.js uses "height" for ground, not depth 
    z_min: -15,
    z_max: 15, 
    x_min: -25, 
    x_max:25,
    material:null,


    groundMesh: null,

    // Initialize the ground
    init(scene) {
        if (this.groundMesh) return; // Prevent duplicate creation

        const options = { width: this.width, height: this.height };
        this.groundMesh = BABYLON.MeshBuilder.CreateGround("ground", options, scene);

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

    this.groundMesh.material = stoneMaterial;

    /* ==== TRIBUNE ==== */
   // Create a cylinder
   const cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {
    diameter: 2,
    height: 5,
    tessellation: 16
}, scene);

// Position the cylinder
cylinder.position.y = 2;

// Create a Standard Material for the cylinder
const cylinderMaterial = new BABYLON.StandardMaterial("cylinderMaterial", scene);

// Apply a texture to the cylinder
const texture = new BABYLON.Texture("./img/asset/01_asset_diffuse.jpg", scene);
cylinderMaterial.diffuseTexture = texture;

// Apply the material to the cylinder
cylinder.material = cylinderMaterial;


  
    this.groundMesh.receiveShadows = true;
    },
    getWidth()
    {
        return this.width;
    },
    getheight()
    {
        return this.height;
    },
    getBounderies()
    {
        console.log("z_min: ",this.z_min," z_max: ",this.z_max,
            "\nx_min:",this.x_min, "x_max: ",this.x_max);
    }
};

// Export the Ground object
export default Ground;