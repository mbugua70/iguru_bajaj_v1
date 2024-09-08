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
            {pathname === "/registration" ? "Registration" : ""}
            {pathname === "/promoters" ? "PROMOTERS" : ""}
            {pathname.includes("/rides") ? "125 HD TEST RIDES" : ""}
            {pathname === "/rides/edit" ? "125 HD TEST RIDES" : ""}
            {pathname === "/promoters/dealer" ? "DEALER DATA" : ""}
            {pathname === "/promoters/dealer/edit" ? "DEALER DATA" : ""}
            {pathname === "/promoters/fleet" ? "FLEET OWNER DATA" : ""}
            {pathname === "/promoters/fleet/edit" ? "FLEET OWNER DATA" : ""}
            {pathname === "/promoters/rider" ? "RIDER DATA" : ""}
            {pathname === "/promoters/rider/edit" ? "RIDER DATA" : ""}
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