import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { useState } from 'react';

const ExploreMenu = () =>{
    const [category, setCategory] = useState('All');
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore our Menu</h2>
        <p className='explore-menu-text'>The Explore Menu feature in a food ordering system serves as a gateway for users to browse a wide variety of culinary options available in their area. It provides a comprehensive and user-friendly interface where customers can explore different cuisines, dishes, and restaurant categories. The menu typically includes high-quality images, detailed descriptions, and customer reviews to help users make informed decisions. Additionally, filtering and search capabilities allow users to sort meals by dietary preferences, price range, or popularity. This feature enhances the overall customer experience by enabling seamless discovery and selection of food items, catering to diverse tastes and preferences.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>



                </div>
        
            )
        })}
      </div>
      <hr />
    </div>
  )
}


export default ExploreMenu