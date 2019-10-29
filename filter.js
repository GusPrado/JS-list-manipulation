const { getPeople } = require ('./service')

Array.prototype.myFilter = function (callback) {
    const list = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if(result){
        list.push(item)
        }
    }
    return list
}

async function main() {
    try{
         const { results } = await getPeople('a')
        //  const familyLars = results.filter( function (item) {
        //      //returns Boolean:
        //      //false -> remove from new filtered array
        //      //true -> keep on new filtered array
        //      //IndexOf:
        //      // not found: -1
        //      //found: Array position
        //      const result = item.name.toLowerCase().indexOf('lars') !== -1
            
        //      return result
        //  })

        const familyLars = results.myFilter((item, index, list) => {
            console.log(`index: ${index}`, list.length)
            return item.name.toLowerCase().indexOf('lars') !== -1})
         const names = familyLars.map( (person) => person.name)
         console.log(names)

    } catch (err) {
        console.log('There is an error', err)
    }
}

main ()