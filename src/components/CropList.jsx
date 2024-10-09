
function CropList({ crops }) {
    return (
      <div>
        <h2>Your Listed Crops</h2>
        {crops.length === 0 ? (
          <p>No crops added yet.</p>
        ) : (
          <ul>
            {crops.map((crop, index) => (
              <li key={index}>
                {crop.name} - {crop.quantity} kg @ ₹{crop.price}/kg
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default CropList;
  