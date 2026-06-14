"use client";

import { useTranslations } from "next-intl";
import featureImage from "@/assets/img/about/about-feature-img.jpg";

export default function HeroAboutPageSection() {
    const t = useTranslations("about_hero");

    return (
        <div id="about_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>{t("title1")} <i>/</i> <br/></h1>
                                <h1 className="pl-150">{t("title2")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block text-lg-end">
                        <h4>{t("subtitle")}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="about-feature-img">
                        <img src={featureImage.src} alt="MOECA"/>
                    </div>
                </div>
                <div className="row mt-30">
                    <p>{t("p1")}</p>
                    <p>{t("p2")}</p>
                </div>
            </div>
        </div>
    );
}
