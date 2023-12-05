

export const searchTag = (value1: string, value2: string) => {

    let words1 = value1.trim().split(' ');
    let words2 = value2.trim().split(' ');

    let result = words1.concat(words2)
    
    .filter((word)=> {
      let startWord = word.startsWith('#');
      if(startWord) {
      return `<span className="tag">${word}</span>`;
    }})
    return result.join(' ')
  }


  export const arrayTags = (array: []) => {
    return array.filter((tag: string) => tag)
  }

