var firstName = "Marcin";
var secondName = "Krzysztof";
var sureName = "Bonka";


console.log(
  `Hello, my full name is ${firstName} ${secondName} ${sureName}. What do you think?`
);
console.log(`Dodatkowe info tak dla przetestowania kolejnego commita`);


/* W ramach zad dom lekcja 5 */
/* sposób 1 */
const displayNameAge = (myName, myAge) => {
  console.log(`Podano w postaci argumentów funkcji:  imię ${myName} oraz wiek ${myAge}`);
  }

displayNameAge('Marcin', 43);


/* sposób 2 */
const Person = {
  Name: 'Unknown',
  Age: 0,
  /* Metoda ShowMe nie do końca jest taka jak oczekiwałem gdyż próbowałem wyświetlić wewnętrzne właściwości obiektu a nie to co podam w postaci argumentów */
  ShowMe: (Name, Age)=>{
    console.log(`A tutaj wywołanie wewnetrznej metody ${Name} oraz wiek ${Age}`);
  }
}

Person.Age = 10;
Person.Name = 'Bonio';

const displayNameAgeAsObject = (Person) => {
  console.log(`Przekazano obiekt a w nim imię ${Person.Name} oraz wiek ${Person.Age}`);
}
displayNameAgeAsObject(Person);


/* sposób 3 */
Person.ShowMe(Person.Name, Person.Age);








