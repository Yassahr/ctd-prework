document.addEventListener("DOMContentLoaded",loadCatogories())
const category = document.querySelector('.grid-container')
category.addEventListener("click", storeValue)


//assign catergories to different options
async function loadCatogories(){
    try{
        document.querySelector('.loading').classList.add('loader')
        document.querySelector('.grid-container').style.visibility='hidden'
        const categories = await getCatergories()
        if(!categories){
            throw new Error('Issue loading categories')
        }

        //iterate through categories array and display names in html 
        categories.forEach((category,  index)=>{
            document.querySelector(`.category${index} h3`).innerHTML= capitializeFirstLetter(category.title)
            document.querySelector(`.category${index}`).value=category.title


        })
    }catch(err){
        console.log(`Error has occured at loadCatogories:: ${err}`)
    }finally{
         document.querySelector('.loading').classList.remove('loader')
         document.querySelector('.grid-container').style.visibility='visible'

    }
}



//fetch catergories from api
async function getCatergories(){
    //return top 6 catorgies in an array of objects
    try{    
        let response = await fetch(`https://api.artic.edu/api/v1/category-terms?limit=6`)
        if(!response){
            throw new Error('Issue loading categories')
        }
        response= await response.json()

        const catogories = response.data.map((category)=>{
            return {
                title: category.title,
                apiLink: category.api_link, 
                id: category.id,
                }
        })
        return catogories

    }catch(err){
        console.log(`Error occured while fetching categories:: ${err}`)
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

function storeValue(e){
    localStorage.removeItem('search')
    const search = e.target.value || e.target.innerHTML.toLowerCase()
    localStorage.setItem('search', search)
    console.log('local', localStorage.getItem('search'))
    
}