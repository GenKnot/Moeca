import Breadcrumb from "@/components/Breadcrumb";
import TeamBannerSection from "@/components/PageSections/TeamBannerSection";
import TeamSectionThree from "@/components/PageSections/TeamSectionThree";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "Artist", to: "" },
];

export default function ArtistList() {
    return (
        <>
            <Breadcrumb menus={menus} />
            <TeamBannerSection />
            <TeamSectionThree />
            <NewsletterSection />
        </>
    );
}
