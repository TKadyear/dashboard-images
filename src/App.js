import './App.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { createApi } from 'unsplash-js';
const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.ACCESS_KEY_UNSPLASH
});
function App() {
  const [image, setImage] = useState();
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <header className="App-header">

        <Button variant="contained">Hi {process.env.NOMBRE}</Button>
      </header>
    </div>
  );
}

export default App;
