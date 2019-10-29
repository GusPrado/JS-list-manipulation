const { getPeople } = require ('./service')

Array.prototype.myReduce = function(callback, startValue) {
    let endValue = typeof startValue !== undefined ? startValue : this[0]
    for (let index = 0; index <= this.length -1; index++) {
        valorFinal = callback(endValue, this[index], this)
    }
    return endValue
}

async function main() {
    try {
        const { results } = await getPeople('a')
        const weights = results.map(item => 
            parseInt(item.mass)
            // if (typeof item.mass !== NaN ) {
                
            // }
        )
        console.log('Weights', weights)
        //[50.9, 78.4, 90.2, 34.6] => sum ???
        // const total = weights.reduce((prev, next) => {
        //         return prev + next  
        // })
        const myList = [
            ['Gus', 'Prado'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = myList.myReduce((prev, next) => {
            return prev.concat(next)
        }, [])
        .join(', ')

        console.log('Total: ', total)


    } catch(err) {
        console.error('There is an error: ', err)
    }
}

main()