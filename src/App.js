import logo from './logo.svg';
import './App.css';
import Traffic from './components/Traffic';
import { useState } from 'react';

function App() {
  const [active ,setActive] = useState(false);
  let colors = [
    {
      id: 1,
      color: '#ff0000',
    },
    {
      id: 2,
      color: '#ffff00',
    },
    {
      id: 3,
      color: '#0eb10e',
    }

  ]
  return (
    <div className='centerNew'>
      <div className="container centerTraffic">
        <div className='row'>
          {colors.map((item, index) => {
            return <div className='col-4' key={index}>
              <Traffic fondo={item.color} fondoId={item.id} fondoActive={active===item.id} onClick={() => setActive(item.id)}/>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
