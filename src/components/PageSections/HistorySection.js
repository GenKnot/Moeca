"use client";

import { useTranslations } from "next-intl";
import historyImage1 from "@/assets/img/about/history-1.jpg";
import historyImage2 from "@/assets/img/about/history-2.jpg";
import historyImage3 from "@/assets/img/about/history-3.jpg";

export default function HistorySection() {
    const t = useTranslations("history");

    return (
        <div className="history-section section-padding pt-60 pb-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage1.src} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>{t("block1_title")}</h5>
                                <p>{t("block1_year")}</p>
                                <p>{t("block1_desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img d-none d-lg-block">
                                <img src={historyImage2.src} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="timeline-wrap"></div>
                </div>

                <div className="row mt-120 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 order-2">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>{t("block2_title")}</h5>
                                <p>{t("block2_year")}</p>
                                <p>{t("block2_desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 order-1 order-xl-2">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage3.src} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 d-xs-block d-xl-none mt-60 order-3">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage2.src} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 order-4">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>{t("block3_title")}</h5>
                                <p>{t("block3_year")}</p>
                                <p>{t("block3_desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
