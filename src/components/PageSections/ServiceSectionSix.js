"use client";

import { useTranslations } from "next-intl";
import serviceBg from "@/assets/img/service/service-bg.jpg";

export default function ServiceSectionSix() {
    const t = useTranslations("services");
    const items = t.raw("items");

    return (
        <div className="service-section service-two section-padding pb-50">
            <div className="container">
                <div className="row justify-content-center text-end">
                    <div className="section-title">
                        <h2>{t("section_title")}</h2>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="col-xl-6 col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExhibitions">
                                {items.map((item, index) => (
                                    <div key={index} className="accordion-items">
                                        <h2 className="accordion-header" id={`exh-heading${index}`}>
                                            <button
                                                className={`accordion-buttons ${index === 0 ? "" : "collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#exh-collapse${index}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`exh-collapse${index}`}
                                            >
                                                <span>{item.number}</span>
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div
                                            id={`exh-collapse${index}`}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            aria-labelledby={`exh-heading${index}`}
                                            data-bs-parent="#accordionExhibitions"
                                        >
                                            <div className="accordion-body">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="service-bg-wrap">
                            <img src={serviceBg.src} alt="MOECA Exhibitions" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
