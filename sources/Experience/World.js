import * as THREE from 'three'
import { Camera } from 'three'
import Experience from './Experience.js'

import Renderer from './Renderer.js'
const scene1 = new THREE.Scene();
const camera = new THREE.Camera();
//const flag = true;

export default class World
{
    
    constructor(_options)
    {
        this.experience = new Experience()
        this.camera = new Camera()
        this.config = this.experience.config
        this.scene = this.experience.scene
        //this.camera = this.experience.Camera
        //this.camera = new Camera()
        this.resources = this.experience.resources
        this.resources1 = this.experience.resources

        console.log(this.resources.items.untitled21)
        //console.log(this.resources.items.untitled42111)
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                //this.setDummy()
                this.setRoom()
                //this.setFloor()
                // if(flag==false)
                // {
                //     this.setFloor()
                // }
                console.log("RAM")
                console.log(this.resources.items.untitled42111.scene)
            }
        })
      
        
    }

    //setDummy()
   // {
       // this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
        //const cube = new THREE.Mesh(
            //new THREE.BoxGeometry(1, 1, 1),
           // new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
        //)
        //this.scene.add(cube)        
   // }
   
   setFloor()
   {
       
       this.room1 = {}
      // console.log(this.resources.items)
       this.room1.model1 = this.resources1.items.untitled41.scene
       //console.log(this.resources.items.untitled21.scene)
       console.log("RAM1")
       console.log(this.resources.items.untitled42111.scene)
       this.scene.add(this.room1.model1)

       const directionLight1 = new THREE.DirectionalLight('#ffffff', 3)
       directionLight1.position.set(5, 5, 5)
       this.scene.add(directionLight1)

   }
    setRoom()
    {
        this.room = {}
        //console.log(this.resources.items.untitled21.scene)
        this.room.model = this.resources.items.untitled21.scene
        console.log("RAM2")
     console.log(this.resources.items.untitled21.scene)
       this.room.m = this.resources.items.untitled42111.scene
        //console.log(this.room.model)
        this.scene.add(this.room.model)

        const directionLight = new THREE.DirectionalLight('#ffffff', 3)
        directionLight.position.set(5, 5, 5)
        this.scene.add(directionLight)

                ////const objects = [];

        // in your onLoad() callback

       // this.room.model.traverse( ( child ) => {

           // if ( child.isMesh ) objects.push( child );

       // } );
        //const mouse = new THREE.Vector2();
        //const intersectionPoint = new THREE.Vector3();
        //const planeNormal = new THREE.Vector3();
        //const plane = new THREE.Plane();
        //const raycaster = new THREE.Raycaster();

        //window.addEventListener('mousemove', function(e){
            //mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
           // mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            //console.log(mouse.x);
            //const intersects = raycaster.intersectObjects(this.room.model.children);
            //for(let i = 0; i<intersectionPoint.length; i++)
            //{
               // console.log(intersects);
           // }
            //console.log(planeNormal);
           // planeNormal.copy(Camera.position).normalize();
           // plane.setFromNormalAndCoplanarPoint(planeNormal, this.scene.position);
           // raycaster.setFromCamera(mouse, Camera);
           // raycaster.ray.intersectPlane(plane, intersectionPoint);
            
        //});
       // window.addEventListener('click', function(e){
            //const sphereGeo = new THREE.SphereGeometry(0.125, 30, 30);
            //const sphereMat = new THREE.MeshStandardMaterial({
            //    color: 0xFFEA00,
           //     metalness: 0,
             //   roughness: 0
           // });
           // const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
           // this.scene.add(sphereMesh);
          //  sphereMesh.position.copy(intersectionPoint);
       // });
      //  const raycaster = new THREE.Raycaster();
        //const pointer = new THREE.Vector2();

       // function onPointerMove( event ) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

          //  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
           // pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

       // }

        //    function render() {

        //      //update the picking ray with the camera and pointer position
        //        raycaster.setFromCamera( pointer, camera );

        //         //calculate objects intersecting the picking ray
        //         const intersects = raycaster.intersectObjects(this.scene);

        //      for ( let i = 0; i < intersects.length; i ++ ) {

        //           intersects[ i ].object.material.color.set( 0xff0000 );

        //        }

        //         render( this.scene, camera );

        //    }

            //window.addEventListener( 'pointermove', onPointerMove, false );
         
                    //    {
                    //         flag = false;
                    //    }
                    window.addEventListener('dblclick', this.setFloor())
           
           // window.requestAnimationFrame(render);
            

    }
    
  
    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}