const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 120000 },
        { id: 2, name: 'Fred', salary: 110000 },
        { id: 3, name: 'Bob', salary: 80000 },
    ],

    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },

    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve) => {
            this._employees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            resolve(this._employees.find(({ id }) => id === employeeId));
        });
    },

    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },

    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
};

function increaseSalary() {
    return new Promise((resolve) => {
        api.getEmployees()
            .then((employees) => employees.reduce((acc, employee) => employee.salary < acc.salary ? employee : acc))
            .then((employee) => api.setEmployeeSalary(employee.id, employee.salary * 1.2))
            .catch((error) => !api.notifyAdmin(error))
            .then((employee) => employee ? resolve(api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`)) : resolve(employee))
    })
}

// increaseSalary()

// Получает данные по всем работникам
// Находит работника с наименьшей зарплатой
// Отправляет запрос на повышение зарплаты этому сотруднику на 20%
// Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
// Если запрос завершился неудачей - отправить данные об ошибке администратору

// api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
// api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
// api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
// api.notifyAdmin(error); // Принимает ошибку
