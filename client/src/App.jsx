import { useEffect, useState } from 'react'

import './App.css'
import Form from './form';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('./api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
   },[]);

  return (
    <>
      <div className="App">
        <Form />
    </div>
    </>
  )
}

export default App
