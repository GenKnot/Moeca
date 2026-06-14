import Image from "next/image";
import aboutImage from "@/assets/img/about/about-1.jpg";
import Link from "next/link";

export default function AboutSectionTwo() {
    return (
        <div className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
                        <div className="about-bg-wrap">
                            <Image src={aboutImage} alt="" style={{height: 'auto'}}/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
                        <div className="about-content-wrapper">
                            <div className="section-title">
                                <div className="heading-animation">
                                    <h2>About <span>/</span> <br/> MOECA</h2>
                                </div>
                            </div>
                            <div className="heading-animation">
                                <h3>A federally incorporated non-profit institution <br/> dedicated to Eastern cultures and arts</h3>
                            </div>
                            <div className="p-animation">
                                <p>Based in Montréal and serving an international audience, MOECA fosters intercultural understanding by presenting the artistic heritage of Eastern civilizations.</p>
                            </div>
                            <Link href="/about" className="theme-btn mt-30">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}