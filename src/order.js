
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

function searchOrder(deliveryOrdersArray, item) {
  for (var i = 0; i < deliveryOrdersArray.length; i++) {
    return deliveryOrdersArray[i].item.includes(item)
  }
}

// What am I doing: Searching an array of order objects to determine
//if a given string matches the string for item name

//loop through Array & stop at end of Array
//access name values and store in an empty string
//use IF statement to check items in string & if there return boolean of true
//if it's not there, return boolean of false

//What I've tried:
  //var emptyOrderString = ''  //created empty string
  //var emptyOrderArray = []
  //for (var i = 0; i < isOrderListedArray.length; i++) {  //looping through deliveryOrders Array
//check if my array includes my item passed in
  //  emptyOrderArray += (isOrderListedArray[i].item)     //adding object items to emptyOrderString
//  }
  //console.log(emptyOrderString)
//  return emptyOrderArray
//}
    //emptyOrderString.includes(isOrderListedArray.item
  //if (isOrderListedArray[i] === emptyOrderString) {
  //return true}
  //return emptyOrderString


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
