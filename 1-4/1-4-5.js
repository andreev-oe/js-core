const calculatePrice = (orders) => {
    return orders ? orders.reduce((acc, order) => acc + order.price, 0) : 0
};

// const data = [
//     {
//         type: 'food',
//         price: 130,
//     },
//     {
//         type: 'clothes',
//         price: 7300,
//     },
//     {
//         type: 'other',
//         price: 1400,
//     },
// ];
//
// calculatePrice(); // 8830
