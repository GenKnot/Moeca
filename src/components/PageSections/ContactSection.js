"use client";

import { useState } from "react";
import contactBg from "@/assets/img/contact-bg.jpg";
import { useTranslations } from "next-intl";

export default function ContactSection() {
    const t = useTranslations("contact");
    const [result, setResult] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setResult("");
        const formData = new FormData(event.target);
        formData.append("access_key", "e8f10076-9586-4109-8483-3d71d778fc87");
        formData.append("subject", "MOECA Website Enquiry");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        setSubmitting(false);
        if (data.success) {
            setResult("success");
            event.target.reset();
        } else {
            setResult("error");
        }
    };

    return (
        <div className="contact-section section-padding pt-0">
            <div className="container">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mt-20">
                        <h1>{t("page_title")} <span><i className="las la-arrow-right"></i></span></h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-60">
                    <div className="col-xl-12">
                        <img src={contactBg.src} alt=""/>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-text">
                            <p>{t("intro")}</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2>{t("form_title")} <span><i className="las la-arrow-right"></i></span></h2>
                            </div>
                            <form onSubmit={onSubmit}>
                                <input type="text" name="name" placeholder={t("name_placeholder")} required/>
                                <input type="email" name="email" placeholder={t("email_placeholder")} required/>
                                <input type="tel" name="phone" placeholder={t("phone_placeholder")}/>
                                <textarea name="message" cols="30" rows="10" placeholder={t("message_placeholder")} required></textarea>
                                <input type="submit" value={submitting ? "..." : t("submit")} disabled={submitting}/>
                                {result === "success" && (
                                    <p style={{ color: "#4a7c59", marginTop: "12px" }}>
                                        {t("success_msg") || "✓ Message sent successfully."}
                                    </p>
                                )}
                                {result === "error" && (
                                    <p style={{ color: "#c0392b", marginTop: "12px" }}>
                                        {t("error_msg") || "Something went wrong. Please try again."}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-info-wrap">
                    <div className="row mt-60">
                        <div className="col-xl-6">
                            <div className="google-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=597+chemin+de+la+Sirene+Montreal+QC+Canada&output=embed&z=15"
                                    width="600" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-info">
                                <div className="section-title">
                                    <h2>{t("info_title")} <span><i className="las la-arrow-right"></i></span></h2>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="single-contact-info">
                                        <p>{t("museum_name")}</p>
                                        <h4>{t("museum_name_fr")}</h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>{t("email_label")}</p>
                                        <h4><a href="mailto:info@moeca.ca">info@moeca.ca</a></h4>
                                    </div>
                                    <div className="single-contact-info">
                                        <p>{t("address_label")}</p>
                                        <h4 style={{ whiteSpace: "pre-line" }}>{t("address")}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
