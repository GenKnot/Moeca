"use client";

import { useTranslations } from "next-intl";
import img1 from "@/assets/img/zhang/masonry-01-tiger.jpg";
import img2 from "@/assets/img/zhang/masonry-02-tiger.jpg";
import img3 from "@/assets/img/zhang/masonry-03-tiger.jpg";
import img4 from "@/assets/img/zhang/masonry-04-landscape.jpg";
import img5 from "@/assets/img/zhang/masonry-05-landscape.jpg";
import img6 from "@/assets/img/zhang/masonry-06-lotus.jpg";
import img7 from "@/assets/img/zhang/masonry-07-lotus.jpg";
import img8 from "@/assets/img/zhang/masonry-08-calligraphy.jpg";
import img9 from "@/assets/img/zhang/masonry-09-horse.jpg";

const artworks = [
    { img: img1, title: null },
    { img: img2, title: null },
    { img: img3, title: null },
    { img: img4, title: null },
    { img: img5, title: null },
    { img: img6, title: null },
    { img: img7, title: null },
    { img: img8, title: null },
    { img: img9, title: null },
];

export default function ProjectSectionThree() {
    const t = useTranslations("featured");

    return (
        <div id="project-3" className="project-section section-padding pt-60 pb-100">
            <div className="container">
                <div className="row mb-40">
                    <div className="section-title">
                        <h2>{t("title")}</h2>
                    </div>
                </div>
                <div style={{
                    columns: "3 300px",
                    columnGap: "12px",
                }}>
                    {artworks.map((item, i) => (
                        <div key={i} style={{
                            breakInside: "avoid",
                            marginBottom: "12px",
                            overflow: "hidden",
                            borderRadius: "4px",
                        }}>
                            <img
                                src={item.img.src}
                                alt={`artwork-${i + 1}`}
                                style={{
                                    width: "100%",
                                    display: "block",
                                    transition: "transform 0.4s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
