"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import team1 from "@/assets/img/team/1.jpg";
import team2 from "@/assets/img/team/2.jpg";
import team3 from "@/assets/img/team/3.jpg";
import team4 from "@/assets/img/team/4.jpg";
import team5 from "@/assets/img/team/5.jpg";
import team6 from "@/assets/img/team/6.jpg";

const images = [team1, team2, team3, team4, team5, team6];
const slugs = ["zhang-jinsheng", "wang-moyuan", "chen-xuanzhi", "li-yunfeng", "zhou-bishan", "wu-huaimo"];

export default function TeamSectionThree() {
    const t = useTranslations("team");
    const members = t.raw("members");

    return (
        <div id="team-page" className="team-section section-padding pt-50 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h2>{t("title")}</h2>
                            <span><i className="las la-arrow-down mt-30"></i></span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="row">
                            {members.slice(0, 2).map((member, i) => (
                                <div key={i} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <Link href={`/artist/${slugs[i]}`}>
                                        <div className="single-team-item">
                                            <div className="team-img">
                                                <img src={images[i].src} alt={member.name} style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            <div className="team-info">
                                                <h5>{member.name}</h5>
                                                <p>[{member.role}]</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {members.slice(2).map((member, i) => (
                        <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <Link href={`/artist/${slugs[i + 2]}`}>
                                <div className="single-team-item">
                                    <div className="team-img">
                                        <img src={images[i + 2].src} alt={member.name} style={{ width: "100%", height: "auto" }} />
                                    </div>
                                    <div className="team-info">
                                        <h5>{member.name}</h5>
                                        <p>[{member.role}]</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
