import { FaHeart } from "react-icons/fa";
import { LuArrowUpFromLine } from "react-icons/lu";
import './index.css'

const Blog=(props)=>{
    const {userD} = props
    const {img, event_name, time, location, is_liked} = userD
    return(
        <div className='blogCon'>
              <img src={img} className='img' alt='img'/>
              <div className="text">
              <h1>Title: {event_name}</h1>
              <p>{time}</p>
              <p>{location}</p>
              </div>
              <LuArrowUpFromLine  className="icon"/>
              {is_liked=== true ? <FaHeart className="icon" style={{color: "Red"}}/>: <FaHeart className="icon"/>}
            </div>
    )
}

export default Blog