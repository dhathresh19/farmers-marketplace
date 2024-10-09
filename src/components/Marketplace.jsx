
function Marketplace({ crops }) {
    return (
      <div>
        <h2>Marketplace</h2>
        {crops.length === 0 ? (
          <p>No crops available.</p>
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
  
  export default Marketplace;
  