import { Link } from "react-router-dom";

const HomeNavBar = () =>{
    return(
        <>
	<nav>
    <div className=" topmenu left_menu">
      </div>
    <div className=" topmenu centered_menu">
     BAJAJ
    </div>
    <div className=" topmenu right_menu">
  <Link href="index.html" ><i className="fa fa-home fa-2x"></i></Link>
</div>
</nav>
        </>
    )
}

export default HomeNavBar;