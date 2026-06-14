"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import projectImg1 from "@/assets/img/project/2-1.jpg";
import projectImg2 from "@/assets/img/project/2-2.jpg";
import projectImg3 from "@/assets/img/project/2-3.jpg";
import projectImg4 from "@/assets/img/project/2-4.jpg";

const images = [projectImg1, projectImg2, projectImg4, projectImg3];
const layouts = [
    "col-xl-7 col-lg-7 col-md-6",
    "col-xl-5 col-lg-5 col-md-6",
    "col-xl-5 col-lg-5 col-md-6",
    "col-xl-7 col-lg-7 col-md-6",
];

function Lightbox({ index, items, onClose }) {
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return createPortal(
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 99999,
                background: "rgba(0,0,0,0.92)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "zoom-out",
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: "fixed", top: 24, right: 32,
                    background: "none", border: "none", color: "#fff",
                    fontSize: 40, cursor: "pointer", lineHeight: 1, zIndex: 100000,
                }}
            >×</button>
            <img
                src={images[index].src}
                alt={items[index]?.title}
                onClick={e => e.stopPropagation()}
                style={{
                    maxWidth: "90vw", maxHeight: "85vh",
                    objectFit: "contain",
                }}
            />
            <div style={{
                position: "fixed", bottom: 32, left: 0, right: 0,
                textAlign: "center", color: "#fff", pointerEvents: "none",
            }}>
                <h4 style={{ margin: 0, fontWeight: 300 }}>{items[index]?.title}</h4>
                <p style={{ margin: "4px 0 0", opacity: 0.6 }}>[{items[index]?.category}]</p>
            </div>
        </div>,
        document.body
    );
}

export default function ProjectSection() {
    const t = useTranslations("projects");
    const items = t.raw("items");
    const [lightbox, setLightbox] = useState(null);

    return (
        <>
            <div id="project-2" className="project-section section-padding pt-0 pb-100">
                <div className="project-two-wrapper">
                    <div className="row">
                        {items.slice(0, 2).map((item, i) => (
                            <div key={i} className={layouts[i]}>
                                <div
                                    className="single-project-wrapper"
                                    style={{ backgroundImage: `url(${images[i].src})`, backgroundSize: "cover", cursor: "pointer" }}
                                    onClick={() => setLightbox(i)}
                                >
                                    <div className="project-info-inner d-flex">
                                        <div className="project-info">
                                            <h3>{item.title}</h3>
                                            <p>[{item.category}]</p>
                                        </div>
                                        <div className="project-details-link">
                                            <i className="las la-expand"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-4">
                        {items.slice(2).map((item, i) => (
                            <div key={i} className={layouts[i + 2]}>
                                <div
                                    className="single-project-wrapper"
                                    style={{ backgroundImage: `url(${images[i + 2].src})`, backgroundSize: "cover", cursor: "pointer" }}
                                    onClick={() => setLightbox(i + 2)}
                                >
                                    <div className="project-info-inner">
                                        <div className="project-info">
                                            <h3>{item.title}</h3>
                                            <p>[{item.category}]</p>
                                        </div>
                                        <div className="project-details-link">
                                            <i className="las la-expand"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {lightbox !== null && (
                <Lightbox index={lightbox} items={items} onClose={() => setLightbox(null)} />
            )}
        </>
    );
}
