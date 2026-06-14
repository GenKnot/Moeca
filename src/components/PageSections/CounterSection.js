"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

export default function CounterSection({ customClass }) {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);
    const t = useTranslations("counter");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setStartCount(true);
            },
            { threshold: 0.5 }
        );
        if (counterRef.current) observer.observe(counterRef.current);
        return () => { if (counterRef.current) observer.unobserve(counterRef.current); };
    }, []);

    return (
        <div ref={counterRef} className={`counter-section section-padding ${customClass}`}>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <CountUp end={200} duration={2.5} suffix="+" startOnMount={false} start={startCount ? 0 : null} />
                            </p>
                            <h6>{t("artworks")}</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <CountUp end={12} duration={2.5} suffix="+" startOnMount={false} start={startCount ? 0 : null} />
                            </p>
                            <h6>{t("artists")}</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <CountUp end={20} duration={2.5} suffix="+" startOnMount={false} start={startCount ? 0 : null} />
                            </p>
                            <h6>{t("exhibitions")}</h6>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-counter-box">
                            <p className="counter-number">
                                <CountUp end={2026} duration={2.5} startOnMount={false} start={startCount ? 0 : null} />
                            </p>
                            <h6>{t("founded")}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
