const createUsernames = users => {
    const currentYear = new Date().getFullYear()
    users.map((user) => user.username = user.firstName.toLowerCase() + user.lastName.slice(0,1).toLowerCase() + (currentYear - user.age))
    return users
};

// const data = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
//
// const processedData = createUsernames(data);
// console.log(processedData); //
// [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];