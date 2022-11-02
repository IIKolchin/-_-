const imgArr = [
  'https://i.ibb.co/Xb6SQ9N/Group-1.png',
  'https://i.ibb.co/q9fg7gC/Group-2.png',
  'https://i.ibb.co/0m4NDWP/Group-3.png',
  'https://i.ibb.co/wwj1dFb/Group.png',
];

const imgArr2 = [
  'https://i.ibb.co/0YXWnrv/Group-4.png',
  'https://i.ibb.co/gRF6bvK/Group-5.png',
  'https://i.ibb.co/ZHXrTPt/Group-6.png',
  'https://i.ibb.co/2Wf4qzG/Group-7.png',
  'https://i.ibb.co/tstNV1J/Group-8.png',
]

const imgArr3 = [
  
]
export const getRandomImg = (arr: string[]) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export const randomArr = (
  lengthArr: number,
  minValue: number,
  maxValue: number,
  itemId: number
) => {
  let arr: number[] = [];
  do {
      let ran = Math.floor(Math.random() * (maxValue + 1 - minValue)) + minValue; 
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
   }while (arr.length < lengthArr)

  return Array.apply(null, Array(lengthArr)).map((item, i) => {
    return {
      value: String(arr[i]),
      id: itemId++,
      image: getRandomImg(imgArr),
    };
  });
};

export function generateCharArray(length: number, itemId: number) {
  const uniqueSet = new Set();
  while (uniqueSet.size < length) {
    const candidate = 97 + Math.floor(Math.random() * 26);
    uniqueSet.add(candidate);
  }
  // @ts-ignore
  return [...uniqueSet].map((x) => {
    return {
      value: String.fromCharCode(x).toLocaleUpperCase(),
      id: itemId++,
      image: getRandomImg(imgArr)
    }
  });
}
