var addItemId = 0;
function addToCart (item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var price = document.createElement('span');
    price.innerText = item.children[1].innerText;
    var cartItems = document.getElementById('price');
    selectedItem.append(img);
    selectedItem.append(price);
    cartItems.append(selectedItem);

}