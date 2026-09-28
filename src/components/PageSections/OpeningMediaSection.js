"use client";

import { useTranslations } from "next-intl";

const videos = [
    { src: "/videos/exhibition-walkthrough-1.mp4", cover: "/images/opening/walkthrough-1-cover.jpg", key: "video1" },
    { src: "/videos/exhibition-walkthrough-2.mp4", cover: "/images/opening/walkthrough-2-cover.jpg", key: "video2" },
];

const frameStyle = {
    width: "100%",
    aspectRatio: "9 / 16",
    objectFit: "cover",
    maxWidth: "420px",
    margin: "0 auto",
    display: "block",
    background: "#111",
};

export default function OpeningMediaSection({ customClass = "section-padding pt-60 pb-60" }) {
    const t = useTranslations("opening");

    return (
        <div id="opening" className={customClass}>
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-8 col-lg-9">
                        <div className="section-title">
                            <h2>{t("title")}</h2>
                        </div>
                        <p className="mt-20">{t("desc")}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <a href="/images/opening/opening-poster.jpg" target="_blank" rel="noopener noreferrer">
                            <img src="/images/opening/opening-poster.jpg" alt={t("poster_caption")} style={{ ...frameStyle, objectFit: "contain", background: "none" }}/>
                        </a>
                        <p style={{ fontSize: "14px", maxWidth: "420px", margin: "15px auto 0" }}>{t("poster_caption")}</p>
                    </div>
                    {videos.map(v => (
                        <div key={v.key} className="col-lg-4 col-md-6 mb-30">
                            <video src={v.src} poster={v.cover} controls playsInline preload="none" style={frameStyle}/>
                            <p style={{ fontSize: "14px", maxWidth: "420px", margin: "15px auto 0" }}>{t(v.key)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
