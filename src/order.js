
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}





module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
