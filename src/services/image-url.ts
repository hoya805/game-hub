
//this utility function will crop images on the fly to download smaller sizes.
//https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
//inserting crop and sizes eg. crop/600/400/
//https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg


const getCroppedImageUrl = (url: string)=>{
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;