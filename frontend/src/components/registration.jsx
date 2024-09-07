
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */

// import React from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {  Form,redirect,  useActionData, useNavigation, useLoaderData } from "react-router-dom";

import { loginUser } from "./api";




export const loginloader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const ba_name = formData.get("ba_name");
  const ba_phone = formData.get("ba_phone");
  const ba_location = formData.get("ba_location");
  if (!ba_location || !ba_name || !ba_phone) {
    return "Please fill all the required fields";
  }
  const formdata = new FormData();
  formdata.append("ba_name", ba_name);
  formdata.append("ba_location", ba_location);
  formdata.append("ba_phone", ba_phone);
  // const pathname = new URL(request.url).searchParams.get("redirectTo") || "/survey"
  try {
    const ba_name = formdata.get("ba_name");
    const ba_phone = formdata.get("ba_phone");
    const ba_location = formdata.get("ba_location");
    const workout = { ba_name, ba_phone, ba_location };
    const data = await loginUser(workout);
    if (data) {
      const loginData = JSON.stringify(data);
      localStorage.setItem("Auth", loginData);
      setTimeout(() => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>You have registered successfully!</i>,
          icon: "success",
        });
      }, 2000);
    }

    return redirect("/survey");
  } catch (err) {
    console.error("err", err.syntaxError);
    return err.message;
  }
};

const RegistrationPage = () => {
  const loginLoaderMessage = useLoaderData();

  const navigation = useNavigation();

  const errorMessage = useActionData();

  const storeBa = localStorage.getItem("Auth");
  const storeBaTwo = JSON.parse(storeBa);

  return (
    <>
      <div className="container">
        <div className="card-panel card-relative">
          <div className="parentError">
            <span>
              {loginLoaderMessage === null ? (
                ""
              ) : (
                <i className="material-icons">error</i>
              )}
            </span>
            <p className="login_errmessage">
              {loginLoaderMessage && !errorMessage && loginLoaderMessage}
              {errorMessage && errorMessage}
            </p>
          </div>
          <Form className="form" method="post" replace>
            <label htmlFor="ba_name">Name</label>
            <input
              type="text"
              name="ba_name"
              id="ba_name"
              placeholder="Enter name"
              defaultValue={storeBaTwo === null ? "" : storeBaTwo.user.ba_name}
            />
            <label htmlFor="ba_phone">Phone Numbers</label>
            <input
              type="tel"
              name="ba_phone"
              id="ba_phone"
              placeholder="Tel e.g 0728**"
              defaultValue={storeBaTwo === null ? "" : storeBaTwo.user.ba_phone}
            />
            <label htmlFor="ba_location">Location</label>
            <input
              type="text"
              name="ba_location"
              id="ba_location"
              placeholder="Enter location"
              defaultValue={
                storeBaTwo === null ? "" : storeBaTwo.user.ba_location
              }
            />

            <span className="flex_button">
              <button
                className="btn waves-effect color_change"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "registering" : "Register"}
              </button>
            </span>
          </Form>
        </div>
      </div>

      {/* Bajaj code */}
      <div className="main_body">
        <div className="row" id="top_row">
          <div className="row parcel_form">
            <div className="parentError">
              <span>
                {loginLoaderMessage === null ? (
                  ""
                ) : (
                  <i className="material-icons">error</i>
                )}
              </span>
              <p className="login_errmessage">
                {loginLoaderMessage && !errorMessage && loginLoaderMessage}
                {errorMessage && errorMessage}
              </p>
            </div>
            <form id="parcel_form">
              <div class="input-field col s12">
                <span>Name</span>
                <br />
                <input
                  id="ba_name"
                  placeholder="Your Name"
                  type="text"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_name
                  }
                />
              </div>
              <div class="input-field col s12">
                <span>Your Phone Number</span>
                <br />
                <input
                  id="ba_phone"
                  placeholder="Your Phone Number"
                  type="tel"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_phone
                  }
                />
              </div>
              <div class="input-field col s12">
                <span>Region</span>
                <br />
                <input
                  id="ba_region"
                  placeholder="Region"
                  type="text"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_location
                  }
                />
              </div>
              <div class="input-field col s12 center_it">
                <button
                  id="register_btn"
                  class="btn-large  margin-bottom waves-effect waves-light pick_color"
                  type="button"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "registering"
                    : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;