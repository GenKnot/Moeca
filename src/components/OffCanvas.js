"use client";

import Image from "next/image";
import offCanvasImg from "@/assets/img/offcanvas-img.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function OffCanvas() {
    const t = useTranslations("offcanvas");
    const tNav = useTranslations("nav");

    return (
        <div className="extra-info">
            <div className="close-icon menu-close">
                <button><i className="las la-times"></i></button>
            </div>
            <div className="logo-side mb-30">
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo.png" alt="MOECA" width={160} height={40} style={{ height: "60px", width: "auto" }} />
                    </Link>
                </div>
            </div>
            <div className="side-info">
                <div className="contact-list mb-40">
                    <p>{t("desc")}</p>
                    <Image src={offCanvasImg} alt="MOECA" style={{ height: "auto" }} />
                    <div className="mt-30 mb-30">
                        <Link href="/visit" className="white-btn" style={{ marginRight: "10px" }}>{tNav("book")}</Link>
                        <Link href="/contact" className="white-btn">{t("button")}</Link>
                    </div>
                </div>
                <div className="social-area-wrap">
                    <a href="tel:+14509840633" style={{ fontSize: "14px", display: "block", marginBottom: "6px" }}>(450) 984-0633</a>
                    <a href="mailto:info@moeca.ca" style={{ fontSize: "14px" }}>info@moeca.ca</a>
                </div>
            </div>
        </div>
    );
}
