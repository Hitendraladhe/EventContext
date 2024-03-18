import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Navbar from '../Navbar';
import Blog from '../Blog';
import { useFormData } from '../../context';

const Home = () => {
  const { formData , sorted} = useFormData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(formData);
    
  }, [formData]);
  const userData = localStorage.setItem("usersData", JSON.stringify(formData));

  const blogList = Object.values(sorted ?sorted : formData).map((each) => (
    <Blog key={each.UserId} userD={each} />
  ));
  console.log(sorted);
  return (
    <div className='container'>
      <Navbar />
      <div className="con">
        <h2>Likes</h2>
        
        {blogList}
      </div>
    </div>
  );
};

export default Home;
