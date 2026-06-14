"use client";

import Image from "next/image";
import testimonialBg from "@/assets/img/testimonial-bg.jpg";
import straightQuotes from "@/assets/img/straight-quotes.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function TestimonialSection({ customClass }) {
    const t = useTranslations("testimonial");
    const items = t.raw("items");
    const swiperRef = useRef(null);

    return (
        <div className={`testimonial-section section-padding ${customClass}`}>
            <div className="container">
                <div className="row">
                    <div className="offset-xl-6 col-xl-6 offset-lg-6 col-lg-6">
                        <div className="section-title text-end">
                            <div className="heading-animation">
                                <h2>{t("title")} <br/> <span><i className="las la-arrow-down"></i></span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row mt-50">
                    <div className="col-xl-7 col-lg-7">
                        <div className="testimonial-wrapper position-relative">
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                modules={[Autoplay, Navigation]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                            >
                                {items.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="single-testimonial-item">
                                            <div className="quote-icon">
                                                <Image src={straightQuotes} alt="" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="testimonial-author">
                                                <h6 className="text-black">
                                                    {item.author} <span>{item.location}</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="owl-nav z-9999">
                                <button type="button" className="owl-prev" onClick={() => swiperRef.current?.slidePrev()}>
                                    <i className="las la-arrow-left"></i>
                                </button>
                                <button type="button" className="owl-next" onClick={() => swiperRef.current?.slideNext()}>
                                    <i className="las la-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-bg-wrapper d-none d-md-block" style={{ borderRadius: "16px", overflow: "hidden" }}>
                            <Image src={testimonialBg} alt="Zhang Jinsheng at work" style={{ height: "auto", display: "block" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
