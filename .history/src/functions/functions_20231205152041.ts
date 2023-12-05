export const searchTag = (value: string) => {

    let words = value.trim().split(' ');

    let result = words.filter((word => {
      let startWord = word.startsWith('#');
      if(startWord) {
      return word.trim()
      }
    }))
    return result
  }

