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
          {t("page.account.section.profile.title")}
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
                <label>{t("form.label.firstname")}</label>
                <input
                  placeholder={t("form.placeholder.firstname")}
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
                <label>{t("form.label.lastname")}</label>
                <input
                  placeholder={t("form.placeholder.lastname")}
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
                <label>{t("form.label.mobile")}</label>
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
                <label>{t("form.label.gender")}</label>
                <select value={input.gender} onChange={inputHandler("gender")}>
                  <option value="">{t("form.placeholder.gender")}</option>
                  <option value="m">{t("form.label.male")}</option>
                  <option value="f">{t("form.label.female")}</option>
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
                <label>{t("form.label.dob")}</label>
                <select onChange={inputHandler("day")} value={input.day}>
                  <option value="">{t("form.label.day")}</option>
                  {dob.renderDay()}
                </select>
              </div>
            </div>
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>&nbsp;</label>
                <select onChange={inputHandler("month")} value={input.month}>
                  <option value="">{t("form.label.month")}</option>
                  {dob.renderMonth()}
                </select>
              </div>
            </div>
            <div className="form-row__cell">
              <div className="form-row__input">
                <label>&nbsp;</label>
                <select onChange={inputHandler("year")} value={input.year}>
                  <option value="">{t("form.label.year")}</option>
                  {dob.renderYear()}
                </select>
              </div>
            </div>

            <div className="error-msg">{updateProfile.error?.dob?.[0]}</div>
          </div>

          <div className="form__submit p-relative">
            <Button>{t("button.update")}</Button>
            {updateProfile.status.loading && <LoadingBtn />}
          </div>
        </Form>
      </div>
    </Styled>
  );
}

export default Index;
