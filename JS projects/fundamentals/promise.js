let p = new Promise (
    (resolve, reject) => {
        let a = 1 + 2;
        if(a == 2){
            resolve('Success')
        }
        else{
            reject('Failure')
        }
    }
)

//console.log(p)

//check if promise is successful
p.then( 
    (message) => {
        console.log('Do this when ' + message)
    }
)//check if promise fails
.catch(
    (message) => {
        console.log('Do this when ' + message)
    }
)