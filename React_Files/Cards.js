import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {MdFavoriteBorder} from 'react-icons/md'
import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
//import manImg from '../media/userImage/man.jpg';
import {FaStar} from 'react-icons/fa'
import {FaEllipsisH} from 'react-icons/fa'
import {FaEllipsisV} from 'react-icons/fa'

require("./static/index.scss");

export const StarRating=()=>{
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
export const MenuV=()=>{

  return (
      <>
    <div className="w-56 text-right fixed top-1">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="w-2/6 px-1 py-1 text-md font-medium text-black hover:focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FaEllipsisV className="ml-44 mt-4 text-3xl top-1 left-3" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-44 mt-2 mr-4 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-50 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-10 py-2 text-md`}
                  >
                    
                    Favourite
                  </button>
                )}
              </Menu.Item>
              
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-50 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-7 py-2 text-md`}
                  >
                    
                    Not Interested
                  </button>
                )}
              </Menu.Item>
              
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>
  );
    }


export const MenuH=()=>{
  return (
    <>
    <div className="w-36 text-left">
      <Menu as="div" className="block text-left w-36">
        <div>
          <Menu.Button className="w-2/6 px-1 py-1 text-md font-medium text-black hover:focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FaEllipsisH className="ml-72 top-1 text-4xl" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute ml-16 right-16 w-44 mt-1 mr-1 bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-50 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-10 py-2 text-md`}
                  >
                    
                    Favourite
                  </button>
                )}
              </Menu.Item>
              
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-blue-50 text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-7 py-2 text-md`}
                  >
                    
                    Not Interested
                  </button>
                )}
              </Menu.Item>
              
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  </>
  );
    }
const Card_v = (props) => {
	return (
		<>
       <div className="p-10 sm:p-10 w-72 h-5/6">
    <div className=" border-r border-b border-l border-t border-gray-300 rounded-xl  lg:w-56 overflow bg-white transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-200 bg-transparent    cursor-pointer">
      <div className="rounded-t-xl">
      
    <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
      
      alt="man" 
      className="w-full h-full relative rounded-t-xl" />
        <MenuV/>    
      </div>
      
      <div className="px-6 py-1">
        <div className="font-semibold text-xl mb-1 lg:text-2xl h-24">{props.title}</div>
        <div className="mb-2">
          <div className="flex flex-wrap my-1">
          <StarRating/>
        </div>
        <p className=" mb-1">
        <span className="text-gray-600 font-semibold text-2xl">&#8377;2000</span>
        <span className="text-gray-500 font-light text-sm mx-0.5 align-text-bottom line-through">&#8377;4000</span>
        </p>
        
        </div>
        
      </div>
      
            <div className="px-7 mb-3 align-left text-4xl"><MdFavoriteBorder/></div>
        
      </div>
    </div>

  
  </>
	);
};
const Card_h = (props) => {
	return(
  <>
      <div className="p-2  h-auto ">
    <div className=" border-r border-b border-l border-t border-gray-300 w-8/12 lg:max-w-8/12 lg:flex  h-auto lg:h-auto rounded-2xl transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-200  cursor-pointer ">
      <div className="h-auto lg:h-auto lg:w-52 flex-none bg-cover rounded-xl rounded-r-sm text-center overflow-hidden"> 
      <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
      
      alt="man" 
      className="w-full h-full"/>

      </div>
      <div className=" lg:border-l-0 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal "> 
      
        <div className=" items-center mt-0 mb-0">
        <div className="flex items-stretch">
        <div className="text-black-900 font-semibold text-xl mb-0 lg:text-3xl  mx-3">{props.title}</div>
        <MenuH/>
        </div>
           
        
        <div className="flex flex-wrap mt-7 mx-2">
          <StarRating/>
        </div>
        
        <p className=" mb-1 mx-2">
        <span className="text-gray-600 font-semibold text-2xl">&#8377;2000</span>
        <span className="text-gray-500 font-light text-sm mx-0.5 align-text-bottom line-through">&#8377;4000</span>
        
        </p>
        <MdFavoriteBorder className=" m-3 text-4xl "/>
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
      
      price="29.95"
      /> 
      <Card_v
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Latest Product for Sell"
    
        price="29.95"
      />
      <Card_v
        img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        title="Latest Product for Sell"
        
        price="24.99"
      />
      <Card_v
        img="https://images.unsplash.com/photo-1569235080412-01b4eefa5fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="Latest Product for Sell"
        
        price="19.95"
      />
      </div>
      <div className="container mx-auto my-auto justify-center content-center py-40 px-20 h-full">
      <Card_h
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Latest Product for Sell"
        
        price="$200.00"
      />  
      
    </div>
		</div>
	);
};

ReactDOM.render(<Cards />, document.getElementById("root"));

      