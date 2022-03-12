import Inicio from './Inicio'
import Encabezado from './Encabezado';
import { Routes, Route} from 'react-router-dom'
import Contactos from './Contactos';
import Productos from './Productos';


function App() {
  // JSX: mezcla de HTML y JavaScript

  return (

    <div>
            <Encabezado />
            <Routes>
                 <Route path='/' element={<Inicio />} />
                 <Route path='/contacto' element={<Contactos />} />
                 <Route path='/productos' element={<Productos />} />
            </Routes>
          

    </div>

      
  );
}

export default App;
