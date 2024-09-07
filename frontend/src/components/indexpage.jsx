import { NavLink } from "react-router-dom";
import HomeNavBar from "./homenavbar";


import "react-toastify/dist/ReactToastify.css";




const IndexPage = () => {
  return (
    <>
      {/* navbar below */}
      <HomeNavBar />
      {/* index content */}
      <div className="main_body">
        <div className="row" id="p_to center_it" style={{textAlign: "center"}}>

        <div className="col s12 m12">
          <p><NavLink to="promoters" className="waves-effect block waves-light black btn-large w80">Promoters Report</NavLink></p>
        </div>
        <div className="col s12 m12">
          <p>
          <NavLink
            to="rides"
            className="waves-effect block waves-light orange  btn-large w80"
            style={{textAlign: "center"}}
          >
            125 HD TEST RIDES REPORTING
          </NavLink>
          </p>

        </div>

        <div className="col s12 m12"> <p><NavLink to="registration" className="waves-effect waves-light green  btn-large w80">Registration</NavLink></p></div>
        </div>

      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default IndexPage;
