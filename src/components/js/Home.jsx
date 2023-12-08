import React from 'react';
import "../css/home.css";
import banner from "../assests/banner.jpg";

const Home = () => {
  const apis=[
   {
    "id":1,
    "name":"DSA Beginner to Hero",
    "banner":{banner},
    'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate pariatur soluta. Mollitia, consequatur delectus, tempore nesciunt esse soluta iste nisi cupiditate corrupti ex iure.",
    'cost':'$200'
   },
   {
    "id":2,
    "name":"Python Beginer to Advance",
    "banner":{banner},
    'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate pariatur soluta. Mollitia, consequatur delectus, tempore nesciunt esse soluta iste nisi cupiditate corrupti ex iure.",
    'cost':'$400'
   },
   {
    "id":3,
    "name":"Complete DataScience",
    "banner":{banner},
    'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate pariatur soluta. Mollitia, consequatur delectus, tempore nesciunt esse soluta iste nisi cupiditate corrupti ex iure.",
    'cost':'$250'
   },
   {
    "id":4,
    "name":"Learn Web3",
    "banner":{banner},
    'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate pariatur soluta. Mollitia, consequatur delectus, tempore nesciunt esse soluta iste nisi cupiditate corrupti ex iure.",
    'cost':'$1800'
   },
  ]
  return (
    <div className='Home'>
      <input type="text" placeholder='Search courses...' />
      <div className='coursecont'>
       {
        apis.map((data)=>{
          return(
            <div className='courseconts' key={data.id}>
              <img src={banner} alt="none" className='banner'/>
              <p className='title'>{data.name}</p>
              <p className='description'>{data.description}</p>
              <div className="costview">
                <p className='cost'>{data.cost}</p> 
                <button className='viewbtn'>view</button>
              </div>
            </div>
          )
        })
       } 
      </div>
    </div>
  )
}

export default Home