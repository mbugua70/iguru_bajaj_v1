import {Link, useLocation} from "react-router-dom"

const UserHeader = () =>{

    const locaton = useLocation()
    const pathname = locaton.pathname
    return (
      <>
        <nav>
          <div className=" topmenu left_menu"></div>
          <div className=" topmenu centered_menu">
            {pathname === "/registration" ? "Registration" : "Survey"}
          </div>
          <div className=" topmenu right_menu">
            <Link href="index.html">
              <i className="fa fa-home fa-2x"></i>
            </Link>
          </div>
        </nav>
      </>
    );
}

export default UserHeader;