"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { zhangGalleryItems } from "@/data/zhangGallery";

const pageSize = 24;

export default function PaginatedArtworkGallery() {
    const t = useTranslations("artwork_gallery");
    const categories = t.raw("categories");
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(zhangGalleryItems.length / pageSize);

    const pageItems = useMemo(() => {
        const start = (page - 1) * pageSize;
        return zhangGalleryItems.slice(start, start + pageSize);
    }, [page]);

    const goToPage = nextPage => {
        setPage(nextPage);
        document.getElementById("artwork-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div id="artwork-gallery" className="project-section section-padding pt-60 pb-100">
            <div className="container">
                <div className="row align-items-end mb-40">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title">
                            <h2>{t("title")}</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <p>{t("desc")}</p>
                        <p style={{ opacity: 0.65, marginTop: "8px" }}>
                            {t("count", { count: zhangGalleryItems.length })}
                        </p>
                    </div>
                </div>

                <div style={{ columns: "4 240px", columnGap: "12px" }}>
                    {pageItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="wow fadeInUp animated"
                            data-wow-delay={`${(index % 4) * 80 + 80}ms`}
                            style={{
                                breakInside: "avoid",
                                marginBottom: "12px",
                                overflow: "hidden",
                                borderRadius: "4px",
                            }}
                        >
                            <img
                                src={item.src}
                                alt={`${categories[item.category]} ${item.id}`}
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    transition: "transform 0.4s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            />
                            <p style={{ margin: "8px 0 4px", opacity: 0.7 }}>[{categories[item.category]}]</p>
                        </div>
                    ))}
                </div>

                <div className="row mt-40">
                    <div className="col-xl-12">
                        <div className="d-flex justify-content-center gap-2 flex-wrap">
                            <button
                                type="button"
                                role="presentation"
                                disabled={page === 1}
                                onClick={() => goToPage(page - 1)}
                                aria-label={t("prev")}
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    border: "1px solid #ddd",
                                    background: page === 1 ? "#f5f5f5" : "#fff",
                                    opacity: page === 1 ? 0.45 : 1,
                                }}
                            >
                                <i className="las la-arrow-left"></i>
                            </button>
                            {Array.from({ length: pageCount }, (_, index) => index + 1).map(pageNumber => (
                                <button
                                    key={pageNumber}
                                    type="button"
                                    role="presentation"
                                    onClick={() => goToPage(pageNumber)}
                                    aria-label={t("page", { page: pageNumber })}
                                    style={{
                                        minWidth: "44px",
                                        height: "44px",
                                        padding: 0,
                                        border: "1px solid #ddd",
                                        background: pageNumber === page ? "#111" : "#fff",
                                        color: pageNumber === page ? "#fff" : "#111",
                                    }}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                            <button
                                type="button"
                                role="presentation"
                                disabled={page === pageCount}
                                onClick={() => goToPage(page + 1)}
                                aria-label={t("next")}
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    border: "1px solid #ddd",
                                    background: page === pageCount ? "#f5f5f5" : "#fff",
                                    opacity: page === pageCount ? 0.45 : 1,
                                }}
                            >
                                <i className="las la-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
