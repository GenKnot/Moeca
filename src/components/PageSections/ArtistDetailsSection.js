"use client";

import { useTranslations, useLocale } from "next-intl";
import projectDetailsImage from "@/assets/img/project/project-details.jpg";
import solutionsImg from "@/assets/img/project/solutions-img.jpg";
import gallery1 from "@/assets/img/project/gallery-1.jpg";
import gallery2 from "@/assets/img/project/gallery-2.jpg";
import gallery3 from "@/assets/img/project/gallery-3.jpg";
import gallery4 from "@/assets/img/project/gallery-4.jpg";
import gallery5 from "@/assets/img/project/gallery-5.jpg";

const galleryImgs = [gallery1, gallery2, gallery3, gallery4];
const galleryBig = gallery5;

export default function ArtistDetailsSection() {
    const t = useTranslations("artist");
    const locale = useLocale();
    const brief = t.raw("brief");
    const info = t.raw("info");
    const timeline = t.raw("timeline");
    const captions = t.raw("gallery_captions");

    const artistBrief = [
        { label: t("born"),   value: brief.born },
        { label: t("origin"), value: brief.origin },
        { label: t("school"), value: brief.school },
    ];

    const artistInfo = [
        { label: info.studio_label, value: info.studio_value },
        { label: info.based_label,  value: info.based_value },
        { label: info.active_label, value: info.active_value },
    ];

    return (
        <div className="project-details-wrap section-padding pt-0">
            <div className="container">

                <div className="row gx-5 justify-content-around align-items-end mt-30">

                    <div className="col-xl-6 col-lg-6">
                        <div className="project-bg">
                            <img src={projectDetailsImage.src} alt="Zhang Jinsheng" />
                            <div className="project-brief-wrap">
                                {artistBrief.map((item, index) => (
                                    <div key={index} className={`single-brief ${item.className || ""}`}>
                                        <h6>{item.label}</h6>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="project-details-inner">
                            <div className="section-title">
                                {locale === "zh" ? (
                                    <h1>张<i>/</i><br />近生</h1>
                                ) : (
                                    <h1>Zhang <i>/</i> <br /> Jinsheng</h1>
                                )}
                                <h6 className="text-end">{t("title")}</h6>
                            </div>
                            <div className="project-details-info">
                                {artistInfo.map((info, index) => (
                                    <div key={index} className="single-info">
                                        <p>{info.label}</p>
                                        <h4>{info.value}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className="project-desc">
                                <p>{t("bio")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="challenge-section pt-60">
                    <div className="row">
                        <div className="col-xl-12 text-end">
                            <h4>{t("timeline_title")}</h4>
                        </div>
                        <div className="col-xl-12">
                            <div className="section-title">
                                <h3 style={{fontWeight: 300, fontSize: "1.4rem"}}>{t("timeline_subtitle")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 mt-20">
                        {timeline.map((item, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-20">
                                <div className="single-project-info">
                                    <h3 style={{ color: "#c9a84c", fontWeight: 300 }}>{item.year}</h3>
                                    <p style={{ marginTop: "0.5em" }}>{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="gallery-section mt-40">
                    <h4>{t("gallery_title")}</h4>
                    <hr />
                    <div className="row gx-3 gy-3 mt-20">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="row gx-3 gy-3">
                                {galleryImgs.map((img, index) => (
                                    <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="project-details-img">
                                            <img src={img.src} alt={captions[index]} />
                                            <figure><figcaption>{captions[index]}</figcaption></figure>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="project-details-img big-img">
                                <img src={galleryBig.src} alt={captions[4]} />
                                <figure><figcaption>{captions[4]}</figcaption></figure>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About the Work */}
                <hr />
                <div className="solutions-section section-padding pt-100 pb-0">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <h4>{t("about_title")}</h4>
                            <p>{t("about_text")}</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="solutions-img">
                                <img src={solutionsImg.src} alt="Zhang Jinsheng artwork" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="solutions-content">
                                <h3>{t("about_heading")}</h3>
                                <p>{t("about_body")}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
