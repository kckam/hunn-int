import { useState, useCallback, useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";
import { useStoreLocators } from "@ysq-intl/react-redux-ysqstore";

const lib = ["places"];

function Index() {
  const { getStoreLocators, storeLocators } = useStoreLocators();
  const [data, setData] = useState([]);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [centerPos, setCenterPos] = useState({
    lat: 7.136810320916207,
    lng: 109.060748931079,
  });
  const [userPos, setUserPos] = useState({
    lat: 7.136810320916207,
    lng: 109.060748931079,
  });
  const [zoom, setZoom] = useState(5.5);
  const [enabledGps, setEnabledGps] = useState(false);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    getStoreLocators.action();
  }, []);

  useEffect(() => {
    if (getStoreLocators.status.success) {
      setData(getStoreLocators.result);
    }
  }, [getStoreLocators.status]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition, () => {
      setEnabledGps(false);
    });
  }, []);

  function onLoadx(autocomplete) {
    setAutocomplete(autocomplete);
  }

  function onPlacesChanged() {
    if (autocomplete !== null) {
      setCenterPos({
        lat: autocomplete.getPlaces()[0].geometry.location.lat(),
        lng: autocomplete.getPlaces()[0].geometry.location.lng(),
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

  function showPosition(position) {
    setCenterPos({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });

    setUserPos({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    setZoom(12);
    setEnabledGps(true);
  }
  const { t } = useTranslation();

  return (
    <Styled>
      <Hero title={"STORE LOCATOR"} subtitle={"Find a HUNN store near you"} />

      <div className="container">
        <LoadScript
          googleMapsApiKey="AIzaSyCw8bGBKPhnOScFst4wBqgKWuCP9n5-KUI"
          libraries={lib}
        >
          <div className="map-outer-wrapper">
            <StandaloneSearchBox
              onLoad={onLoadx}
              onPlacesChanged={onPlacesChanged}
            >
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter an address to locate store"
                />
              </div>
            </StandaloneSearchBox>
            <div className="map-wrapper">
              <div className="left-col">
                <ul className="listed-place">
                  {data?.map((el, i) => {
                    return (
                      <li
                        key={`mark-${i}`}
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => {
                          setData((prevState) => {
                            let temp = prevState.map((ee, index) => {
                              if (index === i) {
                                setCenterPos({ ...ee.coord });
                                return { ...ee, open: true };
                              }

                              return { ...ee, open: false };
                            });

                            return temp;
                          });
                        }}
                      >
                        <div className="title">{el.name}</div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#888",
                            marginTop: "0.5rem",
                            lineHeight: "1.2rem",
                          }}
                        >
                          <span style={{ whiteSpace: "nowrap" }}>
                            {el.address}
                          </span>
                          <br />
                          {el.zipcode}, {el.country_name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="right-col">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "500px" }}
                  center={centerPos}
                  zoom={zoom}
                  // onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {enabledGps && (
                    <Marker
                      key={`user-marker`}
                      label="S"
                      position={{ ...userPos }}
                    ></Marker>
                  )}

                  {data.map((el, i) => {
                    return (
                      <Marker
                        key={`marker-${i}`}
                        // icon="https://img.icons8.com/emoji/2x/hammer-and-wrench.png"
                        position={{ ...el.coord }}
                        onClick={() => {
                          setData((prevState) => {
                            let temp = prevState.map((ee, index) => {
                              if (index === i) {
                                setCenterPos(ee.coord);
                                return { ...ee, open: true };
                              }

                              return { ...ee, open: false };
                            });

                            return temp;
                          });
                        }}
                      >
                        {el.open && (
                          <InfoWindow
                            style={{ width: "100%" }}
                            position={{
                              ...el.coord,
                            }}
                            onCloseClick={() => {
                              setData((prevState) => {
                                let temp = prevState.map((ee, index) => {
                                  if (index === i) {
                                    return { ...ee, open: false };
                                  }

                                  return ee;
                                });

                                return temp;
                              });
                            }}
                          >
                            <div style={{ width: "100%" }}>
                              <div style={{ fontWeight: "bold" }}>
                                {el.name}
                              </div>
                              <br />
                              <div>
                                {el.address}
                                <br />
                                {el.zipcode}, {el.country_name}
                              </div>
                              <br />
                              <div>
                                Operating Hour: <br />
                                {el.operating_details}
                              </div>
                              <br />
                              <div>{el.info}</div>

                              <br />
                              <div>
                                Email: <br />
                                {el.email}
                              </div>
                              <br />
                              <div>
                                Phone: <br />+{el.country_code} {el.phone} -{" "}
                                {el.phone_extension}
                              </div>
                              <br />
                              {el.link && (
                                <div>
                                  Website:
                                  <br />
                                  <a
                                    href={el.link}
                                    style={{
                                      marginTop: "1rem",
                                      color: "#000",
                                      padding: 0,
                                      textDecoration: "underline",
                                      background: "#fff",
                                      fontSize: "1rem;",
                                    }}
                                  >
                                    {el.link}
                                  </a>
                                </div>
                              )}
                            </div>
                          </InfoWindow>
                        )}
                      </Marker>
                    );
                  })}
                </GoogleMap>
              </div>
            </div>
          </div>
        </LoadScript>
      </div>
    </Styled>
  );
}

export default Index;
