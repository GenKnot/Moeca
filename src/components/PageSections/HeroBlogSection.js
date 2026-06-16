"use client";

import { useTranslations } from "next-intl";
import blog1 from "@/assets/img/zhang/blog-exhibition-card.jpg";
import blog2 from "@/assets/img/zhang/project-landscape.jpg";
import blog3 from "@/assets/img/zhang/project-tiger.jpg";

const images = [blog1, blog2, blog3];

export default function HeroBlogSection() {
    const t = useTranslations("news");
    const posts = t.raw("posts");

    return (
        <div id="blog_page" className="hero-area">
            <div className="container">
                <div className="row hero-area-inner">
                    <div className="col-xl-9 col-lg-9">
                        <div className="hero-area-content">
                            <div className="section-title">
                                <h1>{t("title")}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    {posts.map((post, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <hr />
                            <div className="single-blog-item mt-30">
                                <div className="blog-bg">
                                    <img src={images[i].src} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p>{post.category}</p>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <p>by {post.author}</p>
                                        </div>
                                        <div className="blog-date">
                                            <p>{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
