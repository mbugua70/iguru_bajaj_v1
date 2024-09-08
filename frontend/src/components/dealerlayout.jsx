import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import DealerPage from "./dealer";

export default function DealerLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <DealerPage />
      <Outlet context={{ userData }} />
    </>
  );
}
