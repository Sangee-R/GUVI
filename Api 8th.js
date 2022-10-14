const YOUR_ACCESS_KEY = 'dIsJjPO1KAeOqH4AtLhOJE7zPJhxSAgjqQEiNWMqYUQ'

let page = 1
let unsplash_data = async ()=>{
    try{
        let api = `https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}&page=${page}&per_page=35&orientation='landscape'`
        let res = await fetch(
            api,
            {
                method: "GET",
                headers : {
                    'content-type' : 'application/json'
                }
            }
        )
        console.log(res);
        let data = await res.json()
        console.log(data);
        for(let i of data){
            let dataImageShow = i
            let imgae_create = document.createElement('img')
            imgae_create.setAttribute('class','magesh')
            imgae_create.src = dataImageShow.urls.thumb
            document.body.append(imgae_create)
        }
    }
    catch(err){
        console.log(err);
    }
}
unsplash_data()
.catch((err)=>{
    console.log(err);
})

window.addEventListener('scroll',()=>{
    if (window.innerHeight + window.scrollY > document.body.offsetHeight-200){
        console.log('scrolling');
        console.log(page);
        page++
        unsplash_data()
    }
})