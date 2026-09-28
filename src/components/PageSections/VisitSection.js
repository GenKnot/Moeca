"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MAPS_URL } from "@/data/museum";

const labelStyle = { fontSize: "13px", opacity: 0.6, margin: "0 0 4px" };

export default function VisitSection() {
    const t = useTranslations("visit");
    const tInfo = useTranslations("contact_info");
    const [result, setResult] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // Earliest selectable date: today (local time)
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (!formData.get("phone")?.trim() && !formData.get("email")?.trim()) {
            setResult("contact_required");
            return;
        }
        setSubmitting(true);
        setResult("");
        formData.append("access_key", "e8f10076-9586-4109-8483-3d71d778fc87");
        formData.append("subject", "MOECA Visit Booking / 预约参观");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResult("success");
                event.target.reset();
            } else {
                setResult("error");
            }
        } catch {
            setResult("error");
        }
        setSubmitting(false);
    };

    return (
        <div className="contact-section section-padding pt-0">
            <div className="container">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title mt-20">
                        <h1>{t("page_title")} <span><i className="las la-arrow-right"></i></span></h1>
                    </div>
                </div>
                <div className="row mt-60">
                    <div className="col-xl-5 col-lg-5">
                        <div className="contact-text">
                            <p>{t("intro")}</p>
                            <p style={{ borderLeft: "3px solid #171717", padding: "10px 16px", background: "#f5f5f3" }}>
                                {t("appointment_only")}
                            </p>
                        </div>
                        <div className="contact-info mt-60" style={{ height: "auto", justifyContent: "flex-start" }}>
                            <div className="section-title">
                                <h2>{t("info_title")} <span><i className="las la-arrow-right"></i></span></h2>
                            </div>
                            <div className="contact-info-inner mt-30">
                                <div className="single-contact-info">
                                    <p>{t("address_label")}</p>
                                    <h4 style={{ whiteSpace: "pre-line" }}><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">{tInfo("address")}</a></h4>
                                </div>
                                <div className="single-contact-info">
                                    <p>{t("phone_label")}</p>
                                    <h4><a href="tel:+14509840633">{tInfo("phone")}</a></h4>
                                </div>
                                <div className="single-contact-info">
                                    <p>{t("email_label")}</p>
                                    <h4><a href="mailto:info@moeca.ca">info@moeca.ca</a></h4>
                                </div>
                            </div>
                            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="theme-btn mt-30">
                                <i className="las la-map-marker"></i> {t("open_map")}
                            </a>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
                        <div className="subimit-form-wrap">
                            <div className="section-title">
                                <h2>{t("form_title")} <span><i className="las la-arrow-right"></i></span></h2>
                            </div>
                            <form onSubmit={onSubmit}>
                                <p style={{ marginBottom: "30px" }}>{t("form_note")}</p>
                                <input type="text" name="name" placeholder={t("name_placeholder")} required/>
                                <input type="tel" name="phone" placeholder={t("phone_placeholder")}/>
                                <input type="email" name="email" placeholder={t("email_placeholder")}/>
                                <label style={{ display: "block" }}>
                                    <p style={labelStyle}>{t("date_label")}</p>
                                    <input type="date" name="visit_date" min={today} required/>
                                </label>
                                <label style={{ display: "block" }}>
                                    <p style={labelStyle}>{t("time_label")}</p>
                                    <input type="time" name="visit_time" required/>
                                </label>
                                <input type="number" name="visitors" min="1" placeholder={t("visitors_placeholder")} required/>
                                <textarea name="notes" cols="30" rows="10" placeholder={t("notes_placeholder")}></textarea>
                                <input type="submit" value={submitting ? "..." : t("submit")} disabled={submitting} style={{ width: "auto", padding: "0 30px" }}/>
                                {result === "success" && (
                                    <p style={{ color: "#4a7c59", marginTop: "12px" }}>{t("success_msg")}</p>
                                )}
                                {(result === "error" || result === "contact_required") && (
                                    <p style={{ color: "#c0392b", marginTop: "12px" }}>
                                        {t(result === "error" ? "error_msg" : "contact_required")}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-info-wrap">
                    <div className="row mt-60">
                        <div className="col-xl-12">
                            <div className="google-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=597+chemin+de+Saint-Jean+La+Prairie+QC+J5R+2L2+Canada&output=embed&z=15"
                                    width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
