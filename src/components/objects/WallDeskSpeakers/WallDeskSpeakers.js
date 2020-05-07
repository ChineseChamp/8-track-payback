import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './WallDeskSpeakers.gltf';

class WallDeskSpeakers extends Group {
    constructor() {
        // Call parent Group() constructor
        super();

        const loader = new GLTFLoader();

        this.name = 'wall desk speakers';

        loader.load(MODEL, (gltf) => {
        	gltf.scene.position.set(0, 1, 0);
gltf.scene.scale.multiplyScalar(500);
            this.add(gltf.scene);
        });
    }
}

export default WallDeskSpeakers;
