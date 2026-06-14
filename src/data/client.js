import clientImg1 from "@/assets/img/client/1.png"
import clientImg2 from "@/assets/img/client/2.png"
import clientImg3 from "@/assets/img/client/3.png"
import clientImg4 from "@/assets/img/client/4.png"
import clientImg5 from "@/assets/img/client/5.png"

// 书画家签名墙 — 占位艺术家全部指向张近生介绍页
export const clients = [
    { id: 1, img: clientImg1, link: "/artist/zhang-jinsheng" },
    { id: 2, img: clientImg2, link: "/artist/wang-moyuan" },
    { id: 3, img: clientImg3, link: "/artist/chen-xuanzhi" },
    { id: 4, img: clientImg4, link: "/artist/li-yunfeng" },
    { id: 5, img: clientImg5, link: "/artist/zhou-bishan" },
];

export const chooseUsData = [
    {
        id: 1,
        title: "Innovative Design",
        image: new URL("@/assets/img/choose/1.jpg", import.meta.url),
    },
    {
        id: 2,
        title: "Exceptional Service",
        image: new URL("@/assets/img/choose/2.jpg", import.meta.url),
    },
    {
        id: 3,
        title: "Quality Craftsmanship",
        image: new URL("@/assets/img/choose/3.jpg", import.meta.url),
    },
    {
        id: 4,
        title: "Experienced Team",
        image: new URL("@/assets/img/choose/4.jpg", import.meta.url),
    }
];