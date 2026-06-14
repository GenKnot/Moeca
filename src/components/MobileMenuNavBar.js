"use client";

import {useTranslations, useLocale} from 'next-intl';
import {Link, useRouter, usePathname} from '@/i18n/navigation';
import {useEffect, useRef} from "react";
import MetisMenu from "metismenujs";
import 'metismenujs/sass';

const LOCALES = [
    {code: 'zh', label: '中文'},
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'Français'},
];

export default function MobileMenuNavBar({ menuItems }) {
    const menuRef = useRef(null);
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        new MetisMenu('#mobile-menu');
    }, []);

    const switchLocale = (newLocale) => {
        router.replace(pathname, {locale: newLocale});
    };

    return (
        <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
            <div className="mobile-nav-wrap">
                <div id="hamburger">
                    <i className="las la-bars"/>
                </div>

                <div className="mobile-nav">
                    <button type="button" className="close-nav">
                        <i className="las la-times-circle"/>
                    </button>
                    <nav className="sidebar-nav">
                        <ul className="metismenu" id="mobile-menu" ref={menuRef}>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link} className={item.subMenu ? "has-arrow" : ""}>
                                        {t(item.labelKey)}
                                    </Link>
                                    {item.subMenu && (
                                        <ul className="sub-menu">
                                            {item.subMenu.map((sub, si) => (
                                                <li key={si}>
                                                    <Link href={sub.link}>{sub.labelKey ? t(sub.labelKey) : sub.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Language Switcher */}
                    <div style={{padding: '16px 20px 8px', borderTop: '1px solid rgba(255,255,255,.1)'}}>
                        <p style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: .6, margin: '0 0 10px'}}>Language</p>
                        <div style={{display: 'flex', gap: '8px'}}>
                            {LOCALES.map(({code, label}) => (
                                <button
                                    key={code}
                                    onClick={() => switchLocale(code)}
                                    style={{
                                        background: locale === code ? 'rgba(255,255,255,.15)' : 'none',
                                        border: '1px solid rgba(255,255,255,.25)',
                                        borderRadius: '3px',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        fontWeight: locale === code ? '700' : '400',
                                        padding: '4px 10px',
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="action-bar">
                        <a href="mailto:info@moeca.ca">
                            <i className="las la-envelope"/> info@moeca.ca
                        </a>
                        <Link href="/contact" className="white-btn">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="overlay"/>
        </div>
    );
}
