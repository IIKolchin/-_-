export const imgArr1 = [
  'https://i.ibb.co/Xb6SQ9N/Group-1.png',
  'https://i.ibb.co/q9fg7gC/Group-2.png',
  'https://i.ibb.co/0m4NDWP/Group-3.png',
  'https://i.ibb.co/wwj1dFb/Group.png',
];

export const imgArr2 = [
  'https://i.ibb.co/0YXWnrv/Group-4.png',
  'https://i.ibb.co/gRF6bvK/Group-5.png',
  'https://i.ibb.co/ZHXrTPt/Group-6.png',
  'https://i.ibb.co/2Wf4qzG/Group-7.png',
  'https://i.ibb.co/tstNV1J/Group-8.png',
];

export const imgArr3 = [
  'https://i.ibb.co/hBcq7T9/Group-10.png',
  'https://i.ibb.co/9ZjMZ70/Group-9059.png',
  'https://i.ibb.co/xzNw5Z1/Group-9060.png',
  'https://i.ibb.co/wdCsC6d/Group-9061.png',
];

export const imgArr4 = [
  'https://i.ibb.co/Kqpz7QZ/Group-11.png',
  'https://i.ibb.co/NKHVhF9/Group-12.png',
  'https://i.ibb.co/ccCGChq/Group-13.png',
  'https://i.ibb.co/bvySHFd/Group-14.png',
  'https://i.ibb.co/99F3V6z/Group-1418.png',
];

export const getRandom = (arr: string[]) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export const randomArr = (
  lengthArr: number,
  minValue: number,
  maxValue: number,
  itemId: number,
  img: string
) => {
  let arr: number[] = [];
  do {
    let ran = Math.floor(Math.random() * (maxValue + 1 - minValue)) + minValue;
    arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
  } while (arr.length < lengthArr);

  return Array.apply(null, Array(lengthArr)).map((item, i) => {
    return {
      value: String(arr[i]),
      id: itemId++,
      image:
        img === '1'
          ? getRandom(imgArr1)
          : img === '2'
          ? getRandom(imgArr2)
          : img === '3'
          ? getRandom(imgArr3)
          : getRandom(imgArr4),
    };
  });
};

export function generateCharArray(length: number, itemId: number, img: string) {
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
      image:
        img === '1'
          ? getRandom(imgArr1)
          : img === '2'
          ? getRandom(imgArr2)
          : img === '3'
          ? getRandom(imgArr3)
          : getRandom(imgArr4),
    };
  });
}
