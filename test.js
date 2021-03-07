let people = [
   Oleg = {
   name: "Oleg",
   lastname: "Pavlov",
   age: 28,
   },
   Ibrahima = {
      name: "Ibrahima",
      lastname: "Balde",
      age: 20,
   },
   Darell = {
      name: "Darell",
      lastname: "Tokpa",
      age: 19,
   },
]
let personInfo = (person) => console.log(person.name + " " + person.lastname + " " + person.age + " years old")
for (let i = 0; i < people.length; i++){
   if (people[i].age < 20) {
      personInfo(people[i]);
   }
}
