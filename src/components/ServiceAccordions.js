"use client";

import { useTranslations } from "next-intl";
import service1 from "@/assets/img/service/service-1.jpg";
import service2 from "@/assets/img/service/service-2.jpg";
import service3 from "@/assets/img/service/service-3.jpg";
import service4 from "@/assets/img/service/service-4.jpg";
import service5 from "@/assets/img/service/service-5.jpg";
import service6 from "@/assets/img/service/service-6.jpg";

const images = [service1, service2, service3, service4, service5, service6];

export default function ServiceAccordions() {
    const t = useTranslations("services");
    const items = t.raw("items");

    return (
        <div className="accordions" id="accordionExample">
            {items.map((item, index) => (
                <div className="accordion-items" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-buttons ${index === 0 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${index}`}
                        >
                            <span>{item.number}</span>
                            {item.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <img src={images[index].src} alt={item.title}/>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
