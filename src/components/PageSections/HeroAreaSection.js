import {getTranslations} from 'next-intl/server';
import HomepageSlides from "@/components/HomepageSlider";

export default async function HeroAreaSection() {
    const t = await getTranslations('hero');

    return (
        <div id="home-2" className="hero-area">
            <div className="container">
                <div className="row align-items-center justify-content-center hero-area-inner">
                    <div
                        className="col-xl-10 col-lg-10 col-md-10 text-center wow fadeInUp animated"
                        data-wow-delay="200ms"
                    >
                        <div className="hero-area-content">
                            <div className="section-title mb-0">
                                <h1 style={{whiteSpace: 'pre-line'}}>{t('title')}</h1>
                                <div className="p-animation">
                                    <p>{t('subtitle')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomepageSlides />
        </div>
    );
}
