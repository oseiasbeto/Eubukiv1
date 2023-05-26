const getImage = (Image) => URL.createObjectURL(Image)
const loadImage = (Image) => URL.revokeObjectURL(Image)

export {
    loadImage,
    getImage
}