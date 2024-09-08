/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { surveyForm } from "./api";
import { OfflineContext } from "../context_offline/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const SurveyForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_10: "",
      sub_1_11: "",
      sub_1_12: "",
      sub_1_13: "",
      sub_1_14: "",
      sub_1_15: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
    if (isOnline) {
      console.log("online working");
      try {
        const response = await surveyForm(data);
        if (response) {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            html: <i>Your data have been submitted successfully!</i>,
            icon: "success",
          });
        }
      } catch (err) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }
    } else {
      console.log("offline working");

      // addToOffline(data);
      // toastify
      toast.info("Failed to upload to the data !", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>LOCATION DETAILS</h1>

            <div className="input-field col s12">
              <span>Date</span>
              <br />
              <input
                id="sub_1_1"
                name="sub_1_1"
                title="Date"
                type="date"
                {...register("sub_1_1")}
              />
            </div>

            <div className="input-field col s12">
              <span>Region</span>
              <br />
              <input
                id="sub_1_2"
                name="sub_1_2"
                title="Region"
                type="text"
                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>Town</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="Town"
                type="text"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>Location</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Location"
                type="text"
                {...register("sub_1_4")}
              />
            </div>

            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Field Officer </span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Field Officer"
                type="text"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Promoter Contacts</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Contacts"
                type="tel"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Name of the stand activated?</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Name of the stand  activated?"
                type="text"
                {...register("sub_17")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Rider Name</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                title="Rider Name"
                type="text"
                {...register("sub_1_8")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Contact number</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                title="Contact number"
                type="tel"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>6. Name of Bikes</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="Name of Bikes"
                type="text"
                {...register("sub_1_10")}
              />
            </div>

            <div className="input-field col s12">
              <span>7. Age of Bike</span>
              <br />
              <input
                id="sub_1_11"
                name="sub_1_11"
                title="Age of Bike"
                type="text"
                {...register("sub_1_11")}
              />
            </div>

            <div className="input-field col s12">
              <span>8. Scheme Introduced ( yes or no)</span>
              <br />
              <select name="sub_1_12" id="sub_1_12" style="display: block;">
                <option value="">Select your answer</option>
                <option id="yes" value="Yes">
                  Yes
                </option>
                <option id="yes" value="No">
                  No
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>9. Fliers Distributed </span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                title="Fliers Distributed "
                type="text"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>10. Interest to Buy Boxer during Scheme</span>
              <br />
              <input
                id="sub_1_14"
                name="sub_1_14"
                title="Interest to Buy Boxer during Scheme"
                type="text"
                {...register("sub_1_14")}
              />
            </div>

            <div className="input-field col s12">
              <span>11. Expected to buy (When)</span>
              <br />
              <input
                id="sub_1_15"
                name="sub_1_15"
                title="Expected to buy (When)"
                type="text"
                {...register("sub_1_15")}
              />
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SurveyForm;
