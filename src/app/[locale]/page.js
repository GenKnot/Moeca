import HeroAreaSection from "@/components/PageSections/HeroAreaSection";
import ClientSection from "@/components/PageSections/ClientSection";
import AboutAreaSection from "@/components/PageSections/AboutAreaSection";
import CounterSection from "@/components/PageSections/CounterSection";
import ServiceSection from "@/components/PageSections/ServiceSection";
import FeatureWorkSectionSlider from "@/components/PageSections/FeatureWorkSectionSlider";
import ProcessSection from "@/components/PageSections/ProcessSection";
import TestimonialSection from "@/components/PageSections/TestimonialSection";
import TeamSection from "@/components/PageSections/TeamSection";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import BlogSection from "@/components/PageSections/BlogSection";
import ProjectSection from "@/components/PageSections/ProjectSection";

export default function Home() {
    return (
        <>
            {/*Hero Area*/}
            <HeroAreaSection/>

            {/*Client Section*/}
            <ClientSection customClass={'pt-100 pb-0'}/>

            {/*About Area*/}
            <AboutAreaSection/>

            {/*Counter Section*/}
            <CounterSection customClass={'pt-50 pb-50'}/>

            {/*Service Section*/}
            <ServiceSection/>

            {/*Project Section Slider*/}
            <FeatureWorkSectionSlider/>

            {/*Project Section*/}
            <ProjectSection/>

            {/*Project Section*/}
            <ProcessSection customClass={'pt-0 pb-40'}/>

            {/*Testimonial Section*/}
            <TestimonialSection customClass={'pt-0'}/>

            {/*Team Section*/}
            <TeamSection/>

            {/*CTA Area*/}
            <CtaAreaSection/>

            {/*Blog Section*/}
            <BlogSection/>

            {/*Newsletter Section*/}
            <NewsletterSection/>
        </>
    );
}
