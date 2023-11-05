fetch('https://course-api.com/react-store-products')
  .then(response => response.json())
  .then(data => {
    let products= new Array();
    products = data;
    products.forEach((item)=>{
     document.querySelector('#products').innerHTML += `
     <div id="product-${item.id}"  class="col-4 item">
                <div class="card">
                    <div class="card-header">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="card-body">
                        <img src="${item.image}" alt="" class="img-thumbnail">
                        <p>
                            <span>Company</span><span>${item.company}</span><br>
                            <span>Colors: </span><span style="width:20px; height:20px; background-color:${item.colors[0]}; display:inline-block"></span><span style="width:20px; height:20px; background-color:${item.colors[1]}; display:inline-block"></span><span style="width:20px; height:20px; background-color:${item.colors[2]}; display:inline-block"></span><br>
                            <span>Price</span><span>${item.price} Ks</span>
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
     `
    })
  })
  .catch(error => {
    // handle any errors here
  });
