import React from "react";
import ReactDOM from "react-dom";
import HoverImage from 'react-hover-image'
import {MdFavoriteBorder} from 'react-icons/md'
import StarRating from './Rating'
require("./static/index.scss");

const Card_v = (props) => {
	return (
		<>
       <div className="p-10 sm:p-10 w-72 h-5/6">
    <div className=" border-r border-b border-l border-t border-gray-300 rounded overflow-hidden bg-white hover:shadow-lg cursor-pointer">
    <HoverImage src="https://i.pinimg.com/originals/ce/f2/af/cef2aff2c24c8550f16fd42751a34978.jpg" 
      hoverSrc="https://www.irockbags.com/image/cache/data/4A/long-sleeves-solid-color-sweater-stylish-dress-for-women-pink-black-blue-white-2478-500x500.jpg"
      alt="sweater" 
      className="w-full h-full"/>
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-blue-700 text-base mt-2">
          {props.description}
        </p>
        <p className="text-gray-700 text-base mb-1">
        <span>&#8377;{props.price}</span>
        </p>
        <StarRating/>
      </div>
            <div className="px-11 pt-1 pb-2">
        <button type="button" className="transition duration-500 ease-in-out 
                       border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 rounded px-3 py-1 transform 
                       hover:-translate-y-1 hover:scale-110">Add to Cart</button>
      </div>
    </div>
    </div>
  
  
  </>
	);
};
const Card_h = (props) => {
	return(<>
		<div className="p-2  h-auto">
    <div className="  border-r border-b border-l border-t border-gray-300 w-10/12 lg:max-w-8/12 lg:flex h-auto lg:h-auto  hover:shadow-lg cursor-pointer">
      <div className="h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"> 
      <HoverImage src="https://i.pinimg.com/originals/ce/f2/af/cef2aff2c24c8550f16fd42751a34978.jpg" 
      hoverSrc="https://www.irockbags.com/image/cache/data/4A/long-sleeves-solid-color-sweater-stylish-dress-for-women-pink-black-blue-white-2478-500x500.jpg"
      alt="sweater" 
      className="w-full h-full"/>
      </div>
      <div className=" lg:border-l-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
        <div className="mb-0 flex">
          <div className="text-black-900 font-bold text-xl mb-0 sm:text-md">{props.title}</div>
          <div className=" ml-34 pl-96 pt-1 text-lg"><MdFavoriteBorder/></div>
          </div>
        <div className=" items-center mt-0 mb-0">
        <p className="text-gray-700 text-base mt-0">{props.description}</p>
        <StarRating/>
            <p className="text-blue-900  leading-none">{props.price}</p>
        </div>
        <div className="flex items-center mt-.5">
            <button type="button" className="transition duration-500 ease-in-out 
                       border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 rounded px-4 py-.5 mt-1 transform 
                       hover:-translate-y-1 hover:scale-110">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
	</>
  );
};
const Cards = () => {
	return (
		<div>
			These are cards
    
    <div className=" flex flex-wrap space-x-28" >
			<Card_v 
      img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      title="Latest Product for Sell"
      description="Sweater • Cozy"
      price="29.95"
      /> 
      <Card_v
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Latest Product for Sell"
        description="Sweater • Cozy"
        price="29.95"
      />
      <Card_v
        img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        title="Latest Product for Sell"
        description="Demin • Verstile"
        price="24.99"
      />
      <Card_v
        img="https://images.unsplash.com/photo-1569235080412-01b4eefa5fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="Latest Product for Sell"
        description="Blouse • Lacey"
        price="19.95"
      />
      </div>
      <div className="container mx-auto my-auto justify-center content-center py-40 px-20 h-full">
      <Card_h
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Latest Product for Sell"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eius ratione tempora eaque sequi modi ab, a porro 
        molestiae est qui sit cupiditate reiciendis animi nemo veniam repudiandae temporibus cum, nisi tenetur iure! Labore reiciendis."
        price="$200.00"
      />  
      
    </div>
		</div>
	);
};

ReactDOM.render(<Cards />, document.getElementById("root"));

