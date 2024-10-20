const createProduct = document.querySelector(".createProduct");

createProduct.onsubmit = async (e)=>{
    e.preventDefault();
    const  title = document.querySelector(".title").value;
    const  description = document.querySelector(".description").value;
    const{data} = await axios.post('https://dummyjson.com/products/add',{
        title,description
    });
    console.log(data);
} 