import { INote } from "../interface";

export const searchTag = (value1: string, value2: string) => {

  let words1 = value1.trim().split(' ');
  let words2 = value2.trim().split(' ');

  let findTags = words1
    .concat(words2)
    .toString()
    .split(',')
    .join(' ')
    .match(/#\w+/g) || [];

  return findTags
}


export const findAllTags = (arr: INote[]) => {

  let result: any[] = []
  arr
    .map(elem => elem.tag)
    .forEach(array =>
      result = result.concat(array)
    );
  let array = [...new Set(result)].filter(e => e !== undefined);

  return array
}

export function coloredTag(str: string) {
  return str.replace(/#\w+/g, match => `<span style="color: rgb(33,209,255); font-weight: 600">${match} </span>`)
}





