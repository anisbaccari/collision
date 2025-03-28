
/ * ================= GROUND ================= */


/* 
// Create a ground 

const g_width = 50; 
const g_height = 30; // depth ???? 
const g_opt =  { width: g_width, height: g_height }
const ground = BABYLON.MeshBuilder.CreateGround("ground", g_opt, scene);
// Create a material for the ground
const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
groundMaterial.diffuseColor = new BABYLON.Color3.Green(); // Set the ground color (R, G, B)
ground.material = groundMaterial;

// Add a light source (e.g., directional light)
const light = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(-1, -2, -1), scene);
light.position = new BABYLON.Vector3(10, 10, 10);
// Ensure the ground receives shadows
ground.receiveShadows = true;
 */

const Ground = {
    width: 50,
    height: 30, // Babylon.js uses "height" for ground, not depth

    groundMesh: null,

    // Initialize the ground
    init(scene) {
        if (this.groundMesh) return; // Prevent duplicate creation

        const options = { width: this.width, height: this.height };
        this.groundMesh = BABYLON.MeshBuilder.CreateGround("ground", options, scene);

        // Create a material for the ground
        const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseColor = new BABYLON.Color3.Green(); // Green ground
        this.groundMesh.material = groundMaterial;

        // Ensure the ground receives shadows
        this.groundMesh.receiveShadows = true;
    },
    getWidth()
    {
        return this.width;
    }
};

// Export the Ground object
export default Ground;