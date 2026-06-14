"use client";

import teamBg from "@/assets/img/team/team-bg.jpg";
import { useTranslations } from "next-intl";

export default function TeamBannerSection() {
    const t = useTranslations("team");

    return (
        <div className="team-area section-padding pt-0 pb-100">
            <div className="container">
                <div className="row align-items-center mt-30">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="team-bg-wrap">
                            <img src={teamBg.src} alt="MOECA Artists" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="team-content-wrapper">
                            <div className="section-title">
                                <h2>{t("banner_title")}</h2>
                            </div>
                            <h3>{t("banner_heading")}</h3>
                            <p>{t("banner_body")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
