"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function FooterAreaSection() {
    const t = useTranslations("footer");
    const links = t.raw("links");

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="/" className="logo">
                                <Image src="/logo.png" alt="MOECA" width={160} height={40} style={{ height: "60px", width: "auto" }}/>
                            </Link>
                            <p style={{ whiteSpace: "pre-line" }}>{t("desc")}</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>{t("office_title")}</h5>
                            <p>597, chemin de la Sirène<br/>Montréal, Canada</p>
                            <div className="company-email">
                                <a href="mailto:info@moeca.ca">info@moeca.ca</a>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6">
                            <h5>{t("links_title")}</h5>
                            <ul>
                                <li>
                                    {links.map((link, i) => (
                                        <Link key={i} href={link.href}>{link.label}</Link>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>{t("contact_title")}</h5>
                            <ul>
                                <li>
                                    <div className="company-email">
                                        <a href="mailto:info@moeca.ca">info@moeca.ca</a>
                                    </div>
                                    <p style={{ marginTop: "12px", fontSize: "14px", opacity: 0.7 }}>
                                        597, chemin de la Sirène<br/>Montréal, Canada
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
