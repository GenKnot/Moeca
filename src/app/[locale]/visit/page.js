import Breadcrumb from "@/components/Breadcrumb";
import VisitSection from "@/components/PageSections/VisitSection";

const menus = [
    { label: "Book", to: "" },
];

export default function Visit() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Visit Section*/}
            <VisitSection />
        </>
    )
}
