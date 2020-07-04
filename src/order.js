
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrdersArray) {
  var indexToRemove; //declared but undefined
  for (var i = 0; i < deliveryOrdersArray.length; i++) {
    var currentOrder = deliveryOrdersArray[i];
    if (currentOrder.orderNumber === orderNumber) {
      indexToRemove = i;
    }
  }
  deliveryOrdersArray.splice(indexToRemove, 1);
}

// var keptOrders = [];
// for (var i = 0; i < deliveryOrdersArray.length; i++) {
//   var currentOrder = deliveryOrdersArray[i];
//   if (currentOrder.orderNumber != orderNumber) {
//     keptOrders.push(currentOrder) //push current order to kept orders
//   }
// }
// console.log(keptOrders)
//this for loop is the equivalent of a filter prototype method

//declare variable called indexToRemove & assign to null
//loop through deliveryOrdersArray
//if currentOrder.orderNumber === orderNumber then
//indextoRemove is reassigned to i

function listItems(deliveryOrderItemsArray) {
  var emptyString = ''
  //var emptyArray = []
  for (var i = 0; i < deliveryOrderItemsArray.length; i++) {
    emptyString += (deliveryOrderItemsArray[i].item)
    if (deliveryOrderItemsArray[i] != deliveryOrderItemsArray[deliveryOrderItemsArray.length-1]) {
      (emptyString += ", ");
    }
  }
  return emptyString
  //return emptyString //output: burgerblt sandwichrueben
                      //if use emptyString again, make sure to change var in loop
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
