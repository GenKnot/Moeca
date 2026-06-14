import Breadcrumb from "@/components/Breadcrumb";
import HeroAboutPageSection from "@/components/PageSections/HeroAboutPageSection";
import HistorySection from "@/components/PageSections/HistorySection";
import ServiceSectionFour from "@/components/PageSections/ServiceSectionFour";
import WhyChooseUsSection from "@/components/PageSections/WhyChooseUsSection";
import CounterSection from "@/components/PageSections/CounterSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "About", to: "" },
];

export const metadata = {
    title: "About Us | MOECA — Canadian Museum of Eastern Culture and Art",
    description: "Learn about MOECA's mission, vision, and history as Canada's leading institution for Eastern cultures and arts.",
};

export default function About() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroAboutPageSection />

            {/*History Section*/}
            <HistorySection />

            {/*Service Section*/}
            <ServiceSectionFour />

            {/*Why Choose Us Section*/}
            <WhyChooseUsSection />

            {/*Counter Section*/}
            <CounterSection customClass={'pt-0 pb-50'}/>

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}