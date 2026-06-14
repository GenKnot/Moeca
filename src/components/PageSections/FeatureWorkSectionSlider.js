"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import asteriskDark from "@/assets/img/asterisk-dark.png";

export default function FeatureWorkSectionSlider() {
    const t = useTranslations();
    const items = t.raw("marquee");

    const settings = {
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        dots: false,
    };

    return (
        <div className="funfacts_line dark-bg-1">
            <Slider {...settings} className="funfacts_item d-flex">
                {items.map((text, index) => (
                    <h5 key={index} className={`d-flex${index % 2 === 1 ? " stroke" : ""}`}>
                        <img src={asteriskDark.src} alt="" className="me-3 img-fluid" />
                        {text}
                    </h5>
                ))}
            </Slider>
        </div>
    );
}
