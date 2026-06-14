"use client";

import { useTranslations } from "next-intl";

export default function WhyChooseUsSection() {
    const t = useTranslations("why_choose");
    const items = t.raw("items");

    return (
        <div className="why-choose-us-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="section-title">
                            <h2 style={{ fontSize: "clamp(2.2rem, 3.5vw, 4rem)", lineHeight: 1.15 }}>{t("title")}</h2>
                        </div>
                    </div>
                    <div className="offset-xl-0 col-xl-8 offset-lg-0 col-lg-8">
                        {items.map((item, index) => (
                            <div className="single-choose-item" key={index}>
                                <div className="single-choose-inner">
                                    <h5><span>{String(index + 1).padStart(2, "0")}</span>{item}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
