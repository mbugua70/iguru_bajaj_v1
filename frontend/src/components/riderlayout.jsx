import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import RiderPage from "./rider";

export default function RiderLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <RiderPage />
      <Outlet context={{ userData }} />
    </>
  );
}
