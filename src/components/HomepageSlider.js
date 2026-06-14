"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useTranslations } from "next-intl";
import {sliderImages} from "@/data/slider";

export default function HomepageSlides() {
    const swiperRef = useRef(null);
    const t = useTranslations("slider");
    const slides = t.raw("slides");

    return (
        <div className="slider-wrapper position-relative">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                className="homepage-slides"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="single-slide-item">
                        <div
                            className="slider-bg bg-cover"
                            style={{
                                backgroundImage: `url(${sliderImages[index]?.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "500px",
                            }}
                        ></div>

                        <div className="project-dtl-wrap float-end end-0">
                            <div className="project-dtl-info dark-bg">
                                <div className="project-title">
                                    <h6>{t("label")}</h6>
                                    <h2 className="text-white">{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                </div>
                                <div className="project-info-wrap">
                                    <div className="row gx-0">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-project-info">
                                                <p>{t("location_label")}</p>
                                                <h6>{slide.address}</h6>
                                            </div>
                                            <div className="single-project-info">
                                                <p>{t("medium_label")}</p>
                                                <h6>{slide.medium}</h6>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-project-info">
                                                <p>{t("style_label")}</p>
                                                <h6>{slide.style}</h6>
                                            </div>
                                            <div className="single-project-info">
                                                <p>{t("artist_label")}</p>
                                                <h6>{slide.artist}</h6>
                                            </div>
                                        </div>

                                        <div className="owl-nav">
                                            <button
                                                type="button"
                                                role="presentation"
                                                className="owl-prev"
                                                onClick={() => swiperRef.current?.slidePrev()}
                                            >
                                                <i className="las la-arrow-left"></i>
                                            </button>
                                            <button
                                                type="button"
                                                role="presentation"
                                                className="owl-next"
                                                onClick={() => swiperRef.current?.slideNext()}
                                            >
                                                <i className="las la-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
