import useTranslation from 'next-translate/useTranslation'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageChange = () => {
    const { t, lang } = useTranslation('common')
    const router = useRouter()
    const [selectedLanguage, setSelectedLanguage] = useState('en')
    console.log(lang);
    const handleChangeLanguage = (e) => {
        const selectedLanguage = e.target.value
        setSelectedLanguage(selectedLanguage)
        const { pathname, asPath } = router

        router.push(pathname, asPath, { locale: selectedLanguage })
    }

    //local storage gets the selected language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('selectedLanguage');
            if (storedLanguage && lang !== storedLanguage) {
                setSelectedLanguage(lang);
            }
        }
    }, [])

    //local storage sets the selected language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedLanguage', selectedLanguage);
        }
    }, [selectedLanguage]);


    return (
        <div>
            <div>
                <label htmlFor="languageSelect">Language</label>
                <select value={selectedLanguage} id="languageSelect" onChange={handleChangeLanguage}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="pt">Portuguese</option>
                    <option value="de">German</option>
                    <option value="nl">Dutch</option>
                </select>
            </div>
        </div>
    )
}
export default LanguageChange