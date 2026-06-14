import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Preloader from '@/components/Preloader.js';
import MouseCursor from '@/components/MouseCursor';
import Header from '@/components/Header';
import SearchDropdown from '@/components/SearchDropdown';
import OffCanvas from '@/components/OffCanvas';
import FooterBottomAreaSection from '@/components/PageSections/FooterBottomAreaSection';
import FooterAreaSection from '@/components/PageSections/FooterAreaSection';
import Script from 'next/script';
import WowProvider from '@/components/WowProvider';
import {AppWrapper} from '@/context';
import BackToTop from '@/components/BackToTop';

const META = {
    zh: {
        title: '加拿大东方文化艺术博物馆 | MOECA',
        description: '加拿大联邦注册非营利文化机构，立足蒙特利尔，致力于东方文化艺术的收藏、研究、展示与传播，搭建连接东方与西方的文化桥梁。',
        siteName: '加拿大东方文化艺术博物馆',
    },
    en: {
        title: 'MOECA | Canadian Museum of Eastern Culture and Art',
        description: 'A federally incorporated non-profit in Montréal dedicated to the preservation, research and promotion of Eastern cultures and arts. Preserving Heritage. Inspiring Dialogue. Bridging Cultures.',
        siteName: 'Canadian Museum of Eastern Culture and Art',
    },
    fr: {
        title: 'MOECA | Musée Canadien des Cultures et des Arts de l\'Orient',
        description: 'Organisme culturel sans but lucratif établi à Montréal, dédié à la préservation, la recherche et la promotion des cultures et arts de l\'Orient.',
        siteName: 'Musée Canadien des Cultures et des Arts de l\'Orient',
    },
};

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const m = META[locale] || META.en;
    const url = `https://moeca.ca/${locale}`;
    const ogImage = 'https://moeca.ca/images/og-image.jpg';

    return {
        title: m.title,
        description: m.description,
        metadataBase: new URL('https://moeca.ca'),
        openGraph: {
            title: m.title,
            description: m.description,
            url,
            siteName: m.siteName,
            images: [{ url: ogImage, width: 1200, height: 630, alt: m.siteName }],
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: m.title,
            description: m.description,
            images: [ogImage],
        },
        alternates: {
            canonical: url,
            languages: {
                'zh': 'https://moeca.ca/zh',
                'en': 'https://moeca.ca/en',
                'fr': 'https://moeca.ca/fr',
            },
        },
    };
}

export default async function LocaleLayout({children, params}) {
    const {locale} = await params;
    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <WowProvider/>
            <Preloader/>
            <MouseCursor/>
            <div id="smooth-wrapper">
                <AppWrapper>
                    <Header/>
                    <div id="smooth-content">
                        <div>{children}</div>
                        <FooterAreaSection/>
                        <FooterBottomAreaSection/>
                    </div>
                </AppWrapper>
            </div>
            <SearchDropdown/>
            <OffCanvas/>
            <div className="offcanvas-overlay"></div>
            <BackToTop/>
            <Script src="/assets/js/popper.min.js"/>
            <Script src="/assets/js/bootstrap.min.js"/>
            <Script src="/assets/js/gsap.min.js"/>
            <Script src="/assets/js/gsap-scroll-to-plugin.js"/>
            <Script src="/assets/js/SplitText.min.js"/>
            <Script src="/assets/js/ScrollSmoother.min.js"/>
            <Script src="/assets/js/ScrollTrigger.min.js"/>
            <Script src="/assets/js/smoother-script.js"/>
            <Script src="/assets/js/heading-animation.js"/>
            <Script src="/assets/js/paragraph-animation.js"/>
        </NextIntlClientProvider>
    );
}
