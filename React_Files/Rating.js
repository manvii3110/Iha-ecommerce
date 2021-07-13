import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating=()=>{
    const [rating,setRating]=useState(null);
    const [hover,setHover]=useState(null);
    return(
        <div className="flex mt-1 mb-2">
            {[...Array(5)].map((star,i)=>{
                const ratingValue=i+1;
                return(
                    <label>
                        <input type="radio" name="rating"
                        className="invisible"
                         value={ratingValue} 
                         onClick={()=>setRating(ratingValue)}
                         
                         
                         />   
                            <FaStar className="cursor-pointer transition duration-200  color"
                             color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"} 
                             size={17}
                             onMouseEnter={()=>setHover(ratingValue)}
                         onMouseLeave={()=>setHover(null)}/>
                    </label>
                );
            })}
            </div>
    );
};
export default StarRating;