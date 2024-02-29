
const promisu = new Promise ((resolve, reject) => {
    const error = false;

    if(!error) {
        resolve('tama pre');
    } else {
        reject('wrong browki')
    }
})



promisu
.then(value => {
    return (`${value} tangina pre goods`)
})
.then(newValue => {
    console.log(newValue)
})
.catch(dame => {
    console.log(dame)
}) 
