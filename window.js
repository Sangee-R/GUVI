DOM = 'Document Object Model'
window = 'BOM'
BOM = "Browser Object Model"

// window - > global variable

// if (true){
//     let pr = prompt('Get the data from user ')
//     console.log(pr);
// }

// if (true){
//     let security = alert('this webpage is not secure')
//     console.log('inisde alert');
// }


// SET TIME OUT
// a = [1,2,3,4,5]
// for (let i of a){console.log(i)}

// console.log('this is magesh');


// setTimeout

// syntax: setTimeout(p1,p2)
// p1 = function
// p2 = time(ms)

// console.log('Magesh1');


// var time1 = setTimeout(()=>{
//     // document.body.style.backgroundColor='blue'
//     document.querySelector('body').style.backgroundColor='blue'
// },3000)

// var time1 = setTimeout(()=>{
//     document.body.style.backgroundColor='red'
// },2000)

// console.log('Magesh2');


// var time1 = setTimeout(()=>{
//     document.querySelector('#container').innerText = 'Welcome Magesh'
// },3000)

// var a = 200
// var b = 30

// if (a>b){
//     clearTimeout(time1)
// }

// a = [1,2,3,4,5]
// for(i = 0;i<a.length;i++){
//     console.log(a[i]);
// }


// for (let i of a){
//     console.log(i);
// }

// continue -  skip that particular iteration 
// contine - anything below continue will not get executed

// break - when we hit break we terminate that particular iteration


// setInterval:
// it will keep on executing for this time interval

// syntax: setInterval(p1,p2)
// p1 = function
// p2 = time(ms)


var s = 1
var time1 = setInterval(()=>{
    s = s +1
    if (s ==10) {
        clearInterval(time1)
    }
    console.log(s);

    // document.querySelector('#container').innerText = 'Welcome Magesh'
    // console.log(5);
},100)


// 02: 00 : 00


var superfunction = (event) =>{
    console.log(event);
    console.log('the button is clicked');
}

var superfunction1 = (event) =>{
    console.log(event);
    console.log('the button is clicked 1');
}

var reset = (anything) =>{
    console.log(anything);
    document.querySelector('#stopwatch').innerText = '00: 00: 00'
}

var anyone = [1,2,3,4,5]

function looping(a){
    console.log(a);
}
looping(anyone)

var userpressing = (e) =>{
    console.log(e);
    console.log('pressing');
    console.log(document.querySelector('#gettinginput').value);
}

var clc = document.querySelector('#calc')
clc.innerText = ''
var one = (e) =>{
    console.log(e);
    clc.innerText =  clc.innerText + '1'
}

var two = (e) =>{
    console.log(e);
    clc.innerText =  clc.innerText + '2'
}

var three = (e) =>{
    console.log(e);
    clc.innerText =  clc.innerText + '3'
}

var adding = (e) =>{
    var clc1 = document.querySelector('#calc2')
    clc1.innerText = clc.innerText
    clc.innerText = ''
    console.log(e);
    // clc.innerText =  clc.innerText + '3'
}
