// javascript vairables

var  fullname = 'Azina Dangol';
let address ='Kathmandu,Nepal';
const bloodGroup ='O+';

console.log('Full Name',fullname);
console.log('Address:',address);
console.log('Blood Group',bloodGroup);

//Data types

let name='Azina';                                  //string 
let age = 20;                                      //number
let isstudent = false;                             //boolean
let hobbies =['Dancing','Traveling','Writing'];    //Arrays

console.log(hobbies[0]);
let user ={
    name:'Azina',
    age:20,
    isstudent:false,
    hobbies:['Dancing','Traveling','Writing'],
};                                                   //Object

console.log(user['name']);
console.log(user.name);

//functions
function greet(name){
    console.log('Welcome',name);
}

greet('Azina');

//DOM manipulation

const headingElementById = document.getElementById('heading-2');
console.log('heading element by id',headingElementById);

const headingElementByQuery = document.querySelector('#heading-2');
console.log('heading element by query selector', headingElementByQuery);


headingElementByQuery.textContent ='Get element by query selector';
headingElementByQuery.style.color = 'blue';
const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', function (){
    alert('Button clicked');
    console.log('Button clicked');
});