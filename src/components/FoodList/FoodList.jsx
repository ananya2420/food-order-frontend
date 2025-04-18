import { useContext } from 'react';
import { StoreContext } from './StoreContextProvider'; 
import { food_list } from '../../assets/assets';
const FoodList = () => {
  const { food_list } = useContext(StoreContext); 

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {food_list.map((food) => (
          <li key={food._id}>
            <img src={food_list} alt={food.name} width={100} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Price: ${food.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
