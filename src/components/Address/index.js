import { useState, useEffect, memo } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Form, Button } from "../styles";
import { useTransition, animated } from "react-spring";
import { useAddresses, useConfig } from "@ysq-intl/react-redux-ysqstore";
import _map from "lodash/map";
import _size from "lodash/size";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
import useAddressForm from "../../hooks/useAddressForm";
import useInput from "../../hooks/useInput";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  mobile: "",
  address: "",
  adl1: "",
  adl2: "",
  zipcode: "",
};

function Index({ cb = null, selectedId = null, fullWidth = false }) {
  const { t } = useTranslation();
  const {
    addresses,
    getAddresses,
    updateAddress,
    createAddress,
    deleteAddress,
  } = useAddresses();
  const [input, setInput] = useState(null);
  const { config } = useConfig();
  const { adls } = useAddressForm(input, setInput);
  const transition = useTransition(!!input, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: "none" },
  });
  const inputHandler = useInput(setInput);

  useEffect(() => {
    getAddresses.action();
  }, []);

  useEffect(() => {
    if (createAddress.status.success) {
      toast("Successfully created.");
      setInput(null);
    } else if (createAddress.status.failure) {
      toast.error("Operation failed");
    }
  }, [createAddress.status]);

  useEffect(() => {
    if (updateAddress.status.success) {
      toast("Successfully updated.");
      setInput(null);
    } else if (updateAddress.status.failure) {
      toast.error("Operation failed");
    }
  }, [updateAddress.status]);

  useEffect(() => {
    if (deleteAddress.status.success) {
      toast("Successfully deleted.");
      setInput(null);
    } else if (deleteAddress.status.failure) {
      toast.error("Operation failed");
    }
  }, [deleteAddress.status]);

  // useEffect(() => {
  //   if (getZipcode.status.success && getZipcode.result.length === 1) {
  //     setInput((prevState) => {
  //       return { ...prevState, zipcode: getZipcode.result[0] };
  //     });
  //   }
  // }, [getZipcode.status]);

  return (
    (getAddresses.status.success || getAddresses.status.failure) && (
      <Styled>
        {transition((styles, show) => {
          return show ? (
            <animated.div
              style={{
                ...styles,
                maxWidth: fullWidth ? "100%" : "fit-content",
              }}
              className="account-container"
            >
              <Form
                className="profile-form"
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (input.id) {
                    updateAddress.action(input.id, input);
                  } else {
                    createAddress.action(input);
                  }
                }}
              >
                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{t("form.label.firstname")}</label>
                      <input
                        placeholder={t("form.placeholder.firstname")}
                        value={input?.firstname || ""}
                        onChange={inputHandler("firstname")}
                      />
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.firstname?.[0] ||
                        updateAddress.error?.firstname?.[0]}
                    </div>
                  </div>

                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{t("form.label.lastname")}</label>
                      <input
                        placeholder={t("form.placeholder.lastname")}
                        value={input?.lastname || ""}
                        onChange={inputHandler("lastname")}
                      />
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.lastname?.[0] ||
                        updateAddress.error?.lastname?.[0]}
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
                        placeholder={t("form.placeholder.mobile")}
                        value={input?.mobile || ""}
                        onChange={inputHandler("mobile")}
                      />
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.mobile?.[0] ||
                        updateAddress.error?.mobile?.[0]}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{t("form.label.address")}</label>
                      <textarea
                        rows={4}
                        placeholder={t("form.placeholder.address")}
                        value={input?.address || ""}
                        onChange={inputHandler("address")}
                      />
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.address?.[0] ||
                        updateAddress.error?.address?.[0]}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{config.adl1_name}</label>
                      <select
                        value={input?.adl1 || ""}
                        onChange={inputHandler("adl1")}
                      >
                        <option value="">{config.adl1_name}</option>
                        {adls?.data &&
                          adls.data.map((el, i) => {
                            return (
                              <option value={el} key={`adl1_${i}`}>
                                {el}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.adl1?.[0] ||
                        updateAddress.error?.adl1?.[0]}
                    </div>
                  </div>

                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{config.adl2_name}</label>
                      <select
                        value={input?.adl2 || ""}
                        onChange={inputHandler("adl2")}
                      >
                        <option value="">{config.adl2_name}</option>

                        {adls?.[input?.adl1]?.data &&
                          adls[input?.adl1].data.map((el, i) => {
                            return (
                              <option value={el} key={`adl2_${i}`}>
                                {el}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.adl2?.[0] ||
                        updateAddress.error?.adl2?.[0]}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-row__cell">
                    <div className="form-row__input">
                      <label>{t("form.label.zipcode")}</label>
                      <select
                        value={input?.zipcode || ""}
                        onChange={inputHandler("zipcode")}
                      >
                        <option value="">
                          {t("form.placeholder.zipcode")}
                        </option>

                        {adls?.[input?.adl1]?.[input?.adl2]?.["NA"]?.["NA"]
                          .data &&
                          adls[input?.adl1][input?.adl2]["NA"]["NA"].data.map(
                            (el, i) => {
                              return (
                                <option value={el} key={`adl2_${i}`}>
                                  {el}
                                </option>
                              );
                            }
                          )}
                      </select>
                    </div>
                    <div className="error-msg">
                      {createAddress.error?.zipcode?.[0] ||
                        updateAddress.error?.zipcode?.[0]}
                    </div>
                  </div>
                </div>

                <div className="form__submit">
                  <div className="p-relative">
                    <Button>
                      {input?.id ? t("button.update") : t("button.add")}
                    </Button>
                    {(createAddress.status.loading ||
                      updateAddress.status.loading) && <LoadingBtn />}
                  </div>

                  <div className="p-relative">
                    <Button
                      type="button"
                      invert={true}
                      onClick={() => {
                        setInput(null);
                      }}
                    >
                      {t("button.cancel")}
                    </Button>
                  </div>
                </div>
              </Form>
            </animated.div>
          ) : (
            <animated.div style={styles}>
              {!addresses || _size(addresses) === 0 ? (
                <div className="no-result">
                  <h2 className="no-result-header">
                    {t("page.account.section.address.nothing-here-yet")}
                  </h2>
                  <p>
                    {t(
                      "page.account.section.address.would-you-like-to-add-an-address"
                    )}
                  </p>
                </div>
              ) : (
                <ul className="addresses">
                  {_map(addresses, (el) => (
                    <li
                      key={`adress-${el.id}`}
                      className={`address selectable ${
                        selectedId === el.id ? "active" : ""
                      }`}
                      onClick={() => {
                        cb && cb(el.id);
                      }}
                    >
                      <div className="address__header">
                        <div className="address__name">
                          {el.firstname} {el.lastname}
                        </div>
                        <ul className="address__actions">
                          <li
                            onClick={() => {
                              setInput(el);
                            }}
                          >
                            {t("button.edit")}
                          </li>
                          <li
                            onClick={() => {
                              deleteAddress.action(el.id);
                            }}
                          >
                            {t("button.delete")}
                          </li>
                        </ul>
                      </div>

                      <div className="address__body">
                        <p>
                          +{config.country_code}
                          {el.mobile} <br />
                          <br />
                          {el.address}, {el.adl2}, {el.adl1}, {el.zipcode},{" "}
                          {config.country_name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {cb ? (
                <div
                  style={{
                    marginTop: "30px",
                    textAlign: "right",
                    color: "#29BCB9",
                    textDecoration: "underline",
                  }}
                >
                  <div
                    style={{ display: "inline-block", cursor: "pointer" }}
                    onClick={() => {
                      setInput(INITIAL_STATE);
                    }}
                  >
                    +{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {t("button.add-new-address")}
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: "30px" }}>
                  <Button
                    width="220px"
                    onClick={() => {
                      setInput(INITIAL_STATE);
                    }}
                  >
                    {t("button.add-address")}
                  </Button>
                </div>
              )}
            </animated.div>
          );
        })}
      </Styled>
    )
  );
}

export default memo(Index);
