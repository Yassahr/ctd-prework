document.addEventListener("DOMContentLoaded",loadCatogories())



async function loadCatogories(){
    // document.querySelector('.loading').classList.add('loader')
    try{
        const categories = await getCatergories()
        console.log(categories)

        //iterate through categories array and display names in html 
        //add the name to the data type
        categories.forEach((category,  index)=>{
            document.querySelector(`.category${index} h3`).innerHTML= capitializeFirstLetter(category.title)

        })

    }catch(err){
        console.log(`Error has occured at loadCatogories:: ${err}`)
    }


    //get name and id from the catogories 
    //display name from catogories 
    //append background image to catogories 
}



//fetch catergories
async function getCatergories(){
    //return top 6 catorgies in an array of objects
    // include name, image, id 
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
