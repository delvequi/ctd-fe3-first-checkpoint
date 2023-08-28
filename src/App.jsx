// import React, { useState } from 'react';
// import CardList from './components/Form/CardList';
// import './app.module.css';

// function App() {
//   const [colorList, setColorList] = useState([]);
//   const [colorName, setColorName] = useState('');
//   const [colorHexa, setColorHexa] = useState('');
//   const [colorNameError, setColorNameError] = useState('');
//   const [colorHexaError, setColorHexaError] = useState('');

//   const handleColorSubmit = (event) => {
//     event.preventDefault();

//     if (colorName.trim() === '' || colorHexa.trim() === '') {
//       setColorNameError('O nome e o código da cor são obrigatórios.');
//       return;
//     }

//     if (colorName.startsWith(' ')) {
//       setColorNameError('O nome da cor não deve começar com um espaço.');
//       return;
//     }

//     if (colorName.trim().length < 3) {
//       setColorNameError('O nome da cor deve ter pelo menos 3 caracteres.');
//       return;
//     }

//     if (colorHexa.trim().length < 7) {
//       setColorHexaError('O código da cor deve ter pelo menos 7 caracteres contando com #.');
//       return;
//     }

//     const newColor = { name: colorName, hexa: colorHexa, isAdded: false };
//     setColorList((oldColorList) => [...oldColorList, newColor]);
//     setColorName('');
//     setColorHexa('');
//   };

//   return (
//     <main className="main">
//       <form className="FormContainer" onSubmit={handleColorSubmit}>
//         <h3>Adicione uma cor à lista</h3>
//         <p>Nome</p>
//         <input
//           type="text"
//           name="colorName"
//           id="colorName"
//           placeholder="Digite o nome da cor"
//           onChange={(event) => setColorName(event.target.value)}
//           value={colorName}
//         />
//         <span className="error">{colorNameError}</span>

//         <p>Cor</p>
//         <input
//           type="text"
//           name="colorHexa"
//           id="colorHexa"
//           placeholder="Digite o código da cor em hexadecimal"
//           onChange={(event) => setColorHexa(event.target.value)}
//           value={colorHexa}
//         />
//         <span className="error">{colorHexaError}</span>

//         <button type="submit" disabled={!colorName || !colorHexa}>
//           Adicionar
//         </button>
//       </form>
//       <section className="listSection">
//         <h3>Cores favoritas</h3>
//         <div className="listContainer">
//           <ul>
//             <CardList colors={colorList} />
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default App;
import React, { useState } from 'react';
import CardList from './components/Form/CardList';
import './app.module.css';

function App() {
  const [colorList, setColorList] = useState([]);
  const [colorName, setColorName] = useState('');
  const [colorHexa, setColorHexa] = useState('');
  const [colorNameError, setColorNameError] = useState('');
  const [colorHexaError, setColorHexaError] = useState('');

  const validateColorName = () => {
    if (colorName.trim() === '') {
      setColorNameError('O nome da cor é obrigatório.');
      return false;
    }

    if (colorName.startsWith(' ')) {
      setColorNameError('O nome da cor não deve começar com um espaço.');
      return false;
    }

    if (colorName.trim().length < 3) {
      setColorNameError('O nome da cor deve ter pelo menos 3 caracteres.');
      return false;
    }

    setColorNameError('');
    return true;
  };

  const validateColorHexa = () => {
    if (colorHexa.trim() === '') {
      setColorHexaError('O código da cor é obrigatório.');
      return false;
    }

    if (colorHexa.trim().length < 6) {
      setColorHexaError('O código da cor deve ter pelo menos 7 caracteres contando com #.');
      return false;
    }

    setColorHexaError('');
    return true;
  };

  const handleColorSubmit = (event) => {
    event.preventDefault();

    const isColorNameValid = validateColorName();
    const isColorHexaValid = validateColorHexa();

    if (isColorNameValid && isColorHexaValid) {
      const newColor = { name: colorName, hexa: colorHexa, isAdded: false };
      setColorList((oldColorList) => [...oldColorList, newColor]);
      setColorName('');
      setColorHexa('');
    }
  };

  return (
<main className="main">
  <form
    className={`FormContainer ${colorNameError || colorHexaError ? 'error' : ''}`}
    onSubmit={handleColorSubmit}
  >
    <h3>Adicione uma cor à lista</h3>
    <div className="input-group">
      <p>Nome</p>
      <input
        type="text"
        name="colorName"
        id="colorName"
        placeholder="Digite o nome da cor"
        onChange={(event) => {
          setColorName(event.target.value);
          validateColorName();
        }}
        value={colorName}
        className={colorNameError ? 'error' : colorName ? 'valid' : ''}
      />
      <span className={`error ${colorNameError ? 'active' : ''}`}>
        {colorNameError}
      </span>
    </div>
    <div className="input-group">
      <p>Cor</p>
      <input
        type="text"
        name="colorHexa"
        id="colorHexa"
        placeholder="Digite o código da cor em hexadecimal"
        onChange={(event) => {
          setColorHexa(event.target.value);
          validateColorHexa();
        }}
        value={colorHexa}
        className={colorHexaError ? 'error' : colorHexa ? 'valid' : ''}
      />
      <span className={`error ${colorHexaError ? 'active' : ''}`}>
        {colorHexaError}
      </span>
    </div>
    <div className="button-container">
      <button type="submit" disabled={!colorName || !colorHexa}>
        Adicionar
      </button>
    </div>
  </form>
<section className="listSection">
    <h3>Cores favoritas</h3>
    <div className="listContainer">
      <ul className="color-list">
        {colorList.map((color, index) => (
          <li key={index} className="color-item">
            <div
               className="color-card-container" style={{border: `6px solid ${color.hexa + '50'}`, 
               height: '8.0605rem', width: '19.09rem', borderRadius: '0.375rem',
                    }}>            
              <div
                className="color-card"
                style={{
                  width: '18.4375rem',
                  height: '8.0625rem',
                  flexShrink: 0,
                  borderRadius: '0.375rem',
                  marginBottom: '2rem',
                  border: `5px solid ${color.hexa + '33'}`,
                  background: `${color.hexa}`,
                  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', 
                }}
              >
                 <p style={{ color: 'white', textAlign: 'left' }}>{color.name}</p>
            <p className='hexa' style={{ color: 'white', textAlign: 'left' }}>{color.hexa}</p>
              </div>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
</main>





  );
}

export default App;
