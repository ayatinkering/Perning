//client side
console.log('hi');

//var- globally scoped, causes conflicts DONT USE anymore
let age=30; const pi=30; //cant be changed, use unless u need to reassgin
age=31;

//object 
const person={
    firstName: 'jon',
    lastName:'doe',
    age:30,
    hobbies:['music','movies']
}
console.log(person.hobbies[1]);

//ARRAY OF OBJECTS (syntax similar to JSON, but json has " " around everything "id":"1")
const todos=[
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'meeting boss',
        isCompleted:false
    }
];

//JSON - fromat used to pass data in APIs
const todosJSON=JSON.stringify(todos);
console.log(todosJSON);

//FOREACH
todos.forEach(function(todo){
    console.log(todos.text);
});

const nums=[1,2,3,4];
//MAP - transform every item, return new array
const doubled = nums.map(
    (num) => num * 2 //ARROW FUNCTION
);
console.log(doubled)

let todoText=todos.map(
    function(todo){
    return todo.text; 
}); //maps into new array
console.log(todoText);


//FILTER - keep only items that pass the test
const evenNumbers = nums.filter(
    (num) => {num % 2 === 0
});

todoText=todos.filter(
    function(todo){
    return todo.isCompleted===true; //=== used to match DATA TYPE ALSO, == returns true for diff types
}).map(function(todo){
    return todo.text
}); //passes values from filter into new array by MAP
console.log(todoText); //prints ONLY completed ones

let num1=1; let num2=1;
function addNums(num1=1,num2=1){
    return num1+num2;
}
console.log(addNums(5,5));

const addArrow = (num1=1,num2=3) => {
    return num1+num2
};
console.log(addArrow());

function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear=function(){
        return this.dob.getFullYear();
    } //DONT WRITE FUNCTIONS OVER HERE, creates 1000 copies for 1000 ppl
}

//instead use PROTOTYPES to create functions only once
Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}
const person1=new Person('Mary','Jane','1-1-2020');
console.log(person1.lastName);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

class Human{
    constructor(name,dobb,etc){
        //making fucntions inside class is SAME as using PROTOTYPE
    }
}