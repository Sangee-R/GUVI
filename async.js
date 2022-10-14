// addEventListener

// syntax: 
// window.addEventListener(p1, p2)

// p1 = events,
// p2 = function,

// var p2 = function(e){
//     console.log('key pressed');
//     console.log(e);
// }



// window.addEventListener('keypress', p2)

var form = document.querySelector('form')
var name_form = document.querySelector('form input[placeholder*="Name"]')
var email = document.querySelector('form input[placeholder*="Email"]')
var password = document.querySelector('form input[placeholder*="Password"]')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('name',name_form.value);
    console.log('email',email.value);
    console.log('pass',password.value);
    name_form.value = ''
    email.value = ''
    password.value = ''
})


var funct = function(a,b){
    console.log(a,b);
}


var funct = function(a,b){
    return(a+b)
}

var funct2 = function(a,b){
    return(a+b)
}

funct2(10,funct(10,15))



// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     return setTimeout(()=>{
//         document.body.style.backgroundColor='blue'
//         return setTimeout(()=>{
//             document.body.style.backgroundColor='green'
//             return setTimeout(()=>{
//                 document.body.style.backgroundColor='yellow'
//                 return setTimeout(()=>{
//                     document.body.style.backgroundColor='pink'
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     return setTimeout(()=>{
//         document.body.style.backgroundColor='blue'
//         return setTimeout(()=>{
//             document.body.style.backgroundColor='pink'
//         },2000)
//     },2000)
// },1000)


// setTimeout(()=>{
//     document.body.style.backgroundColor='blue'
// },2000)

// setTimeout(()=>{
//     document.body.style.Color='red'
//     document.body.style.backgroundColor='blue'
// },2000)



// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor='blue'
//         return setTimeout(()=>{
//             document.body.style.backgroundColor='pink'
//         },2000)
//     },2000)
// },1000)

var fun1 = (a,b)=> a*b // assign / initilizing
var fun2 = (a,b)=> a*b
fun2(10,fun1(2,2)) // calling a function


var s = 41
// to find it is prime or not
// 2 - 13

var prime_fun = function(s){
                for (i=2;i<s;i++){
                    if (s%i == 0){
                        console.log('It is not a prime number');
                        return 'It is not a prime number'
                    }
                console.log('It is a prime number');
                return 'It is a prime number'
                }
            }
prime_fun(s)


var s = 41
// to find it is prime no till that element


//Creating a promise
//Resolve
var vaiable = 5
var promise_vari = new Promise(function(resolve,reject)
{
    if (vaiable)
    {
        console.log('promise created');
        resolve('It is resolved finally')
        }
    })
    console.log(promise_vari);

//Reject

var vaiable = 5
var promise_vari = new Promise(function(resolve,reject)
{
    if (vaiable)
    {
        console.log('promise created');
        resolve('It is resolved finally')}
        else
        {
            reject('It is reject finally')
        }})

        console.log(promise_vari);
        
        //try and catch

//Consume a promise

var vaiable = 5
var promise_vari = new Promise(function(resolve,reject)
{
    if (vaiable)
    {
        console.log('promise created');
        resolve('It is resolved finally')}
        else
        {
            reject('It is reject finally')
        }})
        console.log(promise_vari);
        promise_vari
        .then((res)=>
        {console.log(res);
        })
        .catch((sangee)=>
        {console.log(sangee);
        })
        .finally(()=>
        {console.log('it will always executed');
    })
