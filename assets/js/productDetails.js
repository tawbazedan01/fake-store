 const getproductDetails = async ()=>{
    const params = new URLSearchParams(window.location.search)
    const productId = params.get('product');
    const {data} = await axios.get(`https://dummyjson.com/products/${productId}`);
    return data; 
} 
const displaygetproductDetails = async ()=>{
    const data = await getproductDetails();
    const result = `
         <div class="details">
           <img src="${data.thumbnail}" alt="${data.description}" />
           <h3> ${data.title}</h3>
           <h4> ${data.price} </h4>
           <h5> ${data.brand}</h5>
           <span>${data.rating}</span>
        </div>
        `;
    document.querySelector(".product-details .row").innerHTML=result;
}; 
    displaygetproductDetails();