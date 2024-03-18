import './index.css'

const cities = [
    {
        name: "washington",
        add: "34 subway london",
        img: "https://www.shutterstock.com/shutterstock/photos/1455972629/display_1500/stock-vector-indian-city-icon-bangalore-vidhan-soudha-karnataka-minimal-vector-illustration-linear-style-1455972629.jpg",
    },
    {
        name: "washington",
        add: "34 subway london",
        img: "https://www.shutterstock.com/shutterstock/photos/1573118746/display_1500/stock-vector-indian-city-icon-kanpur-jk-temple-uttar-pradesh-minimal-vector-illustration-linear-style-1573118746.jpg",
    },
    {
        name: "washington",
        add: "34 subway london",
        img: "https://www.shutterstock.com/shutterstock/photos/1485989381/display_1500/stock-vector-indian-city-icon-chhattisgarh-lakshman-temple-mahasamund-minimal-vector-illustration-linear-1485989381.jpg",
    },{
        name: "washington",
        add: "34 subway london",
        img: "https://www.shutterstock.com/shutterstock/photos/1192979419/display_1500/stock-vector-kalasan-temple-landmark-icon-outline-1192979419.jpg",
    }


]

const Footer =()=>(
    <div className='bg-main'>
    <h1>Want to meet</h1>
        <p className='touch'>Get In Touch Now </p>
    <footer>
        <div className='footer'>
        <div className='first-con'>
         <div className='input-con'>
           <label htmlFor='searcha'>Subscribe to our newsletter</label>
           <input id='searcha' type='search' className='input-footer'/>
          <button className='subscribe'>subscribe</button>
          </div>
          <div>
          <p className='icon-con'>connect with us</p>
          <div className='icon-con'>
          <p className='fa'>f</p>
          <p className='in'>in</p>
          </div>
          </div>
          <h3>Taskeater</h3>
          </div>
          <div className='cart-cities'>
           {cities.map(each=>(
             <div className='carta'>
                <img src={each.img} className='imglogociti' alt='img'/>
                <p>{each.name}</p>
                <p>{each.add}</p>
             </div>
           ))}
           </div>
           <hr/>
           <div className='bottom'>
             <p>CopyRight 2022 @ hostpital</p>
             <p>Privacy Policy</p>
             <p className='term'>Term of use</p>
           </div>
        </div>
    </footer>
    </div>
)

export default Footer