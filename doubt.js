
var a = 17845
var  check = 'magesh'
for(i=2;i<a;i++){
    if(a%i===0){
        check = 'rose'
        console.log('It is Not a Prime Number');
        console.log('---');
        break
    }
}
if (check === 'magesh'){
    console.log('It is Prime');
}
else{
    console.log('It is Not a Prime Number');
}

5
var a = 11
var  check = true
for(i=2;i<parseInt(a/2)+1;i++){
    if(a%i===0){
        // empty
        check = false
    }
}
if (check){
    console.log('It is Prime');
}
else{
    console.log('It is Not a Prime Number');
}


var a = 45
for (j=2;j<=a;j++){
    var  check = 'magesh'
    if (j%2==0 && j!=2){
        continue
    }
    for(i=2;i<j/2;i++){
        if(j%i===0){
            check = 'rose'
            break
        }
    }
    if (check === 'magesh'){
        console.log(j,'It is Prime');
    }
}

var a = 0
var b = 1
var out = 10
// var c = a + b
console.log(a);
console.log(b);
while(out > 2){
    out--
    var c = a + b
    console.log(c);
    a = b
    b = c

}

var a = 0
var b = 1
var out = 10
// var c = a + b
while(out > 2){
    out--
    var c = a + b
    a = b
    b = c
}
console.log(c);


0 - a
1 - b - a
1 - c - b - a
2 - c - b - a
3 - c - b - a
5 - c - b
8


// --------------------------------------------------------

a = [1,1,1,1,1,32,2,2,2,3,32,3,32,3,3,3,2,2,2,1,1,1,1,51,51,51,51,2,1,2,1,2,212,212,212]
b = {}
for(let i of a){
    var v = a.filter((x)=>x==i).length
    b[i] = v
}
console.log(b);



var a = [1,2,3,4,5,6]
// even nos using filter
function filter_fun1(a){
    return a%2==0
}
var c = a.filter(filter_fun1)
console.log(c);

// filter
// 1. if the output is true in function then the element will be considred
// 2. it will  alter the length of Array.
// 3. filter doest not do any manipluation.
// 4. filter takes one element ata time


// some: - boolean
// 1. if any one element is sastified the condition then  output will be true

// every: - boolean
// 1. if all element is sastified the condition then the output will be true


// 1. a = [1,2,3,4,5,23] LCM
60


// console.log('*'.repeat(4));
var n = 5
var a = 1
while(n>0){
    n--
    console.log('*'.repeat(a));
    a++
}

for(i=0;i<=n;i++){
    console.log('*'.repeat(i));

}

console.log(' '.repeat(4)+'*'.repeat(1));


// ***
// **
// *
// ''

// *
// **
// ***
// ****
// *****

//     *
//    **
//   ***
//  ****
// *****

// a = [11,13]
// 1. a = [1,2,3,4,5] LCM
a = [1,2,3,4]
var count = 1
while (true){
    console.log(count);
    var lcm = []
    for(let i of a){
        if(count%i==0){
            lcm.push(i)
        }
    }
    // var lcm = a.every((i)=>count%i==0)
    if(lcm.length == a.length){
        console.log(count);
        break
    }
    count++
}

a = [160,275]
a = [1,2,3,4]
var count = 1
var maxi_ele = Math.max(...a)
while (true){
    var values_check = count * maxi_ele
    var lcm = a.every((i)=>values_check%i==0)
    if(lcm){
        console.log(values_check);
        break
    }
    count++
}

// 5. a = [1,1,1,1,1,32,2,2,2,3,32,3,32,3,3,3,2,2,2,1,1,1,1,51,51,51,51,2,1,2,1,2,212,212,212]
// part - 1 
// a. the element is 3 and count is 10
// b. the element is 212 and count is 3
// part-2
// if the element count is common:
//     1. for max-elemnt:
//         maxele in that common count 
//     1. for min-elemnt:
//         minele in that common count


a = [1,1,1,1,1,32,2,2,2,3,32,3,32,3,3,3,2,2,2,1,1,1,1,51,51,51,51,2,1,2,1,2,212,212,212]
b = {}
for(let i of a){
    var v = a.filter((x)=>x==i).length
    b[i] = v
}
console.log(b);
var maxi = 0
var mini =  Number.MAX_VALUE
var mini =  100
for(let i of Object.keys(b)){
    if (b[i] > maxi){
        maxi = b[i]
        var maxi_ele = i
    }
    if (b[i] < mini){
        mini = b[i]
        var mini_ele = i
    }
}
console.log('min count',maxi);
console.log('min element',maxi_ele);
console.log('*'.repeat(10));
console.log('min element',mini_ele);
console.log('min count',mini);


a = [1,2,3,4]

a = [1,2,3,4,56,4,854,2]
check = Number.MIN_VALUE
for(let i of a){
    if (i > check){
        check = i
    }
}
console.log(check);



// 9. a = [1,1,1,1,1,32,2,2,2,3,32,3,32,3,3,3,2,2,2,1,1,1,1,51,51,51,51,2,1,2,1,2,212,212,212]

// maxi continuous repeated elele and its count:
// mini continuous repeated elele and its count: