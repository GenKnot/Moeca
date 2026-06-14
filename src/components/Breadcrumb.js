"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Breadcrumb({ menus }) {
    const t = useTranslations("nav");

    const labelMap = {
        "Home":        t("home"),
        "Artist":      t("artist"),
        "Profile":     t("profile"),
        "About":       t("about"),
        "Exhibitions": t("exhibitions"),
        "News":        t("news"),
        "Contact":     t("contact"),
    };

    return (
        <div className="breadcrumb-area pt-50">
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">{t("home")}</Link>
                            </li>
                            {menus.map((menu, index) => {
                                const isLast = index === menus.length - 1;
                                const label = labelMap[menu.label] || menu.label;
                                return (
                                    <li
                                        key={index}
                                        className={`breadcrumb-item ${isLast ? "active" : ""}`}
                                        aria-current={isLast ? "page" : undefined}
                                    >
                                        {isLast ? label : <Link href={menu.to}>{label}</Link>}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}
