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

    if (colorName.trim() === '' || colorHexa.trim() === '') {
      setColorNameError('O nome e o código da cor são obrigatórios.');
      return;
    }

    if (colorName.startsWith(' ')) {
      setColorNameError('O nome da cor não deve começar com um espaço.');
      return;
    }

    if (colorName.trim().length < 3) {
      setColorNameError('O nome da cor deve ter pelo menos 3 caracteres.');
      return;
    }

    if (colorHexa.trim().length < 7) {
      setColorHexaError('O código da cor deve ter pelo menos 7 caracteres contando com #.');
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
        <h3>Adicione uma cor à lista</h3>
        <p>Nome</p>
        <input
          type="text"
          name="colorName"
          id="colorName"
          placeholder="Digite o nome da cor"
          onChange={(event) => setColorName(event.target.value)}
          value={colorName}
        />
        <span className="error">{colorNameError}</span>

        <p>Cor</p>
        <input
          type="text"
          name="colorHexa"
          id="colorHexa"
          placeholder="Digite o código da cor em hexadecimal"
          onChange={(event) => setColorHexa(event.target.value)}
          value={colorHexa}
        />
        <span className="error">{colorHexaError}</span>

        <button type="submit" disabled={!colorName || !colorHexa}>
          Adicionar
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
