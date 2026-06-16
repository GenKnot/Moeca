"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const quickLinks = [
    { id: 1, labelKey: "zhang_jinsheng", href: "/artist/zhang-jinsheng" },
    { id: 2, labelKey: "about", href: "/about" },
    { id: 3, labelKey: "exhibitions", href: "/exhibitions" },
    { id: 4, labelKey: "gallery", href: "/exhibitions#artwork-gallery" },
    { id: 5, labelKey: "contact", href: "/contact" },
];

export default function ClientSection({ customClass}) {
    const t = useTranslations("nav");

    return (
        <div className={`client-area section-padding ${customClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div
                            className="client-wrap"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                alignItems: "center",
                                gap: "24px",
                            }}
                        >
                            {quickLinks.map((item) => (
                                <div key={item.id} className="single-client" style={{ width: "auto", marginLeft: 0 }}>
                                    <Link
                                        href={item.href}
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            textAlign: "center",
                                            fontFamily: "Georgia, 'Times New Roman', serif",
                                            fontStyle: "italic",
                                            fontSize: "32px",
                                            lineHeight: 1.2,
                                            color: "#7a7a7a",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {t(item.labelKey)}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
