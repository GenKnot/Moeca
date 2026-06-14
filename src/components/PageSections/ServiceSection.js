"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import service1 from "@/assets/img/service/service-1.jpg";
import service2 from "@/assets/img/service/service-2.jpg";
import service3 from "@/assets/img/service/service-3.jpg";
import service4 from "@/assets/img/service/service-4.jpg";
import service5 from "@/assets/img/service/service-5.jpg";
import service6 from "@/assets/img/service/service-6.jpg";

const serviceImages = [service1, service2, service3, service4, service5, service6];

export default function ServiceSection() {
    const t = useTranslations("services");
    const items = t.raw("items");

    return (
        <div className="service-section section-padding pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="services-tab-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>{t("title")}</h2>
                                </div>
                            </div>
                            <div className="services-tabs mt-100">
                                <ul className="nav nav-tabs" role="tablist">
                                    {items.map((item, index) => (
                                        <li role="presentation" key={index}>
                                            <a
                                                href={`#service-tab-${index}`}
                                                className={index === 0 ? "active" : ""}
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls={`service-tab-${index}`}
                                                aria-selected={index === 0 ? "true" : "false"}
                                            >
                                                {item.title}
                                                <span className="number">{item.number}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="tab-content services-content">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`tab-pane services-content-item fade ${index === 0 ? "active show" : ""}`}
                                    id={`service-tab-${index}`}
                                    role="tabpanel"
                                >
                                    <div className="services-text">
                                        <div className="services-text-container">
                                            <h4 className="services-title">{item.title}</h4>
                                            <p className="text-gray mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                    <Image
                                        className="services-image"
                                        src={serviceImages[index]}
                                        alt={item.title}
                                        style={{ height: "auto" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
