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

console.log(typeof(2));
console.log(typeof(2.15));
console.log(typeof('2.11'));

/* Obsługa buttona do modyfikacji nagłówka strony index */
const button = document.querySelector('.buttonClickMe__action--js');
button.addEventListener('click', (e) => {
  console.log(`button ${button.innerHTML} clicked `);
  console.log(`Now I'm changing the heading text`);
  const indexHeading = document.querySelector('.index__heading');
  indexHeading.innerHTML = 'A to jest now nagłówek';
  console.log(`A teraz zmienie kole tła dla nagłówka przez dodanie klasy w java script`);
  indexHeading.classList.toggle('index_heading--js');
});

/* Obsługa buttona "hamburger" (menu) */
const btnHamburger = document.querySelector('.btnHamburger--js');
btnHamburger.addEventListener('click',() => {
  const naviMenu = document.querySelector('.navi--js');
  naviMenu.classList.toggle('navi--open--js');
  const indexMain = document.querySelector('.index__main--js')
  if(naviMenu.classList.contains('navi--open--js'))
  {
    if(indexMain.classList.contains('main--shiftsmall--js'))
    {
      indexMain.classList.remove('main--shiftsmall--js');
      indexMain.classList.add('main--shiftlarge--js');
    }
  } else if(indexMain.classList.contains('main--shiftlarge--js'))
  {
    indexMain.classList.remove('main--shiftlarge--js');
    indexMain.classList.add('main--shiftsmall--js');
  }
});






