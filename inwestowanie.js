var firstName = "Marcin";
var secondName = "Krzysztof";
var sureName = "Bonka";

console.log(
  `Hello, my full name is ${firstName} ${secondName} ${sureName}. What do you think?`
);
console.log(`Dodatkowe info tak dla przetestowania kolejnego commita`);

const message=`To jest tekst wstawiony za pomocą JScriptu. 'Hello, my full name is ${firstName} ${secondName} ${sureName}. What do you think?'`;

const myXmlContent = document.querySelector('.investment-experience__box__content--akcgpw-js');
console.log(myXmlContent);
myXmlContent.innerHTML = message;