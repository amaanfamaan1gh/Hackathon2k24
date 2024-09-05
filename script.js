let order = [];
let totalPrice = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    totalPrice += price;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    
    orderList.innerHTML = '';
    order.forEach(orderItem => {
        const listItem = document.createElement('li');
        listItem.textContent = ${orderItem.item} - $${orderItem.price};
        orderList.appendChild(listItem);
    });
    
    totalPriceElement.textContent = Total: $${totalPrice};
}

function placeOrder() {
    if (order.length === 0) {
        alert('Your order is empty!');
        return;
    }
    
    alert(Order placed! Total price: $${totalPrice});
    order = [];
    totalPrice = 0;
    updateOrderSummary();
}