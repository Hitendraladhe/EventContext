import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './index.css'

const EditBlog =()=>{
  const navigate = useNavigate()
  const [blog, setBlog] = useState()
  const [data, setData] = useState()
  const users = {
    title: "",
    des: "kakaka",
    img: "hahahah"
  }

  const {id} = useParams()
  console.log(id);
  

  const onChangeHandle=(event)=>{
    const {name, value} = event.target
    setBlog({...blog, [name]: value})
    console.log(blog);
    
  }

  const onSubmitForm=async (e)=>{
    e.preventDefault()
    await fetch(`https://blogbackend-2.onrender.com/AllBlogs/edit/${id}`, {method: "POST", body: JSON.stringify(blog), headers:{'Content-Type': 'application/json'}});
    console.log(blog);
    navigate('/')
  }

    return(
      <>
       <div className='formContainer'>
         <form className='form' onSubmit={onSubmitForm}>
            <button className='back'><Link to={`/blog/:${id}`} style={{color: "White", textDecoration: "none"}}>Back</Link></button>
          <h4>Edit Blog</h4>
            <label htmlFor='title'>Title</label>
            <input className='input'  onChange={onChangeHandle} id='title' name="title" />
            <label htmlFor='des'>Description</label>
            <input className='input'  onChange={onChangeHandle} id='des'  name="des" />
            <label htmlFor='img'>Image</label>
            <input className='input' onChange={onChangeHandle} id='img'  name="img" />
            <button type='submit'>Submit</button>
         </form>
       </div>   
      </>
    )
}

export default EditBlog