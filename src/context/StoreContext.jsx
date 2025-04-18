import { createContext, useState, useEffect } from 'react';
import image1 from "../assets/food_1.png";
import image2 from "../assets/food_2.png";
import image3 from "../assets/food_3.png";
import image4 from "../assets/food_4.png";
import image5 from "../assets/food_5.png";
import image6 from "../assets/food_6.png";
import image7 from "../assets/food_7.png";
import image8 from "../assets/food_8.png";
import image9 from "../assets/food_9.png";
import image10 from "../assets/food_10.png";
import image11 from "../assets/food_11.png";
import image12 from "../assets/food_12.png";
import image13 from "../assets/food_13.png";
import image14 from "../assets/food_14.png";
import image15 from "../assets/food_15.png";
import image16 from "../assets/food_16.png";
import image17 from "../assets/food_17.png";
import image18 from "../assets/food_18.png";
import image19 from "../assets/food_19.png";
import image20 from "../assets/food_20.png";
import image21 from "../assets/food_21.png";
import image22 from "../assets/food_22.png";
import image23 from "../assets/food_23.png";
import image24 from "../assets/food_24.png";
import image25 from "../assets/food_25.png";
import image26 from "../assets/food_26.png";
import image27 from "../assets/food_27.png";
import image28 from "../assets/food_28.png";
import image29 from "../assets/food_29.png";
import image30 from "../assets/food_30.png";
import image31 from "../assets/food_31.png";
import image32 from "../assets/food_32.png";




export const StoreContext = createContext();



const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFood_list] = useState([]);

  const url = 'https://yourimageurl.com';


  const recommendationsFoodList= [
    
    {
      _id: "1",
      name: "Greek salad",
      image: image1,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad"
    },
    
    {
      _id: "2",
      name: "Veg salad",
      image: image2, 
      price: 18,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad"
    },
    {
      _id: "3",
      name: "Clover Salad",
      image: image3, 
      price: 16,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad"
    },
    {
      _id: "4",
      name: "Chicken Salad",
      image: image4, 
      price: 24,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad"
    },
    {
      _id: "5",
      name: "Lasagna Rolls",
      image:  image5, 
      price: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Rolls"
    },
    {
      _id: "6",
      name: "Peri Peri Rolls",
      image:  image6,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Rolls"
  }, {
      _id: "7",
      name: "Chicken Rolls",
      image:  image7,
      price: 20,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Rolls"
  }, {
      _id: "8",
      name: "Veg Rolls",
      image:  image8,
      price: 15,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Rolls"
  }, {
      _id: "9",
      name:  "Ripple Ice Cream",
      image: image9,
      price: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts"
  }, {
      _id: "10",
      name: "Fruit Ice Cream",
      image: image10,
      price: 22,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts"
  }, {
      _id: "11",
      name: "Jar Ice Cream",
      image: image11,
      price: 10,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts"
  }, {
      _id: "12",
      name: "Vanilla Ice Cream",
      image: image12,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts"
  },
  {
      _id: "13",
      name: "Chicken Sandwich",
      image: image13,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich"
  },
  {
      _id: "14",
      name: "Vegan Sandwich",
      image: image14,
      price: 18,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich"
  }, {
      _id: "15",
      name: "Grilled Sandwich",
      image: image15,
      price: 16,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich"
  }, {
      _id: "16",
      name: "Bread Sandwich",
      image: image16,
      price: 24,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich"
  }, {
      _id: "17",
      name: "Cup Cake",
      image: image17,
      price: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Cake"
  }, {
      _id: "18",
      name: "Vegan Cake",
      image: image18,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Cake"
  }, {
      _id: "19",
      name: "Butterscotch Cake",
      image: image19,
      price: 20,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Cake"
  }, {
      _id: "20",
      name: "Sliced Cake",
      image: image20,
      price: 15,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Cake"
  }, {
      _id: "21",
      name: "Garlic Mushroom ",
      image: image21,
      price: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pure Veg"
  }, {
      _id: "22",
      name: "Fried Cauliflower",
      image: image22,
      price: 22,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pure Veg"
  }, {
      _id: "23",
      name: "Mix Veg Pulao",
      image: image23,
      price: 10,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pure Veg"
  }, {
      _id: "24",
      name: "Rice Zucchini",
      image: image24,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pure Veg"
  },
  {
      _id: "25",
      name: "Cheese Pasta",
      image: image25,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pasta"
  },
  {
      _id: "26",
      name: "Tomato Pasta",
      image: image26,
      price: 18,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pasta"
  }, {
      _id: "27",
      name: "Creamy Pasta",
      image: image27,
      price: 16,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pasta"
  }, {
      _id: "28",
      name: "Chicken Pasta",
      image: image28,
      price: 24,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Pasta"
  }, {
      _id: "29",
      name: "Buttter Noodles",
      image: image29,
      price: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Noodles"
  }, {
      _id: "30",
      name: "Veg Noodles",
      image: image30,
      price: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Noodles"
  }, {
      _id: "31",
      name: "Somen Noodles",
      image: image31,
      price: 20,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Noodles"
  }, {
      _id: "32",
      name: "Cooked Noodles",
      image: image32,
      price: 15,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Noodles"
  }
    
  ];

  useEffect(() => {
    setFood_list(recommendationsFoodList);
  }, []);

  const updateCartQuantity = (id, quantity) => {
    setCartItems((prevCart) => {
      if (quantity === 0) {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
      return {
        ...prevCart,
        [id]: quantity,
      };
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const item = food_list.find((food) => food._id === id);
      return total + (item?.price || 0) * cartItems[id];
    }, 0);
  };

  return (
    <StoreContext.Provider value={{ cartItems, food_list, updateCartQuantity, removeFromCart, getTotalCartAmount, url }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;