"use client";

import { useTranslations } from "next-intl";

export default function ProcessSection({ customClass }) {
    const t = useTranslations("process");
    const items = t.raw("items");

    return (
        <div className={`process-section bg-cover section-padding ${customClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>{t("title")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mt-30">
                    {items.slice(0, 3).map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay={`${(i + 1) * 200}ms`}>
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>{item.num}<i className="las la-arrow-right"></i></h2>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row gx-0">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="process-bg"></div>
                    </div>
                    {items.slice(3).map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay={`${(i + 1) * 200}ms`}>
                            <div className="single-process-item">
                                <div className="process-num">
                                    <h2>{item.num}<i className="las la-arrow-right"></i></h2>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
