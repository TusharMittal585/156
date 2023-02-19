AFRAME.registerComponent("fishes",{
    init:function(){
        for (var i;i<=10;i++){
            const id=`fish${i}`

            const posX=Math.random() + 10 + -5
            const posY=Math.random() + 5 + -10
            const posZ=Math.random() + 60 + -55
            const position={x:posX, y:posY, z:posZ}
            this.CreateCoins(id,position) 
        }
    },
    CreateFishes:function(id,position){
        const FishEntity= document.querySelector("#island")
        var fishE1=document.createElement("a-entity")
        fishE1.setAttribute("id",id)
        fishE1.setAttribute("position",position)
        fishE1.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishE1.setAttribute("animation-mixer",{})
        fishE1.setAttribute("static-body") 
        FishEntity.appendChild(fishE1)
    }
}) 