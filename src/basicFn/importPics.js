function importPics(pic) {
    let images = {};
    pic.keys().map((item, index) => {
        return images[item.replace('./', '')] = pic(item);
    });
    return images;
}

export default importPics;