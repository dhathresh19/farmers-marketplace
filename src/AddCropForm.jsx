import { useState } from 'react';

function AddCropForm({ addCrop }) {
  const [crop, setCrop] = useState({
    name: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    setCrop({
      ...crop,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCrop(crop);
    setCrop({ name: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sell Your Crop</h2>
      <div>
        <label>Crop Name</label>
        <input
          type="text"
          name="name"
          value={crop.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Quantity (kg)</label>
        <input
          type="number"
          name="quantity"
          value={crop.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price (per kg)</label>
        <input
          type="number"
          name="price"
          value={crop.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Crop</button>
    </form>
  );
}

export default AddCropForm;
