function importAll(r) {
    let images ={};
    r.keys().forEach((item, index) => {images[item.replace('./', '')] = r(item); });
    return images
}

export const Bop2019 = importAll(require.context('./2019', false, /\.(png|jpe?g|svg)$/));

export const Bop2018 = importAll(require.context('./2018', false, /\.(png|jpe?g|svg)$/));

export const Bop2017 = importAll(require.context('./2017', false, /\.(png|jpe?g|svg)$/));

export const Bop2016 = importAll(require.context('./2016', false, /\.(png|jpe?g|svg)$/));