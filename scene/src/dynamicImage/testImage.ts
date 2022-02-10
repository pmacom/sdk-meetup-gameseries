import { GlobalCanvas } from "./canvas";
import { DynamicImage } from "./dynamicImage";

const imageSrc = "images/testimage.png"
export const imageTexture = new Texture(imageSrc)

export interface GUIImageOptions {
    width: number | string
    height: number | string
    sourceX: number
    sourceY: number
    positionX: number
    positionY: number
    vAlign: string
    hAlign: string
}

export const createImage = (
    name: string,
    imageTexture: Texture,
    options: GUIImageOptions
): UIImage => {
    let image =  new UIImage(GlobalCanvas, imageTexture)
    image.name = name
    image.width = options.width
    image.height = options.height
    image.sourceLeft = options.sourceX
    image.sourceTop = options.sourceY
    image.sourceWidth = typeof options.width == 'string' ? 0 : options.width
    image.sourceHeight = typeof options.height == 'string' ? 0 : options.height
    image.positionX = options.positionX
    image.positionY = options.positionY
    image.vAlign = options.vAlign
    image.hAlign = options.hAlign
    image.sizeInPixels = true
    image.opacity = 1
    return image
}

export const audioIcon = () : DynamicImage => {
    let image = createImage("audioIcon", imageTexture, {
        width: 60,
        height: 60,
        sourceX: 0,
        sourceY: 0,
        positionX: 0,
        positionY: 0,
        vAlign: "center",
        hAlign: "center",
    })
    image.opacity = 1
    return new DynamicImage(image)
}
