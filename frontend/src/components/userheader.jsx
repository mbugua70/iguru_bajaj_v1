import {Link, useLocation} from "react-router-dom"

const UserHeader = () =>{

    const locaton = useLocation()
    const pathname = locaton.pathname
    console.log(pathname);
    return (
      <>
        <nav>
          <div className=" topmenu left_menu"></div>
          <div className=" topmenu centered_menu">
            {pathname === "/indexpage_two" ? "PROMOTERS" : "Registration"}
            {pathname === "/rides" ? "125 HD TEST REPORTING DATA" : ""}
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