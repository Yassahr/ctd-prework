
document.addEventListener("DOMContentLoaded",loadArtWork)

async function loadArtWork(e){
    try{    
     document.querySelector('.loading').classList.add('loader')

     let search = localStorage.getItem('search')

        //return array of associated art
     const artpieces = await fetchArtWork(search)
        //renaming header
     document.querySelector('h1').innerHTML = capitializeFirstLetter(search)
    //reassign value to DOM elements
     artpieces.forEach((artpiece, index)=>{
        const name = artpiece.name
        const img = artpiece.img
        const description = artpiece.description
        const artListElement = document.querySelector('.art').appendChild(document.createElement('li'))
        const image=document.createElement('img')
    
        artListElement.appendChild(document.createElement('h3')).innerHTML= capitializeFirstLetter(name)

       if( img == null){
        artListElement.appendChild((image)).src='../img/image-not-found.jpg'
       }else{
        artListElement.appendChild((image)).src= `https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`
        }
        const artDescription = artListElement.appendChild(document.createElement('p'))
        artDescription.classList.add('description')
        artDescription.innerText=description
    })
    }catch(err){
        throw new Error(`Error occured at loadArtWork:: ${err}`)
    }finally{
        document.querySelector('.loading').classList.remove('loader')
    }
}

//fetching artwork from the api
async function fetchArtWork(search){
    try{   
        if(!search){
            alert('Error Invalid Input')
            //redirect user to home
            window.location.href = "index.html"
        } 
        const pages= Math.floor(Math.random() * 400);
        let response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}?limit=10&from=${pages}&fields=image_id,title,thumbnail,id,score`)
        if(!response){
            throw new Error(`Response status: ${response}`)
        }
        response= await response.json()
        const artpieces = response.data.map((art)=>{
            return {
                name: art.title,
                img: art.image_id,
                description: art.thumbnail?.alt_text|| 'No desciption available',
                }
        })
        return artpieces
    }catch(err){
        console.log(`Error occured while fetching artwork:: ${err}`)
    }

}

function capitializeFirstLetter(title){
    return title
    .split(' ')
    .map((word)=>{
    return word[0].toUpperCase() + word.slice(1, word.length)
    })
    .join(' ')
 }

 

