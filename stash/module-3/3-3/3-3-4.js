const { getUserInfo, getUsersIds } = db;

function getUsersInfo(onLoad) {
    getUsersIds((ids) => {
        if (ids.length === 0) {
            return onLoad([])
        }
        let usersInfo = new Array(ids.length)
        ids.forEach((id, index) => {
            getUserInfo(id, info => {
                usersInfo[index] = info
                if (index === ids.length - 1) {
                    onLoad(usersInfo)
                }
            })
        })
    })
}

// const users = [
//     {"lastName": "Ivanov", "name": "Pavel", "profession": "programmer"},
//     {"name": "Petr"},
//     {"city": "St. Petersburg", "name": "Lena"},
//     {"age": 25, "hobbys": ["traveling", "macrame"], "name": "Olesya"},
//     {"name": "Egor"}
// ]
//
// getUsersIds((ids) => {
//     console.log(ids); // ['id2', 'id6']
// });
//
// getUserInfo('someUserId', (userInfo) => {
//     console.log(userInfo); // { name: 'Alex', age: 70 }
// });
//
// getUsersInfo((users) => {
//     console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
// });


