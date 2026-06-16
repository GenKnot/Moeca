import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionProjects from "@/components/PageSections/HeroSectionProjects";
import ServiceSectionSix from "@/components/PageSections/ServiceSectionSix";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import ClientSection from "@/components/PageSections/ClientSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import PaginatedArtworkGallery from "@/components/PageSections/PaginatedArtworkGallery";

const menus = [
    { label: "Exhibitions", to: "" },
];

export default function Exhibitions() {
    return (
        <>
            <Breadcrumb menus={menus} />
            <HeroSectionProjects />
            <ServiceSectionSix />
            <ProjectSectionThree />
            <PaginatedArtworkGallery />
            <NewsletterSection />
        </>
    );
}
