
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default  function Footer(){
    const t = useTranslations('HomePage');
    const params = useParams();
    const { locale } = params;
    return (
        <footer>
             <div dir={locale === "ar" ? "rtl" : "ltr"} >
                <p className={`  p-10 flex flex-col lg:flex-row items-center justify-center gap-1 text-center  font-satoshi font-medium`}>
                {t('Footer.copyright')} &copy; {new Date().getFullYear()}<span className="text-redPrimary font-bold uppercase">{t('Footer.title')}</span> . {t('Footer.p')}
                </p>
             </div>
        </footer>
    )
}