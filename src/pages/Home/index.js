import { useEffect, useState, useMemo } from "react";
import { StyledHome } from "./style";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import { scrollTo } from "../../utils";
import DOMPurify from "dompurify";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import { useConfig, useBanners } from "@ysq-intl/react-redux-ysqstore";
import breakpoints from "../../config/breakpoint";

const { md, lg } = breakpoints;

function Home() {
	const { t } = useTranslation();
	const [dragging, setDragging] = useState(false);
	const { hash } = useLocation();
	const { config } = useConfig();
	const { banners } = useBanners();
	const [ref, { width: bannerWidth }] = useMeasure({
		polyfill: ResizeObserver,
	});

	const settings = {
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		swipe: true,
		touchThreshold: 500,
		beforeChange: () => {
			setDragging(true);
		},
		onEdge: () => {
			setDragging(true);
		},
		afterChange: () => {
			setDragging(false);
		},
	};

	const enhancementSettings = {
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		responsive: [
			{
				breakpoint: lg.min,
				settings: {
					slidesToShow: 2,
				},
			},

			{
				breakpoint: md.min,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	useEffect(() => {
		if (hash) {
			setTimeout(() => {
				scrollTo(hash); //override scrolltop for every page
			}, 0);
		}
	}, [hash]);

	let homeCarousellBanners = useMemo(
		() => determineBreakpoint("home-carousell"),
		[banners, bannerWidth]
	);

	let homePromotionBanners = useMemo(
		() => determineBreakpoint("home-promotion"),
		[banners, bannerWidth]
	);

	function determineBreakpoint(type = "") {
		//data must be sorted acs
		if (banners) {
			let data = banners
				?.find((el) => el.type === type)
				?.details[config.default_language].filter((el) => !!el.images.length);

			if (data) {
				let breakpoint = data.find((el) => el.width > bannerWidth);

				return breakpoint ? breakpoint : data[data.length - 1];
			}
		}
		return [];
	}

	return (
		<StyledHome>
			<div ref={ref}>
				<Slider {...settings} className="home-banner">
					{homeCarousellBanners?.images?.map((el, index) => (
						<div
							className="banner-wrapper"
							key={`banner-${index}`}
							onClickCapture={(e) => {
								if (dragging) {
									e.stopPropagation();
									e.preventDefault();
								}
							}}
						>
							<Link to={el.link}>
								<img
									src={el._file?.src}
									alt={el._file?.alt}
									className={`${el.focus_position || ""}`}
									style={{
										height: `${
											homeCarousellBanners?.height
												? `${homeCarousellBanners?.height}px`
												: "auto"
										}`,
									}}
								/>
								<div
									onClick={(e) => e.stopPropagation()}
									style={{ lineHeight: 1, color: "#fff" }}
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(el.custom_text),
									}}
								></div>
							</Link>
						</div>
					))}
				</Slider>
			</div>

			<div id="enhancement" className="enhancement-section">
				<div className="enhancement-section__inner-wrapper container">
					<h2 className="enhancement-section__title">
						ENCHANCING YOUR DAILY RITUAL
					</h2>

					<Slider {...enhancementSettings} className="enhancement__list">
						<div className="enhancement__item">
							<img src="/images/home/smarter-choice.svg" alt="SMARTER CHOICE" />
							<h3>SMARTER CHOICE</h3>
							<p>
								Hunn Model M promises accessible technology, catering to those
								who wish to retain their lifestyle with greater convenience.
							</p>
						</div>

						<div className="enhancement__item">
							<img
								src="/images/home/easy-alternative.svg"
								alt="EASY ALTERNATIVVE"
							/>
							<h3>EASY ALTERNATIVE</h3>
							<p>
								We seek to provide a seamless transition into an alternative
								tobacco experience, improving it by reducing unpleasant smells
								and use of flame.
							</p>
						</div>

						<div className="enhancement__item">
							<img
								src="/images/home/heated-tobacco-technology.svg"
								alt="HEATED TOBACCO TECHNOLOGY"
							/>
							<h3>HEATED TOBACCO TECHNOLOGY</h3>
							<p>
								Designed with an induction pin which heats our exclusive tobacco
								sticks evenly, we bring forward a well-rounded taste of tobacco
								delivered to its maximum potential. ​
							</p>
						</div>
					</Slider>

					<p className="enhancement-section__description">
						With an easy-to-clean, compact design, Model M provides stylish
						control of your experience with the touch of a single button.
					</p>
				</div>
			</div>

			<Slider className="promotion-banner" {...settings}>
				{homePromotionBanners?.images.map((el, index) => (
					<div
						className="banner-wrapper"
						key={`promotion-banner-${index}`}
						onClickCapture={(e) => {
							if (dragging) {
								e.stopPropagation();
								e.preventDefault();
							}
						}}
					>
						<Link to={el.link}>
							<img
								src={el._file?.src}
								alt={el._file?.alt}
								className={`${el.focus_position || ""}`}
								style={{
									height: `${
										homePromotionBanners?.height
											? `${homePromotionBanners?.height}px`
											: "auto"
									}`,
								}}
							/>
						</Link>

						<div
							style={{ lineHeight: 1, color: "#fff" }}
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(el.custom_text),
							}}
						></div>
					</div>
				))}
			</Slider>

			<div className="specs-section">
				<div className="specs-container">
					<ul className="specs-list">
						<li>
							<img src="/images/home/ic_charge.svg" alt="FAST CHARGING" />
							<h3>FAST CHARGING</h3>
						</li>

						<li>
							<img src="/images/home/ic_clean.svg" alt="EASY CLEANING" />
							<h3>EASY CLEANING</h3>
						</li>

						<li>
							<img src="/images/home/ic_heats.svg" alt="HEATS EVENLY" />
							<h3>HEATS EVENLY</h3>
						</li>

						<li>
							<img src="/images/home/ic_time.svg" alt="READY IN 20 SECONDS" />
							<h3>READY IN 20 SECONDS</h3>
						</li>
					</ul>

					<p className="specs-section__description">
						Designed for comfort and safety, the Hunn Model M is equipped with a
						protective casing to provide an additional layer against heat or
						scratches. Our induction pin ensures your every moment is
						evenly-heated, delivering maximum flavour in every puff.
					</p>
				</div>
			</div>

			<div className="deal-section">
				<div className="container">
					<div className="product-section">
						<img
							src="/images/home/product.png"
							width="500"
							height="500"
							alt="product"
						/>
					</div>
					<div className="description-section">
						<div className="deal__badge">SPECIAL DEAL</div>
						<h3>LIMITED TIME PURCHASE</h3>
						<p>
							As part of our launch, our Hunn Model M Starter Pack, consisiting
							of one device and two exclusive, complimentary gifts (worth RM
							108), is available at the discounted price of{" "}
							<span className="important">RM 59.90</span>.
						</p>

						<Link to="/shop" className="buy-btn">
							BUY NOW
						</Link>
					</div>
				</div>
			</div>

			<div className="lets-get-started-section">
				<div className="container">
					<h3>LET'S GET STARTED</h3>
					<div className="lets-get-started__text">
						<span>Discover Your Hunn</span>
						<span>Keep it Clean</span>
						<span>Plug & Go</span>
					</div>

					<Link to="/lets-get-started" className="lets-get-started__learn-more">
						Learn More{" "}
						<img src="/images/icons/arrow.svg" width="14" height="14" />
					</Link>
				</div>
			</div>

			<div id="contact-us" className="contact-us-section">
				<div className="container">
					<h2 className="contact-us-section__title">HERE TO HELP</h2>

					<p className="contact-us-section__description">
						Our Hunn Customer Care team will be happy to assist with any
						questions.
					</p>

					<ul className="contact-list">
						<li>
							<a href="tel: 1800884866">
								<img src="/images/home/call.svg" height="27" alt="call" />
								<h3>Hunn Hotline</h3>
							</a>

							<p>
								1800-88-4866 <br />
								9AM to 1PM, 2PM to 6PM(UTC +8)
								<br />
								Monday to Friday
								<br />
								Closed Saturday, Sunday and Public Holidays
							</p>
						</li>

						<li>
							<a href="mailto:cs@my.hunn-international.com">
								<img src="/images/home/email.svg" height="27" alt="email" />
								<h3>Write to Us</h3>
							</a>

							<p>
								Via email <br />
								cs@my.hunn-international.com
							</p>
						</li>
					</ul>
				</div>
			</div>
		</StyledHome>
	);
}

export default Home;
