import React, { useRef, useState } from 'react';
import "../css/sidebar.css";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import "../css/createcourse.css";
import axios from "axios";

const Sidebar = () => {
  const [hidshow, sethidshow] = useState(false);
  const coursedomain = useRef('');
  const coursetitle = useRef('');
  const coursedesc = useRef('');
  const courseimg = useRef('');
  const coursecost = useRef('');
  const courselink = useRef('');

  const opencreatebox = ()=>{
    sethidshow(true);
  }
  const Createcourse = (title,domain,desc,cost,imgbanner,link)=>{
    axios.post('http://localhost:8000/courses', {
        "courseTitle": title.current.value,
        "courseDescription": desc.current.value,
        "courseBanner": imgbanner.current.value,
        "courseDomain": domain.current.value,
        "courseLink": link.current.value,
        "courseCost": cost.current.value,
    })
    .then(response => {
        console.log('Course added:', response.data);
        title.current.value="";
        desc.current.value="";
        imgbanner.current.value="";
        domain.current.value="";
        link.current.value="";
        cost.current.value="";
    })
    .catch(error => {
        console.error('Error in adding Course:', error);
    });
  }


  return (
    <div className='sidebar'>
      <div className="items">
         <button className='createcourse' onClick={()=>{opencreatebox()}}>
          <FaPlus className='plusicon'/>
          Create Courses
         </button>
         <p>Home</p>
         <Link to="/" className='links'><p>Logout</p></Link>
      </div>
      <div className={(hidshow)?"createcourcont":"createcourcont hidden"}>
        <div className="createcourse" onClick={()=>{sethidshow(false)}}></div>
        <div className='createcoursebox'>
          <h3>Create Courses</h3>
          <div className="courseboxcont">
              <div className="topinputs">
                <div className="input1">
                  <label>Title | <span>Required</span> </label>
                  <input type="text" ref={coursetitle}/>
                </div>
                <div className="input1">
                <label>Domain | <span>Required</span></label>
                <input type="text" ref={coursedomain}/>
                </div>
              </div>
              <div className="topinputs">
                <div className="input1">
                <label>Banner | <span>Required</span> </label>
                <input type="file" ref={courseimg}/>
                </div>
                <div className="input1">
                  <label>Cost | <span>Required</span> </label>
                  <input type="text" ref={coursecost}/>
                </div>
              </div>

              <div className='textbox'>
                <label>Course link | <span>Required</span> </label>
                <input type="text" ref={courselink}/>
              </div>

              <div className='textbox'>
                <label>Description | <span>Required</span> </label>
                <textarea rows="5" ref={coursedesc}></textarea>
              </div>    
          </div>
          <div className="buttons">
            <button  className='submission' onClick={()=>{Createcourse(coursetitle,coursedomain,coursedesc,coursecost,courseimg,courselink)}}>submit</button>
            <button className='closebtn' onClick={()=>{sethidshow(false)}}>close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar