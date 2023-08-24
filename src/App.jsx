import React, { useState } from 'react';
import CardList from './components/Form/CardList';
import './app.module.css';

function App() {
  const [colorList, setColorList] = useState([]);
  const [colorName, setColorName] = useState('');
  const [colorHexa, setColorHexa] = useState('');
  const [colorNameError, setColorNameError] = useState('');
  const [colorHexaError, setColorHexaError] = useState('');

  const handleColorSubmit = (event) => {
    event.preventDefault();
  
    setColorNameError('');
    setColorHexaError('');

    if (colorName.trim() === '' || colorHexa.trim() === '') {
      setColorNameError('A cor e o nome são obrigatórios.');
      return;
    }
  
    if (colorName.startsWith(' ')) {
      setColorNameError("A cor não deve começar com um espaço");
      return;
    }

    if (colorName.trim().length < 3) {
      setColorNameError('O nome da cor deve ter ao menos 3 caracteres.');
      return;
    }

    if (colorHexa.trim().length < 7) {
      setColorNameError('O código da cor deve ter ao menos 7 caracteres contando com #.');
      return;
    }
  
    const newColor = { name: colorName, hexa: colorHexa, isAdded: false };
    setColorList((oldColorList) => [...oldColorList, newColor]);
    setColorName('');
    setColorHexa('');
  };
  

  return (
    <main className="main">
      <form className="FormContainer" onSubmit={handleColorSubmit}>
        <h3>Add uma cor na lista</h3>
        <input
          type="text"
          name="colorName"
          id="colorName"
          placeholder="Type the color name"
          onChange={(event) => setColorName(event.target.value)}
          value={colorName}
        />
               {colorNameError && <span className="error">{colorNameError}</span>}

        <input
          type="text"
          name="colorHexa"
          id="colorHexa"
          placeholder="Type the color in hexadecimal"
          onChange={(event) => setColorHexa(event.target.value)}
          value={colorHexa}
        />
               {colorHexaError && <span className="error">{colorHexaError}</span>}

               <button type="submit" disabled={!colorName || !colorHexa}>
    Add
  </button>
      </form>
      <section className="listSection">
        <h3>Minha lista de cores</h3>
        <div className="listContainer">
          <ul>
            <CardList colors={colorList} />
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
