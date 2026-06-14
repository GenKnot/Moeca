// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/line-awesome.min.css';
import '@/assets/css/fontAwesomePro.css';
import '@/assets/css/animate.css';
import '@/assets/css/slick.css';
import '@/assets/css/backToTop.css';
import '@/assets/scss/style.scss';

export default function RootLayout({children}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
