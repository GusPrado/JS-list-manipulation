const service = require('./service')

Array.prototype.myMap = function (callback) {
    const newMappedArray = []
    for (let index = 0; index < this.length ; index++) {
        const result = callback(this[index], index)
        newMappedArray.push(result)
    }

    return newMappedArray
}

async function map(){
    try{
        const result = await service.getPeople('a')
        // const names = []
        // result.results.forEach((item) => {
        //     names.push(item.name)
        // })

        //map function
        // result.results.map((person) => {
        //     return person.name }
    
        //map single line
        //const names = result.results.map(person => person.name)
      
        const names = result.results.myMap(function (person, index){
            return `[${index}] ${person.name}`
        })
        console.log('NAMES: ', names)

    } catch (err) {
        console.log('There is an error: ', err)
    }
}

map()