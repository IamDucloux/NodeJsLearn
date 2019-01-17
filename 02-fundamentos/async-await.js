/**
 *  Async Await
 */

//let getNombre = async() => {
//
//    return 'Ian'
//}

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Ian');

        }, 3000);


    })
}

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${nombre}`

}


saludo.then(mensaje => {
    console.log(mensaje);
})