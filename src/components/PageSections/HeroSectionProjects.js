"use client";

import { useTranslations } from "next-intl";
import featureImage from "@/assets/img/project/project-feature-img-2.jpg";

export default function HeroSectionProjects() {
    const t = useTranslations("exhibitions_hero");

    return (
        <div id="project_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>{t("title1")}<br/></h1>
                                <h1>{t("title2")}<i>/</i> {t("title3")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 text-end">
                        <div className="service-info">
                            <p>{t("since")}</p>
                            <h4>{t("tag1")}</h4>
                            <h4>{t("tag2")}</h4>
                            <h4>{t("tag3")}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-feature-img">
                <img src={featureImage.src} alt="MOECA Exhibitions"/>
            </div>
        </div>
    );
}
