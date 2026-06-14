"use client";

import { useTranslations } from "next-intl";
import ServiceAccordions from "@/components/ServiceAccordions";

export default function ServiceSectionFour() {
    const t = useTranslations("services");

    return (
        <div id="service-3" className="service-section section-padding pt-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-end">
                        <div className="section-title">
                            <h2>{t("title")}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cp-custom-accordion">
                            <ServiceAccordions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
