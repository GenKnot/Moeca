"use client";

import Image from "next/image";
import {useTranslations, useLocale} from 'next-intl';
import {Link, useRouter, usePathname} from '@/i18n/navigation';
import {menuItems} from "@/data/menu";
import MobileMenuNavBar from "@/components/MobileMenuNavBar";
import {useEffect, useState} from "react";

const LOCALES = [
    {code: 'zh', label: '中文'},
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'Français'},
];

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY >= 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!langOpen) return;
        const close = () => setLangOpen(false);
        window.addEventListener("click", close);
        return () => window.removeEventListener("click", close);
    }, [langOpen]);

    const switchLocale = (newLocale) => {
        router.replace(pathname, {locale: newLocale});
        setLangOpen(false);
    };

    const currentLocale = LOCALES.find(l => l.code === locale);

    return (
        <div className="header-area">
            <div className={isSticky ? "header-sticky" : ""} id="header-sticky">
                <div className="navigation">
                    <div className="container">
                        <div className="header-inner-box">

                            {/* Logo */}
                            <Link href="/" className="logo">
                                <Image src="/logo.png" alt="MOECA" width={160} height={60} style={{height: '60px', width: 'auto'}}/>
                            </Link>

                            {/* Desktop Menu */}
                            <div className="main-menu d-none d-lg-block">
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <li key={index} className={item.subMenu ? "has-submenu" : ""}>
                                            <Link href={item.link} className="navlink">{t(item.labelKey)}</Link>
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
                            </div>

                            {/* Header Right */}
                            <div className="header-right">

                                {/* Language Dropdown — desktop only, mobile version lives in sidebar */}
                                <div
                                    className="lang-dropdown d-none d-lg-flex"
                                    style={{position: 'relative', marginRight: '16px', alignItems: 'center'}}
                                    onClick={e => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setLangOpen(o => !o)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            color: 'inherit',
                                            padding: '4px 0',
                                        }}
                                    >
                                        {currentLocale?.label}
                                        <i className="las la-angle-down" style={{fontSize: '11px', transition: 'transform .2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                                    </button>

                                    {langOpen && (
                                        <ul style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 8px)',
                                            right: 0,
                                            background: '#fff',
                                            border: '1px solid #eee',
                                            borderRadius: '4px',
                                            listStyle: 'none',
                                            margin: 0,
                                            padding: '4px 0',
                                            minWidth: '110px',
                                            boxShadow: '0 4px 16px rgba(0,0,0,.08)',
                                            zIndex: 999,
                                        }}>
                                            {LOCALES.map(({code, label}) => (
                                                <li key={code}>
                                                    <button
                                                        onClick={() => switchLocale(code)}
                                                        style={{
                                                            display: 'block',
                                                            width: '100%',
                                                            textAlign: 'left',
                                                            background: 'none',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            padding: '7px 14px',
                                                            fontSize: '13px',
                                                            fontWeight: locale === code ? '700' : '400',
                                                            color: '#333',
                                                        }}
                                                    >
                                                        {label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="header-btn">
                                    <div className="menu-trigger">
                                        <span className="lines" />
                                        <span className="lines" />
                                        <span className="lines" />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu */}
                            <MobileMenuNavBar menuItems={menuItems}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
