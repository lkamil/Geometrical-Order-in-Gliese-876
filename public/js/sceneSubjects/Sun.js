class Sun {

    constructor(scene) {
        this.radius = controls.scale;

        let sunGeometry = new THREE.SphereGeometry(this.radius, 20, 20);
        let sunMaterial = new THREE.MeshLambertMaterial({color: 0xffffcc});
        this.mesh = new THREE.Mesh(sunGeometry, sunMaterial);


        this.mesh.castShadow = true;

        this.mesh.position.x = 0;
        this.mesh.position.y = 0;
        this.mesh.position.z = 0;

        console.log("Sun position: " + this.mesh.position.x + " " +  this.mesh.position.y + " " + this.mesh.position.z);

        scene.add(this.mesh);

    }

    update() {
        //console.log("Update Sun");
        this.radius = controls.scale;
        this.mesh.scale.x = this.radius;
        this.mesh.scale.y = this.radius;
        this.mesh.scale.z = this.radius;
    }

}