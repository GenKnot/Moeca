"use client";

import ctaBg from "@/assets/img/cta-bg.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CtaAreaSection() {
    const t = useTranslations("cta");

    return (
        <section className="cta-img-area img-scale">
            <div className="cta-inner text-center">
                <div className="cta-img-wrap">
                    <img id="grow" src={ctaBg.src} alt="cta-img" data-speed="0.2" data-lag="0"/>
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "rgba(0,0,0,0.45)",
                    }}/>
                </div>
                <div className="section-title">
                    <div className="heading-animation">
                        <h2 className="text-white" style={{ whiteSpace: "pre-line" }}>{t("title")}</h2>
                    </div>
                    <Link href="/contact" className="theme-btn white-btn mt-30">{t("button")}</Link>
                </div>
            </div>
        </section>
    );
}
