const importAll = (r:any) => {
    return r.keys().map(r);
}
  
const thumbImages = importAll(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/));


export interface dataInfo{
    id: number;
    name: string;
    thumbnail: any;
    urls: string[];
    isSquare: boolean;
}

export const data: dataInfo[] = [
    {
        id:100,
        name: 'example', 
        thumbnail: thumbImages[0], 
        urls: [''],
        isSquare: true
    },
    {
        id:101,
        name: 'example', 
        thumbnail: thumbImages[1], 
        urls: [''],
        isSquare: true,
    },
    {
        id:102,
        name: 'example', 
        thumbnail: thumbImages[2], 
        urls: [''],
        isSquare: true
    },
    {
        id:103,
        name: 'example', 
        thumbnail: thumbImages[3], 
        urls: [''],
        isSquare:false
    },
    {
        id:104,
        name: 'example', 
        thumbnail: thumbImages[4], 
        urls: [''],
        isSquare:false
    },
]