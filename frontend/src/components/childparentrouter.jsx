import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
// import Layout from "./layout"
import RegistrationPage from "./registration"
import SurveyPage from "./survey"
import IndexPage from "./indexpage"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"
import {action as loadingAction} from "./registration"
// import { surveyLoader} from "./survey"
import { loginloader} from "./registration"
import {loader as surveyLoader} from './surveylayout'
import SurveyForm from "./surveyform";

import EditEvent from "./EditEvent";

// import { requireAuth } from "./utilis"
import { requireAuth } from "./utilis";
import FormLayout from "./FormLayout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />
        <Route path="/rides" element={<SurveyLayout />} loader={surveyLoader}>
          <Route
            path="/rides"
            element={<FormLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/rides/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>

        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);