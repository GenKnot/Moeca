"use client";

import { useTranslations } from "next-intl";
import { zhangGalleryItems } from "@/data/zhangGallery";

const featuredIds = [65, 74, 78, 32, 54, 104, 88, 29];

export default function FeaturedArtworkMasonry({ gray = false }) {
    const t = useTranslations("featured_artworks");
    const categories = t.raw("categories");
    const artworks = featuredIds
        .map(id => zhangGalleryItems.find(item => item.id === id))
        .filter(Boolean);

    return (
        <div className={`team-section section-padding pb-100${gray ? " gray-bg" : ""}`}>
            <div className="container">
                <div className="row align-items-end mb-40">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>{t("title")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <p>{t("desc")}</p>
                    </div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "16px",
                    }}
                >
                    {artworks.map((item, index) => (
                        <div
                            key={item.id}
                            className="wow fadeInUp animated"
                            data-wow-delay={`${(index % 4) * 100 + 100}ms`}
                            style={{
                                overflow: "hidden",
                                borderRadius: "4px",
                                background: "#fff",
                            }}
                        >
                            <div
                                style={{
                                    height: "320px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "14px",
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={`${categories[item.category]} ${item.id}`}
                                    loading="lazy"
                                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                                />
                            </div>
                            <div style={{ padding: "12px 0 4px" }}>
                                <p style={{ margin: 0, opacity: 0.7 }}>[{categories[item.category]}]</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
