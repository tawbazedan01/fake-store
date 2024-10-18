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
    if(window.scrollY > categories.offsetTop){
        nav.classList.add("scrollNavbar");}
    else{
        nav.classList.remove("scrollNavbar");}
} 

const countDown = ()=>{
    const countDownDate = new Date ("2025-03-01T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now ; 
    const days = Math.floor(distance/86400000);
    const hours = Math.floor((distance % 86400000)/3600000);
    const minutes = Math.floor((distance % (1000 * 60 * 60))/60000);
    const seconds = Math.floor((distance % (1000 * 60))/1000);
    document.querySelector("#days").textContent=days;
    document.querySelector("#hours").textContent=hours;
    document.querySelector("#minutes").textContent=minutes;
    document.querySelector("#seconds").textContent=seconds;
}

setInterval(()=>{
    countDown();
},1000)