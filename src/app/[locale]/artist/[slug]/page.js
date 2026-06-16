import { redirect } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import ArtistDetailsSection from "@/components/PageSections/ArtistDetailsSection";

const menus = [
    { label: "Artist", to: "/artist" },
    { label: "Profile", to: "" },
];

const FEATURED_ARTIST = "zhang-jinsheng";

export default async function ArtistShow({ params }) {
    const { slug, locale } = await params;

    if (slug !== FEATURED_ARTIST) {
        redirect(`/${locale}/artist/${FEATURED_ARTIST}`);
    }

    return (
        <>
            <Breadcrumb menus={menus} />
            <ArtistDetailsSection />
            <NewsletterSection />
        </>
    );
}
