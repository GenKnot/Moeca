import slideImage3 from "@/assets/img/slider/slide-3.jpg";
import slideImage4 from "@/assets/img/slider/slide-4.jpg";
import slideImage5 from "@/assets/img/slider/slide-5.jpg";
import slideImage6 from "@/assets/img/slider/slide-6.jpg";

// 图片顺序对应 messages/*.json slider.slides 数组顺序
// [0] slide-3: 多虎展厅（虎啸山林）
// [1] slide-4: 白色长廊山水（山水·人文）
// [2] slide-5: 清水混凝土大虎（威震八方）
// [3] slide-6: 第四张
export const sliderImages = [slideImage3, slideImage4, slideImage5, slideImage6];

import testimonialImg2 from "@/assets/img/testimonial/2.png";
import testimonialImg1 from "@/assets/img/testimonial/1.png";

export const testimonialOneData = [
    {
        id: 1,
        content:
            "MOECA's exhibitions are a remarkable window into Eastern civilization. The curation is thoughtful, the artworks breathtaking. An essential cultural institution for Montréal.",
        author: "Paul Scholes",
        location: "Manchester, UK",
        image: testimonialImg2,
    },
    {
        id: 2,
        content:
            "A beautiful and inspiring space. MOECA bridges Eastern and Western cultures with grace and depth. The collection of works by Zhang Jinsheng is truly extraordinary.",
        author: "Lisa Ray",
        location: "New York, USA",
        image: testimonialImg1,
    },
];

// Import testimonial images
import testimonial2Img4 from "@/assets/img/testimonial/4.jpg";
import testimonial2Img5 from "@/assets/img/testimonial/5.jpg";
import testimonial2Img6 from "@/assets/img/testimonial/6.jpg";
import testimonial2Img7 from "@/assets/img/testimonial/7.jpg";

// Testimonial Data
export const testimonialsTwoData = [
    { id: 1, name: "Ryans Gigs", position: "Managing Director", image: testimonial2Img4, review: "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of a kind." },
    { id: 2, name: "Paul Scholes", position: "Director", image: testimonial2Img5, review: "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of a kind." },
    { id: 3, name: "Alex Ferguson", position: "Chief Executive Officer", image: testimonial2Img6, review: "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of a kind." },
    { id: 4, name: "Eric Cantona", position: "Chief Advisor", image: testimonial2Img7, review: "I was especially impressed by their attention to detail and their ability to incorporate unique design elements that truly make my home one of a kind." },
];
