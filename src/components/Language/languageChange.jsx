import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageChange = () => {
    const { lang } = useTranslation('common');
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(lang);

    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        setSelectedLanguage(selectedLanguage);
        const { pathname, asPath } = router;
        router.push(pathname, asPath, { locale: selectedLanguage });
    }

    //local storage gets the selected language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('selectedLanguage');
            if (storedLanguage && lang !== storedLanguage) {
                setSelectedLanguage(lang);
            }
        }
    }, [lang])

    //local storage sets the selected language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedLanguage', selectedLanguage);
        }
    }, [selectedLanguage]);


    return (
        <div>
            <div>
                <select value={selectedLanguage} id="languageSelect" onChange={handleChangeLanguage}>
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                    <option value="es">es</option>
                    <option value="pt">pt</option>
                    <option value="de">de</option>
                    <option value="nl">du</option>
                </select>
            </div>
        </div>
    )
}
export default LanguageChange;