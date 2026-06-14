import {defineRouting} from 'next-intl/routing';

// To change the default locale, update `defaultLocale` below.
export const routing = defineRouting({
    locales: ['zh', 'en', 'fr'],
    defaultLocale: 'zh',
});
