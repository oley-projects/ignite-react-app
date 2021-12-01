export const imageResize = (imagePath, size) => {
    const image = imagePath.replace("/media/", `/media/resize/${size}/-/`);
    return image;
};