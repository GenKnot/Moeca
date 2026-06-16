"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import blog1 from "@/assets/img/zhang/blog-exhibition-card.jpg";
import blog2 from "@/assets/img/zhang/project-landscape.jpg";
import blog3 from "@/assets/img/zhang/project-tiger.jpg";

const images = [blog1, blog2, blog3];
const delays = ["200ms", "400ms", "600ms"];

export default function BlogSection() {
    const t = useTranslations("news");
    const posts = t.raw("posts");

    return (
        <div className="blog-section blog-two section-padding pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>{t("title")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    {posts.map((post, i) => (
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated" data-wow-delay={delays[i]}>
                            <div className="single-blog-item">
                                <div className="blog-bg">
                                    <Image src={images[i]} alt={post.title} style={{ height: "auto" }} />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p>{post.category}</p>
                                    </div>
                                    <h3>
                                        <Link href="/blog">{post.title}</Link>
                                    </h3>
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
