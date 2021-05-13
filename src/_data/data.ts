const importAll = (r:any) => {
    return r.keys().map(r);
}
  
const thumbImages = importAll(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/));


export interface dataInfo{
    id: number;
    name: string;
    thumbnail: any;
    elements: {src: string, caption: string, width:number, height: string}[];
    isSquare: boolean;
}

export const data: dataInfo[] = [
    {
        id:100,
        name: '100', 
        thumbnail: thumbImages[0], 
        elements: [{src: '../../src/assets/portfolio/crop-sqaure00.jpg', caption: 'yes', width: 500, height: 'auto'}],
        isSquare: true
    },
    // {
    //     id:101,
    //     name: 'example', 
    //     thumbnail: thumbImages[1], 
    //     elements: [{src: '', caption: '', width: 1920, height: 'auto'}],
    //     isSquare: true,
    // },
    // {
    //     id:102,
    //     name: 'example', 
    //     thumbnail: thumbImages[2], 
    //     elements: [{src: '', caption: '', width: 1920, height: 'auto'}],
    //     isSquare: true
    // },
    // {
    //     id:103,
    //     name: 'example', 
    //     thumbnail: thumbImages[3], 
    //     elements: [{src: '', caption: '', width: 1920, height: 'auto'}],
    //     isSquare:false
    // },
    // {
    //     id:104,
    //     name: 'example', 
    //     thumbnail: thumbImages[4], 
    //     elements: [{src: '', caption: '', width: 1920, height: 'auto'}],
    //     isSquare:false
    // },
]