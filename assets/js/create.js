const createProduct = document.querySelector(".createProduct");

createProduct.onsubmit = async() =>{
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value; 
    const {data} = await axios.post('https://dummyjson.com/products/add',{
        title,description
    }); 
    console.log(data);
} 