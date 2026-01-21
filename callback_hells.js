function getUser(callback){
    const user={
        id:12,
        name:"kedar"
    }
    callback(user)
}

function getOrders(userId,callback){
    const orders=[
        { id:11 },
        { id:12 },
        { id:13 }
    ]
    callback(orders)
}

function getOrderDetails(orderId,callback){
    const details=[
        {
            product:"laptop",
            price:45000
        },
        {
            product:"mouse",
            price:500
        }
    ]
    callback(details)
}
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[2].id, function (details) {
      console.log(details);
    });
  });
});

// solutioon promise

function getUser() {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, name: "John" });
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    resolve([{ id: 101 }, { id: 102 }]);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    resolve({ product: "Laptop", price: 1000 });
  });
}

getUser()
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => console.log(details))
  .catch(err => console.error(err));
