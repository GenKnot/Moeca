import team1 from "@/assets/img/zhang/artist-portrait-square.jpg";

// 所有 slug 都指向张近生的真实信息
// 等未来有真实艺术家入驻再逐一替换
export const artists = {
    "zhang-jinsheng": {
        slug: "zhang-jinsheng",
        nameZh: "张近生",
        nameEn: "Zhang Jinsheng",
        nameFr: "Zhang Jinsheng",
        titleZh: "中国当代书画家",
        titleEn: "Contemporary Chinese Ink Artist",
        titleFr: "Artiste calligraphe contemporain",
        birthplace: "河南省开封市 / Kaifeng, Henan, China",
        born: "1955",
        school: "大风堂（张大千、张善子传人）",
        schoolEn: "Dafeng Tang — lineage of Zhang Daqian & Zhang Shanzi",
        style: "泼墨大写意 · 画虎 · 山水 · 大千体书法",
        styleEn: "Splash Ink · Tiger Painting · Landscape · Daqian-style Calligraphy",
        photo: team1,
        bioZh: `张近生，1955年生于河南省开封市，中国当代著名书画家，张大千、张善子第二代弟子，大风堂传人，别署啸风堂主。

1970年师从大风堂入室弟子李宝铎，专攻走兽画，尤以画虎见长。历经数十年艰苦钻研，开创"萌虎"画法，继承并发扬张大千泼墨泼彩技法，其泼墨大写意虎画笔墨酣畅，富有意趣，被誉为"中原第一虎"。

其作品曾在国内大型画展中多次获金奖，被日本、新加坡、马来西亚及港澳台等地藏家广泛收藏。2004年赴台湾举办展览，并将珍贵文献捐赠台北故宫博物院。2023年于上海开设个人艺术馆。现任大风堂（亚洲）书画艺术研究会中国分会会长。`,
        bioEn: `Zhang Jinsheng, born in 1955 in Kaifeng, Henan Province, is a distinguished contemporary Chinese ink artist and calligrapher. A second-generation disciple of the Dafeng Tang school — the artistic lineage of the legendary masters Zhang Daqian and Zhang Shanzi — he is known by the studio name "Xiaofeng Tang Zhu" (Master of the Roaring Wind Studio).

In 1970, he studied under Li Baoduo, a direct disciple of Dafeng Tang, specializing in animal painting with a focus on tigers. Over decades of dedicated practice, he pioneered the "Meng Hu" (Gentle Tiger) technique, inheriting and advancing Zhang Daqian's celebrated splash-ink method. His expressive ink tiger paintings are widely praised for their vitality and depth, earning him the title "First Tiger of the Central Plains."

His works have received gold awards in major national exhibitions and are collected by enthusiasts in Japan, Singapore, Malaysia, Hong Kong, Macau, and Taiwan. In 2004, he held an exhibition in Taipei and donated rare historical documents to the National Palace Museum. In 2023, he opened his personal art gallery in Shanghai. He currently serves as President of the Dafeng Tang (Asia) Calligraphy and Painting Arts Research Association, China Division.`,
        timeline: [
            { year: "1955", eventZh: "生于河南省开封市", eventEn: "Born in Kaifeng, Henan Province" },
            { year: "1970", eventZh: "师从李宝铎，入大风堂门下", eventEn: "Studied under Li Baoduo, joined Dafeng Tang lineage" },
            { year: "1995", eventZh: "举办「张近生百虎画展」", eventEn: "Solo exhibition: 'One Hundred Tigers'" },
            { year: "2003", eventZh: "《张近生画虎》画集由河南美术出版社出版", eventEn: "Published monograph Zhang Jinsheng Paints Tigers" },
            { year: "2004", eventZh: "赴台举办展览，捐赠文献至台北故宫博物院", eventEn: "Exhibition in Taipei; donated documents to National Palace Museum" },
            { year: "2007", eventZh: "上海书画展，张大千之女张心庆出席", eventEn: "Shanghai exhibition attended by Zhang Xinqing, daughter of Zhang Daqian" },
            { year: "2023", eventZh: "上海开设个人艺术馆", eventEn: "Opened personal art gallery in Shanghai" },
            { year: "2024", eventZh: "成为大风堂美术馆驻馆画家", eventEn: "Appointed resident artist at Dafeng Tang Art Museum" },
        ],
    },

    // 占位艺术家 — 暂时全部指向张近生内容
    "wang-moyuan":   null,
    "chen-xuanzhi":  null,
    "li-yunfeng":    null,
    "zhou-bishan":   null,
};

// 找不到 slug 或占位时回退到张近生
export function getArtist(slug) {
    const artist = artists[slug];
    if (!artist) return artists["zhang-jinsheng"];
    return artist;
}
