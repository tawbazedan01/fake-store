const getCategories = async ()=>{
    const {data} = await axios.get(`https://dummyjson.com/products/category-list`);
    return data;
}
const displayCategories = async ()=>{
    const loader = document.querySelector(".loader-container");
    loader.classList.add("active");
    try{  const categories = await getCategories();
        const result = categories.map((category) =>{
            return `
            <div class="category">
            <h2> ${category}</h2>
            <a href="categoryDetails.html?category=${category}">Details</a>
            </div>
            `
        }
        ).join('');
        document.querySelector(".categories .row").innerHTML=result;
    }catch(error){
        document.querySelector(".categories .row").innerHTML="<p> error loading Categories </p>";
    }finally{
        loader.classList.remove("active");
    }
}

const getProducts = async()=>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    return data;
}
const displayProducts = async()=>{
    const loader = document.querySelector(".loader-container");
    loader.classList.add("active");
    try{
    const data = await getProducts();
    const result = data.products.map( (product)=>{
        return `
        <div class="product">
           <img src="${product.thumbnail}" alt="${product.description}" />
           <h3> ${product.title}</h3>
        </div>
    ` 
    }
).join('');
   document.querySelector(".products .row").innerHTML=result;
}catch(error){
    document.querySelector(".products .row").innerHTML="<p> error loading products </p>";
}finally{
    loader.classList.remove("active");
}
}
displayCategories();
displayProducts(); 

window.onscroll = function(){
    const nav = document.querySelector(".header");
    const categories = document.querySelector(".categories")
    console.log(categories.offsetTop);
    console.log(window.scrollY);
    if(window.scrollY > categories.offsetTop){
        nav.classList.add("scrollNavbar");}
    else{
        nav.classList.remove("scrollNavbar");}
} 