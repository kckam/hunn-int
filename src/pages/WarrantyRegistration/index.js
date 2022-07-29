import { useState, useEffect, useRef } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import { Form, Button } from "../../components/styles";
import { useTransition, useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { useNavigate } from "react-router-dom";
import {
	useWarrantyRegistrations,
	useConfig,
	useProfile,
} from "@ysq-intl/react-redux-ysqstore";
import { dob } from "../../utils";
import useAddressForm from "../../hooks/useAddressForm";
import LoadingBtn from "../../components/LoadingBtn";

function Index() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { config } = useConfig();
	const { profile } = useProfile();
	const [input, setInput] = useState({
		address: "",
		adl2: "",
		adl1: "",
		zipcode: "",
		name: "",
		email: profile?.email || "",
		mobile: "",
	});
	const { adls } = useAddressForm(input, setInput);
	const { createWarrantyRegistration } = useWarrantyRegistrations();
	const [devices, setDevices] = useState([{ serial_no: "", img: "" }]);
	const transitions = useTransition(devices, {
		keys: (devices, index) => `device-anim-${index}`,
		from: { opacity: 0, y: -10 },
		enter: { opacity: 1, y: 0 },
		leave: { display: "none" },
		delay: 300,
	});
	const [ref, { height: contentHeight }] = useMeasure({
		polyfill: ResizeObserver,
	});
	const { height } = useSpring({
		from: { height: 0, opacity: 0, y: 0 },
		to: {
			height: contentHeight,
		},
	});

	useEffect(() => {
		if (createWarrantyRegistration.status.success) {
			navigate("/warranty-success");
		}
	}, [createWarrantyRegistration.status]);
	const fileInputDOM = useRef(new Array());

	return (
		<Styled>
			<Hero
				title={t("page.warranty_registration.title")}
				subtitle={t("page.warranty_registration.subtitle")}
				bg="warranty"
			/>
			<div className="container">
				<Form
					className="warranty-form"
					autoComplete="off"
					onSubmit={(e) => {
						e.preventDefault();
						const form = new FormData();
						form.append("address", input.address);
						form.append("adl2", input.adl2);
						form.append("adl1", input.adl1);
						form.append("zipcode", input.zipcode);
						form.append("name", input.name);
						form.append(
							"dob",
							input.year && input.month && input.day
								? `${input.year}-${input.month}-${input.day}`
								: ""
						);
						form.append("email", input.email);
						form.append("mobile", input.mobile);
						for (let i = 0; i < devices.length; i++) {
							form.append(`devices[${i}][serial_no]`, devices[i].serial_no);
							form.append(`devices[${i}][file]`, devices[i].file);
						}

						createWarrantyRegistration.action(form);
					}}
				>
					<div className="body__left">
						<div className="form-row">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>
										<span className="required">*</span>Email address
									</label>
									<input
										placeholder="Enter email address"
										value={input.email}
										onChange={(e) => {
											setInput((prevState) => {
												return { ...prevState, email: e.target.value };
											});
										}}
									/>
								</div>
								<div className="error-msg">
									{createWarrantyRegistration.error?.email?.[0]}
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>
										<span className="required">*</span>Name
									</label>
									<input
										placeholder="Enter name"
										value={input.name}
										onChange={(e) => {
											setInput((prevState) => {
												return { ...prevState, name: e.target.value };
											});
										}}
									/>
								</div>
								<div className="error-msg">
									{createWarrantyRegistration.error?.name?.[0]}
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-row__cell">
								<div
									className="form-row__input mobile-input"
									data-prefix={`+${config.country_code}`}
								>
									<label>
										<span className="required">*</span>Mobile
									</label>
									<input
										placeholder="Enter mobile"
										value={input.mobile}
										onChange={(e) => {
											setInput((prevState) => {
												return { ...prevState, mobile: e.target.value };
											});
										}}
									/>
								</div>
								<div className="error-msg">
									{createWarrantyRegistration.error?.mobile?.[0]}
								</div>
							</div>
						</div>

						<div className="form-row multi">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>Date of birth</label>
									<select
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return { ...prevState, day: e.target.value };
											});
										}}
										value={input.day}
									>
										<option value="">Day</option>
										{dob.renderDay()}
									</select>
								</div>
							</div>
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>&nbsp;</label>
									<select
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return { ...prevState, month: e.target.value };
											});
										}}
										value={input.month}
									>
										<option value="">Month</option>
										{dob.renderMonth()}
									</select>
								</div>
							</div>
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>&nbsp;</label>
									<select
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return { ...prevState, year: e.target.value };
											});
										}}
										value={input.year}
									>
										<option value="">Year</option>
										{dob.renderYear()}
									</select>
								</div>
							</div>

							<div className="error-msg">
								{createWarrantyRegistration.error?.dob?.[0]}
							</div>
						</div>

						<div className="form-row">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>Address</label>
									<textarea
										rows={4}
										placeholder="Enter address"
										value={input.address}
										onChange={(e) => {
											setInput((prevState) => {
												return { ...prevState, address: e.target.value };
											});
										}}
									/>
								</div>
								<div className="error-msg">
									{createWarrantyRegistration.error?.address?.[0]}
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>{config.adl1_name}</label>
									<select
										value={input?.adl1 || ""}
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return {
													...prevState,
													adl1: e.target.value,
												};
											});
										}}
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
									{createWarrantyRegistration.error?.adl1?.[0]}
								</div>
							</div>

							<div className="form-row__cell">
								<div className="form-row__input">
									<label>{config.adl2_name}</label>
									<select
										value={input?.adl2 || ""}
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return {
													...prevState,
													adl2: e.target.value,
												};
											});
										}}
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
									{createWarrantyRegistration.error?.adl2?.[0]}
								</div>
							</div>
						</div>

						<div className="form-row">
							<div className="form-row__cell">
								<div className="form-row__input">
									<label>Zipcode</label>
									<select
										value={input?.zipcode || ""}
										onChange={(e) => {
											e.persist();
											setInput((prevState) => {
												return {
													...prevState,
													zipcode: e.target.value,
												};
											});
										}}
									>
										<option value="">zipcode</option>

										{adls?.[input?.adl1]?.[input?.adl2]?.["NA"]?.["NA"].data &&
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
									{createWarrantyRegistration.error?.zipcode?.[0]}
								</div>
							</div>
						</div>
					</div>

					<div className="body__right">
						<animated.div
							className="body__right-wrapper"
							style={{
								height,
							}}
						>
							<div className="body__right-inner-wrapper" ref={ref}>
								{transitions((styles, device, _, index) => {
									return (
										<animated.div
											style={styles}
											className="form-row add-serial__row"
											key={`device-${index}`}
										>
											<div className="form-row__cell">
												<div className="form-row__input">
													<label>
														<span className="required">*</span>Device Serial
														Number
													</label>
													<input
														placeholder="Enter serial"
														value={device.serial_no || ""}
														onChange={(e) => {
															setDevices((prevState) => {
																return prevState.map((p, j) => {
																	if (index === j) {
																		return { ...p, serial_no: e.target.value };
																	} else {
																		return p;
																	}
																});
															});
														}}
													/>

													<div className="error-msg">
														{
															createWarrantyRegistration.error?.[
																`devices.${index}.serial_no`
															]?.[0]
														}
													</div>
												</div>
												{device.file && (
													<div style={{ marginTop: "16px" }}>
														<img
															id="preview"
															src={URL.createObjectURL(device.file)}
															width="142"
															height="106"
														/>
													</div>
												)}
											</div>

											<div className="form-row__cell add-serial__action">
												<div className="form-row__input">
													<div
														className="btn__delete btn"
														onClick={() => {
															setDevices((prev) =>
																prev.filter((_, j) => j !== index)
															);
														}}
													>
														Delete
													</div>
													<div
														className="btn__upload btn"
														onClick={(e) => {
															e.preventDefault();
															fileInputDOM.current[index].click();
														}}
													>
														Upload Receipt
													</div>
												</div>
											</div>

											<input
												type="file"
												ref={(el) => (fileInputDOM.current[index] = el)}
												accept="image/*"
												style={{
													position: "absolute",
													left: "-999px",
													opacity: "0",
												}}
												onChange={(e) => {
													e.persist();
													if (!e.target.files[0]) return;

													setDevices((prevState) => {
														return prevState.map((p, j) => {
															if (index === j) {
																return { ...p, file: e.target.files[0] };
															} else {
																return p;
															}
														});
													});
												}}
											/>

											<div className="error-msg">
												{
													createWarrantyRegistration.error?.[
														`devices.${index}.file`
													]?.[0]
												}
											</div>
										</animated.div>
									);
								})}
							</div>
						</animated.div>

						<div className="section__add-more-device">
							{devices.length < 5 && (
								<div
									className="btn btn__add-more-device"
									onClick={() => {
										setDevices((prev) => [...prev, { serial: "", img: "" }]);
									}}
								>
									+ Add more device
								</div>
							)}

							<div style={{ textAlign: "right" }}>
								<div className="p-relative form__submit">
									<Button>SUBMIT</Button>
									{createWarrantyRegistration.status.loading && <LoadingBtn />}
								</div>

								<br />
								<br />
								<div className="required" style={{ fontSize: "10px" }}>
									*Mandatory fields.
								</div>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</Styled>
	);
}

export default Index;
