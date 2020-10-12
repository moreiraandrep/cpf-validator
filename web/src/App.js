import React from 'react';

function App() {
  return (
    <h1>Hello, World!</h1>
  );
}

export default App;


const text = `
- 58204-824
- 69337-978
- 69.938-863
- 72874988
`;
const regex = /(\d{2}[.]?\d{3})[-]?(\d{3})/gm; //CEP
           // /(\d{3}\.?\d{3}\.?\d{3}-?\d{2})/gm; //CPF
console.log(text.match(regex));
// [ '58204-824', '69337-978', '69.938-863', '72874988' ]