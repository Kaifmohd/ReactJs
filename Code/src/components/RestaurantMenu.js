import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const  {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0); //you can pass null

    if(resInfo === null) return <Shimmer/>;
    
    const { name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    


        return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/*Category Accordian*/}
            
            {categories.map((category,index)=> (
                //Controlled Component
            <RestaurantCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card} 
            showItems={index===showIndex && true}
            setShowIndex={()=> setShowIndex(index)}
            />
            ))}

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(
                    (item)=> (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs."}
                         {item.card.info.price/100}</li>
                         ))}
            </ul> */}
        </div>
    )
}
export default RestaurantMenu;