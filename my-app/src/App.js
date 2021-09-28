import {React} from 'react';
import {Header} from './componentes/Header/index'
import {ProductosLista, roductosLista} from './componentes/Productos/index'


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductosLista/>
    </div>
  );
}

export default App;
