const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1'
const placeBaseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const comments = '/comments'
const cars = '/cars'

const urls= {
    carAPI:{
        cars,
        byId:(id:number):string=>`${cars}/${id}`
    },
    placeAPI:{
        users,
        comments
    }
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}


// neureons training
// const caroBaseURL = "http://best.url.com";
// const monstroBaseURL = "http://monstro.best.url"
//
// const caroline = '/caroline'
// const monstro = "/monstro"
//
// const urlo = {
//     caroAPi: {
//         caroline: caroline,
//         monstro: monstro
//     }
// }
//
// export {
//     caroBaseURL,
//     monstroBaseURL,
//     urlo
// }