const str = 'one.two.three.four.five';

const strToObj = (str) => {
    let obj = {};
    let temp = obj;

    for(let key of str.split('.')) {
        temp[key] = {};
        temp = temp[key];
    }

    return obj;
}

console.log(strToObj(str));

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/
