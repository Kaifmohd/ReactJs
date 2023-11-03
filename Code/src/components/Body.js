import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    //Local State variable - Super powerful variable
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
      
        //we can do Optional Chaining.
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>Look like you're offline!! Please check your internet connection.</h1>


    return listOfRestaurants.length === 0 ? ( 
    <Shimmer/> 
    ):(
        <div className="body">
            <div className="filter flex items-center ">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=>{
                        //Filter the restaruant cards and update the UI
                        console.log(searchText);
                        const filteredRestaurant =listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>

                </div>
                <div className="search m-4 p-4 ">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={ ()=> {
                    
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4
                        );
                    setListOfRestaurant(filteredList);   
                }}>Top Rated Restaurants
                </button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) =>
                 (
                 <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
                 ))}
                
            </div>
        </div>
    )
}

export default Body;