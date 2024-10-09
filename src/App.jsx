
import { useState } from 'react';
import AddCropForm from './components/AddCropForm';
import CropList from './components/CropList';
import Marketplace from './components/Marketplace';
import './App.css';

function App() {
  const [crops, setCrops] = useState([]);

  const addCrop = (newCrop) => {
    setCrops([...crops, newCrop]);
  };

  return (
    <div className="App">
      <h1>Farmers Marketplace</h1>
      <AddCropForm addCrop={addCrop} />
      <CropList crops={crops} />
      <Marketplace crops={crops} />
    </div>
  );
}

export default App;
