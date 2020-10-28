//show cart
(function () {
    const cardInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cardInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    })
})();

//add items to the cart

(function () {

    const cardBtn = document.querySelectorAll('.store-item-icon')
    cardBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            //console.log(event.target);

            //if users click to icon
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath =
                    event.target.parentElement.previousElementSibling.src;

                //let pos = fullPath.indexOf('img')+3;
                //let parthPath = fullPath.slice(pos);

                const item = {};
                item.img = `${fullPath}`;

                let name = event.target.parentElement.parentElement.nextElementSibling.
                children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.
                children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();


                item.price = finalPrice;

                //console.log(item);
                //console.log(finalPrice);
                //console.log(price);
                //console.log(name);

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between',
                    'text-capitalize', 'my-3')
                cartItem.innerHTML =
                    `
                    <img src="${item.img}" class="img-fluid rounded-circle mr-4 pr-2 pl-2" id="item-img" alt="">
                    <div class="item-text">

                    <p id="cart-item-title" class="font-weight-bold mb-0 mr-4">${item.name}</p>
                    <span>€</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>`;

                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert("Item added to the cart!");

                showTotals();
                deleteProduct();
                clearCart();
            }

            // if users click to text
            if (event.target.classList.contains('store-item-icon')) {
                let fullPath =
                    event.target.previousElementSibling.src;

                //let pos = fullPath.indexOf('img')+3;
                //let parthPath = fullPath.slice(pos);

                const item = {};
                item.img = `${fullPath}`;

                let name = event.target.parentElement.nextElementSibling.
                children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.nextElementSibling.
                children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();

                //console.log(finalPrice);

                item.price = finalPrice;

                //console.log(item);
                //console.log(finalPrice);
                //console.log(price);
                //console.log(name);

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between',
                    'text-capitalize', 'my-3')
                cartItem.innerHTML =
                    `
                    <img src="${item.img}" class="img-fluid rounded-circle mr-4 pr-2 pl-2" id="item-img" alt="">
                    <div class="item-text">

                    <p id="cart-item-title" class="font-weight-bold mb-0 mr-4">${item.name}</p>
                    <span>€</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                    </a>
                </div>`;

                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert("Item added to the cart!");
                showTotals();
                deleteProduct();
                clearCart();

            }

        })
    })

    //show total
    function showTotals() {

        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        })

        //console.log(total);

        const totalMoney = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }

    /* when clicked the clear cart remove the  all items from cart */
    function clearCart() {
        let items = document.querySelectorAll('.cart-item');
        items.forEach(function (item) {
            const trash = document.getElementById('clear-cart');
            trash.addEventListener('click', function () {
                item.remove();
                document.getElementById('cart-total').textContent = 0;
                document.querySelector('.item-total').textContent = 0;
                document.getElementById('item-count').textContent = 0;
            });
        });
    };

    /* when clicked the trash icon remove the item from cart */
    function deleteProduct() {

        const elements = document.querySelectorAll('.cart-item');

        const garbage = document.querySelector('.fa-trash');
     
        elements.forEach(function(i){
            i.addEventListener('click',function(){
                    i.remove();
                    showTotals();
            })
        
        })

    }

    /*
        function deleteProduct() {

        const elements = document.querySelectorAll('.cart-item');

        const garbage = document.querySelector('.fa-trash');
     
        elements.forEach(function(i){
            i.addEventListener('click',function(){
                if( garbage.classList.contains('fa-trash')){
                    i.remove();
                    showTotals();
                }
            })
            
        })

    }

    */


})();