import ImageService from "./image-service.js"
//Your ImageService is a global class what can you do here to instantiate it?
let imgServ = new ImageService

function drawImage(image) {
    let template = ""
    template +=`
    <style>
        body {background-image: url(${image.Url});
        background-size: cover;}
    </style>
    `
    document.getElementById('body').innerHTML = template
}

export default class ImageController {
    constructor() {
        imgServ.getImage(drawImage)
    }
    getImage() {
        imgServ.getImage(image => {
            console.log(image);
        })
    }
}

