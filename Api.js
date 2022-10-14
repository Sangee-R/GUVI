// console.log('Magesh');

// labels_url
// events_url
// title
// login
// id
var a = [{
    "labels_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48902/labels{/name}",
    "events_url": "https://api.github.com/repos/pandas-dev/pandas/issues/48902/events",
    "html_url": "https://github.com/pandas-dev/pandas/pull/48902",
    "title": "DOC: Added mean function as method of Resampler and updated docstring",
    "user": {
      "login": "donghyyun",
      "id": 31753237,
      "following_url": "https://api.github.com/users/donghy"}}
  ]

// var response = new XMLHttpRequest()
// response.open('GET','https://api.github.com/repos/pandas-dev/pandas/issues')
// response.send()

// response.onload = function(){
//     var res = this.responseText
//     var out = JSON.parse(res)
//     console.log(out);
//     for(let i of out){
//         console.log(i.labels_url)
//         console.log(i.events_url);
//         console.log(i.title);
//         console.log(i.user.login);
//         console.log(i.user.id);
//         console.log('-'.repeat(50));

//         var data_to_added = `
//             <p>${i.labels_url}</p>
//             <p>${i.events_url}</p>
//             <p>${i.title}</p>
//             <p>${i.user.login}</p>
//             <p>${i.user.id}</p>
//             <p>-------------------</p>
//         `
//         var parent_variable = document.createElement('div')
//         parent_variable.innerHTML = data_to_added

//         var para1 = document.createElement('p')
//         var para2 = document.createElement('p')
//         var para3 = document.createElement('p3')
//         // var para1 = document.createElement('p1')
//         // var para1 = document.createElement('p1')
//         // var para1 = document.createElement('p1')
//         para1.innerText = i.labels_url
//         para2.innerText = i.events_url
//         para3.innerText = '--------------------------------'
//         parent_variable.append(para1)
//         parent_variable.append(para2)
//         parent_variable.append(para3)

//         document.body.append(parent_variable)
//         // console.log(parent_variable);
//         // break
//     }
// }




// 1. create  Element
// 2. to add source to that element
// 3. body append

// labels_url
// events_url
// login
// id

// GET
// POST
// PUT
// DELETE

console.log('fixed');
// var to_check_data = fetch('https://api.github.com/repos/pandas-dev/pandas/issues')
// .then((res)=>res.json())
//     .then((out)=>
//         { 
//         for (i=0;i<out.length;i++){
//             console.log(out[i].numbers);
//                 var data_to_added = `
//                     <p>${out[i].labels_url}</p>
//                     <p>${out[i].events_url}</p>
//                     <p>${out[i].title}</p>
//                     <p>${out[i].user.login}</p>
//                     <p>${out[i].user.id}</p>
//                     <p>-------------------</p>
//                 `
//                 var parent_variable = document.createElement('div')
//                 parent_variable.innerHTML = data_to_added
//                 document.body.append(parent_variable)
//                 console.log(parent_variable);
//                 break
//             }
//         }
//     )

// 1 (number) - user - url - followers_url - no of followers

// console.log('Magesh');

// var superone = async function(){
//     console.log('async');
//     return Promise.resolve()
// }
// superone()
// console.log('Magesh2');

// console.log('Magesh');

// var prom1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log('promise Initiated')
//         res()
//     },2000)
// })

// var prom = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log('promise created')
//         res()
//     },5000)
// })

// async function whete(){
//     console.log('Magesh');
//     console.log(prom);
//     var per = await prom1; 
//     console.log('Magesh2');
// }
// whete()

// Magesh
// 01_10_2022.js:129 Promise {<pending>
// 01_10_2022.js:134 Magesh2
// 01_10_2022.js:121 promise created
// 01_10_2022.js:131 Magesh 3


async function resData(url){
  var res = await fetch(url)
  console.log('will wait in fetch','Magesh');
  return res.json()
}

resData('https://api.github.com/repos/pandas-dev/pandas/issues')
.then((res)=>{
  resData(res[0].user.url)
  .then((res)=>{
      console.log(res['id']);
      console.log(res['followers_url']);
      resData(res['followers_url'])
      .then((res)=>{
          console.log(Object.keys(res))
      })
  })
  }
      )