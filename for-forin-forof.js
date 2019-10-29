const service = require('./service')

async function search() {
    try{
        const result = await service.getPeople('a')
        const names = []
        //USUAL FOR LOOP
        // for (let i = 0 ; i <= result.results.length -1 ; i++) {
        //     const person = result.results[i]
        //     names.push(person.name)
        // }

        //FOR IN LOOP
        // for (index in result.results) {
        //     const person = result.results[index]
        //     names.push(person.name)
        // }

        //FOR OF LOOP
        for (person of result.results) {
            names.push(person.name)
        }

        console.log('Names', names)
    } catch (err) {
        console.log('There is an error', err)
    }


}

search()