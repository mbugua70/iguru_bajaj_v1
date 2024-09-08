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
      sub_1_16: "",
      sub_1_17: "",
      sub_1_18: "",
      sub_1_19: "",
      sub_1_20: "",
      sub_1_21: "",
      sub_1_22: "",
      sub_1_23: "",
      sub_1_24: "",
      sub_1_25: "",
      sub_1_26: "",
      sub_1_27: "",
      sub_1_28: "",
      sub_1_29: "",
      sub_1_30: "",
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
              <span>DATE</span>
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
              <span>REGION</span>
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
              <span>TOWN</span>
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
              <span>LOCATION</span>
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
              <span>1. Name of the stand activated?</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Stand Activated"
                type="text"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Fleet owner Name</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Fleet Owner Name"
                type="text"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Fleet owner contact Details</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Contacts"
                type="tel"
                {...register("sub_1_7")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. No.of Bikes he|she owns</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                title="No of Bikes"
                type="number"
                {...register("sub_1_8")}
              />
            </div>

            <h1>Number of bike on each specific stand as per the brands ?</h1>
            <div className="input-field col s12">
              <span>1. TVS HLX 125</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                title="TVS HLX 125"
                type="text"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. TVS HLX 150</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="TVS HLX 150"
                type="text"
                {...register("sub_1_10")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Boxer 100</span>
              <br />
              <input
                id="sub_1_11"
                name="sub_1_11"
                title="Boxer 100"
                type="text"
                {...register("sub_1_11")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Boxer 125</span>
              <br />
              <input
                id="sub_1_12"
                name="sub_1_12"
                title="Boxer 125"
                type="text"
                {...register("sub_1_12")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Boxer X 125</span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                title="Boxer X 125"
                type="text"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>6. Boxer BM 150</span>
              <br />
              <input
                id="sub_1_14"
                name="sub_1_14"
                title="Boxer BM 150"
                type="text"
                {...register("sub_1_14")}
              />
            </div>

            <div className="input-field col s12">
              <span>7. Boxer BM X150</span>
              <br />
              <input
                id="sub_1_15"
                name="sub_1_15"
                title="Boxer BM X150"
                type="text"
                {...register("sub_1_15")}
              />
            </div>
            <div className="input-field col s12">
              <span>8. Boxer 150 HD</span>
              <br />
              <input
                id="sub_1_16"
                name="sub_1_16"
                title="Boxer 150 HD"
                type="text"
                {...register("sub_1_17")}
              />
            </div>

            <div className="input-field col s12">
              <span>9. Boxer 125 HD</span>
              <br />
              <input
                id="sub_1_17"
                name="sub_1_17"
                title="Boxer 125 HD"
                type="text"
                {...register("sub_1_18")}
              />
            </div>

            <div className="input-field col s12">
              <span>10. Fekon </span>
              <br />
              <input
                id="sub_1_18"
                name="sub_1_18"
                title="Fekon"
                type="text"
                {...register("sub_1_18")}
              />
            </div>

            <div className="input-field col s12">
              <span>11. Haojue </span>
              <br />
              <input
                id="sub_1_19"
                name="sub_1_19"
                title="Haojue"
                type="text"
                {...register("sub_1_19")}
              />
            </div>

            <div className="input-field col s12">
              <span>12. King Lion</span>
              <br />
              <input
                id="sub_1_20"
                name="sub_1_20"
                title="King Lion"
                type="text"
                {...register("sub_1_20")}
              />
            </div>

            <div className="input-field col s12">
              <span>13. SANG LG</span>
              <br />
              <input
                id="sub_1_21"
                name="sub_1_21"
                title="SANG LG"
                type="text"
                {...register("sub_1_21")}
              />
            </div>

            <div className="input-field col s12">
              <span>14. Sanya </span>
              <br />
              <input
                id="sub_1_22"
                name="sub_1_22"
                title="Sanya "
                type="text"
                {...register("sub_1_22")}
              />
            </div>

            <div className="input-field col s12">
              <span>15. Shinoray </span>
              <br />
              <input
                id="sub_1_23"
                name="sub_1_23"
                title="Shinoray"
                type="text"
                {...register("sub_1_23")}
              />
            </div>

            <div className="input-field col s12">
              <span>16. SKYMARK 125</span>
              <br />
              <input
                id="sub_1_24"
                name="sub_1_24"
                title="SKYMARK 125"
                type="text"
                {...register("sub_1_24")}
              />
            </div>

            <div className="input-field col s12">
              <span>17. Others</span>
              <br />
              <input
                id="sub_1_25"
                name="sub_1_25"
                title="Others"
                type="text"
                {...register("sub_1_25")}
              />
            </div>

            <h1>Strength of the stand </h1>

            <div className="input-field col s12">
              <span>1. Strength of the stand</span>
              <br />
              <input
                id="sub_1_26"
                name="sub_1_26"
                title="Strength of the stand"
                type="text"
                {...register("sub_1_26")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Strength of Boxer</span>
              <br />
              <input
                id="sub_1_27"
                name="sub_1_27"
                title="Strength of Boxer"
                type="text"
                {...register("sub_1_27")}
              />
            </div>
            <div className="input-field col s12">
              <span>3. Strength of Chinese</span>
              <br />
              <input
                id="sub_1_28"
                name="sub_1_28"
                title="Strength of Chinese"
                type="text"
                {...register("sub_1_28")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Strength of TVS</span>
              <br />
              <input
                id="sub_1_29"
                name="sub_1_29"
                title="Strength of TVS"
                type="text"
                {...register("sub_1_29")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Rider Strength</span>
              <br />
              <input
                id="sub_1_30"
                name="sub_1_30"
                title="Rider Strength"
                type="text"
                {...register("sub_1_30")}
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
