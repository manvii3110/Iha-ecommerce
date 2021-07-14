import React from "react";
import ReactDOM from "react-dom";
import {MdFavoriteBorder} from 'react-icons/md'
import StarRating from './Rating'
require("./static/index.scss");

const Card_v = (props) => {
	return (
		<>
       <div className="cards p-10 w-72 ">
    <div className="rounded overflow-hidden bg-white shadow-md hover:shadow-lg cursor-pointer">
      <img className=" w-full h-48" src={props.img} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
        <p className="text-gray-700 text-base">
        <span>&#8377;{props.price}</span>
        </p>
        <StarRating />
      </div>
      <div className="px-11 pt-3 pb-4">
        <button type="button" className="transition duration-500 ease-in-out 
                       border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 rounded px-4 py-2 transform 
                       hover:-translate-y-1 hover:scale-110">Add to Cart</button>
      </div>
    </div>
    </div>
  
  </>
	);
};
const Card_h = (props) => {
	return(<>
		<div className="p-20">
	  <div className=" w-8/12 lg:max-w-8/12 lg:flex h-30 lg:h-auto shadow-md hover:shadow-lg cursor-pointer">
		<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
		<img className="w-full" src={props.img} alt="Mountain"/>
		</div>
		<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
		  <div className="mb-3 flex">
			<div className="text-gray-900 font-bold text-xl mb-1">{props.title}</div>
			<div className="pl-96 pt-2 text-lg"><MdFavoriteBorder/></div>	
		  </div>
		  <p className="text-gray-700 text-base">{props.description}</p>
		  <div className="flex items-center mt-2">
			<div className="text-sm">
			
			  <p className="text-gray-900 leading-none">{props.price}</p>
			</div>
		  </div>
      <StarRating />
		  <div className="flex items-center">
			  <button type="button" className="transition duration-500 ease-in-out 
						 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 rounded px-4 py-2 transform 
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
    
    <div className=" lg:pl-32 xl-lg:32 sm:px-28 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-1 " >
			<Card_v 
      img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      title="Latest Product for Sell"
      description="Sweater Season • Cozy"
      price="29.95"
      /> 
      <Card_v
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Latest Product for Sell"
        description="Sweater Season • Cozy"
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
      <div className="container mx-auto my-auto justify-center content-center py-60 ">
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

