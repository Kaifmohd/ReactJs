import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

    //Local State variable - Super powerful variable
    const [listOfRestaurants,setListOfRestaurant] = useState([]);

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        console.log(json)
        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={ ()=> {
                    
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4
                        );
                    setListOfRestaurant(filteredList);   
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) =>
                 (
                 <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                 ))}
                
            </div>
        </div>
    )
}

export default Body;