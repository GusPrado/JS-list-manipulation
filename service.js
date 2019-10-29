const axios = require('axios')

const URL = 'https://www.swapi.co/api/people'

async function getPeople(name) {
    const url = `${URL}/?search=${name}`
    const response = await axios.get(url)

    return response.data
}

// getPeople('darth')
//     .then( (result) => {
//         console.log('API return: ', result)
//     })
//     .catch( (err) => {
//         console.log('There is an error: ', err)
//     })

    module.exports = { getPeople }