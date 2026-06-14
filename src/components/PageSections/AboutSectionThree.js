import aboutImage from "@/assets/img/about/about-3.jpg";

export default function AboutSectionThree() {
    return (
        <div className="about-section section-padding pt-0">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="section-title">
                            <h2>About <br/> MOECA <span className="d-none d-md-block"><i
                                className="las la-arrow-down ml-40"></i></span></h2>
                        </div>
                        <div className="about-desc mt-60 pl-150">
                            <p>MOECA is a federally incorporated non-profit cultural institution dedicated to the preservation, research, exhibition, and promotion of Eastern cultures and arts. We believe that art and culture transcend borders, providing a powerful platform for dialogue and shared understanding.</p>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 col-md-6 text-end">
                        <div className="about-img">
                            <img src={aboutImage.src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}