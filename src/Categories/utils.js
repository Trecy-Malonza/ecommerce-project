const baseurl =process.env.REACT_APP_BASE_URL;
console.log({baseurl});

export const getCategories =async() =>{
    try{
        const response = await fetch (`${baseurl}/auth/categories`,)
        const data = await response.json();
        return data
       
        
        }
        catch(error){
            throw new Error(error.message)
        }
    }












        