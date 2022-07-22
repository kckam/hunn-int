import { useState, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Form } from "../../../components/styles";
import { useProfile, useConfig } from "@ysq-intl/react-redux-ysqstore";
import LoadingBtn from "../../../components/LoadingBtn";
import { toast } from "react-toastify";
import { dob } from "../../../utils";
import useInput from "../../../hooks/useInput";

function Index() {
  const { t } = useTranslation();

  const { profile, updateProfile } = useProfile();
  const { config } = useConfig();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    mobile: "",
  });

  const inputHandler = useInput(setInput);

  useEffect(() => {
    if (updateProfile.status.success) {
      toast("Successfully updated.");
    } else if (updateProfile.status.failure) {
      toast.error("Operation failed.");
    }
  }, [updateProfile.status]);

  useEffect(() => {
    let dob = profile.dob && {
      year: parseInt(profile.dob.split("-")[0]),
      month: parseInt(profile.dob.split("-")[1]),
      day: parseInt(profile.dob.split("-")[2]),
    };

    setInput({ ...profile, ...dob });
  }, [profile]);

  return (
    <Styled>
      <div className="profile-container account-container">
        <h2 className="profile__title">
          Manage your contact information details.
        </h2>

        <Form
          className="profile-form"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile.action({
              ...input,
              dob:
                input.year && input.month && input.day
                  ? `${input.year}-${input.month}-${input.day}`
                  : null,
            });
          }}
        >
          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>First name</label>
                <input
                  placeholder="Enter first name"
                  value={input.firstname}
                  onChange={inputHandler("firstname")}
                />
              </div>
              <div className="error-msg">
                {updateProfile.error?.firstname?.[0]}
              </div>
            </div>

            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Last name</label>
                <input
                  placeholder="Enter last name"
                  value={input.lastname}
                  onChange={inputHandler("lastname")}
                />
              </div>
              <div className="error-msg">
                {updateProfile.error?.lastname?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div
                className="form-row__input mobile-input"
                data-prefix={`+${config.country_code}`}
              >
                <label>Mobile</label>
                <input
                  placeholder="Enter mobile"
                  value={input.mobile}
                  onChange={inputHandler("mobile")}
                />
              </div>
              <div className="error-msg">
                {updateProfile.error?.mobile?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Gender</label>
                <select value={input.gender} onChange={inputHandler("gender")}>
                  <option value="">Choose Gender</option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <div className="error-msg">
                {updateProfile.error?.gender?.[0]}
              </div>
            </div>
          </div>

          <div className="form-row multi">
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>Date of birth</label>
                <select onChange={inputHandler("day")} value={input.day}>
                  <option value="">Day</option>
                  {dob.renderDay()}
                </select>
              </div>
            </div>
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>&nbsp;</label>
                <select onChange={inputHandler("month")} value={input.month}>
                  <option value="">Month</option>
                  {dob.renderMonth()}
                </select>
              </div>
            </div>
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>&nbsp;</label>
                <select onChange={inputHandler("year")} value={input.year}>
                  <option value="">Year</option>
                  {dob.renderYear()}
                </select>
              </div>
            </div>

            <div className="error-msg">{updateProfile.error?.dob?.[0]}</div>
          </div>

          <div className="form__submit p-relative">
            <Button>UPDATE</Button>
            {updateProfile.status.loading && <LoadingBtn />}
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
