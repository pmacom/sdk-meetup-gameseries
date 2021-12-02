const sharp = require("sharp")
const { chunk } = require("lodash")

const filename = "maze.gif"
const width = 21
const height = 21
const channels = 3

const walls = []
const pellets = []
const floor = []
const powerPellets = []

const handleRed = (x, y) => {
  console.log('found a red tile', x, y)
  floor.push({ x, y })
}

const handleGreen = (x, y) => {
  console.log('found a green tile', x, y)
  pellets.push({ x, y })
}

const handleBlue = (x, y) => {
  console.log('found a blue tile', x, y)
  walls.push({ x, y })
}

const handleYellow = (x, y) => {
  console.log('found a yellow tile', x, y)
  powerPellets.push({ x, y })
}

const handleColor = {
  "255,0,0,255": handleRed,
  "0,255,0,255": handleGreen,
  "0,0,255,255": handleBlue,
  "255,255,0,255": handleYellow
}

const handleBuffer = (err, rgbBuffer, info) => {
  const pixelData = new Uint8ClampedArray(rgbBuffer)
  const pixelArray = chunk(chunk(pixelData, 4), 21)

  for(var x=0; x<width; x++){
    for(var y=0; y<height; y++){
      const valueString = pixelArray[x][y].join(',')
      if(handleColor[valueString]){
        handleColor[valueString](x,y)
      }
    }
  }
  
  console.log(JSON.stringify({ walls, pellets, floor, powerPellets }))
}

async function getBoardData() {
  try {
    const image = await sharp(filename, { raw: { width, height, channels }})
      .raw()
      .toBuffer(handleBuffer)
  
  } catch (error) {
    console.log(`An error getting the data: ${error}`)
  }
}

getBoardData()