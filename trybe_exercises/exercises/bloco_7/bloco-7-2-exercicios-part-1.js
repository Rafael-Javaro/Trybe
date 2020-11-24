const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

customer.lastName = 'Faria';
customer.fullName = `${customer.firstName} ${customer.lastName}`;

const customer2 = {
firstName: 'Roberto',
age: 22,
job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer2[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer2.firstName} ${customer2.lastName}`;
customer2[newKey] = fullName;

console.log(customer);
console.log(customer2);