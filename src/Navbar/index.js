import './index.css';
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

function Navbar (){
    return(
        <div>
    <div className='nav'>      
    <IoCart />
    <h6>Shopcart</h6>
    </div> 
    <ul id='navlist'>
    <li>Category</li>
     <li>Deals</li> 
     <li>What's New</li>
     <li>Delivery</li>
     <input placeholder="Search" type="text"/>
     <FaRegUser />
    <a>Account</a>
    <BsFillCartPlusFill />
     <a>Cart</a>
     </ul>
     <div id='homepage'>
        <h1>Shopping And</h1>
        <h1>Department Store</h1>
        <br/>
        <p>Shopping is a bit of arelaxing hobby for me,which</p>
        <p>is sometimes troubling for the bank balance</p>
        <br/>
        <br/>
        <button>Learn More</button>
     </div>
     <div>
       
     </div>
     </div> 

    
    )
}
export default Navbar;