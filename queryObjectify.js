const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";


function queryObjectify(arg) {
    return JSON.stringify(decodeURI(arg)
        .split('&')
        .map((s) => {
            const [keys, value] = s.split('=');
            return {
                keys: keys.split('.'),
                value
            }})
        .reduce((acc, {keys, value}) => {
            let obj = acc;
            for(let i = 0; i < keys.length - 1; i++) {
                const k = keys[i];
                if (!obj[k]) obj[k] = {};
                obj = obj[k];
            }
            obj[keys.at(-1)] = value;
            return acc;
        }, {}))
}

console.log(queryObjectify(inData))
/*
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};
*/
