"use client";

import { useTranslations } from "next-intl";

export default function NewsletterSection() {
    const t = useTranslations("newsletter");

    return (
        <div className="newsletter-section">
            <div className="container">
                <div className="row newsletter-inner gray-bg align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2 style={{ whiteSpace: "pre-line" }}>
                                    {t("title")} <span><i className="las la-arrow-right"></i></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="newsletter-content">
                            <p>{t("desc")}</p>
                            <div className="subscribed-form">
                                <form>
                                    <input type="email" placeholder={t("placeholder")} />
                                    <input className="bordered-btn" type="submit" value={t("button")} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
