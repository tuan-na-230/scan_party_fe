import React, { useEffect } from 'react';
import "../../assets/scss/index.scss"
import Toggle from 'react-toggle'
import { EnglishIcon, VietNamIcon } from '../../assets/icons';
import i18n from '../../i18n';

export default function LoginHeader() {
    const [isVi, setVi] = React.useState(true);
    const [isDarkMode, setDarkMode] = React.useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    useEffect(() => {
       isVi ? changeLanguage('vi') : changeLanguage('en')
    }, [isVi])
    
    return (
        <div style={{ padding: '20px 50px 0px 50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ padding: '10px 20px', margin: '0px 5px', border: '1px solid #c0c0c0', borderRadius: '10px', display: 'flex', alignItems: 'center'}}>
                <label>darkmode</label>
                <label style={{height: '24px'}}>
                    <Toggle
                        defaultChecked={isDarkMode}
                        icons={{
                            checked: <span className="toggle_BsTx">🌜</span>,
                            unchecked: <span className="toggle_BsTx">🌞</span>,
                        }}
                        onChange={() => setDarkMode(!isDarkMode)} />
                </label>
            </div>
            <div style={{ padding: '10px 20px', margin: '0px 5px', border: '1px solid #c0c0c0', borderRadius: '10px' , display: 'flex', alignItems: 'center' }}>
                <label>language</label>
                <label style={{ height: '24px' }}>
                    <Toggle
                        defaultChecked={isVi}
                        icons={{
                            checked: <span className="toggle_BsTx"><VietNamIcon /></span>,
                            unchecked: <span className="toggle_BsTx"><EnglishIcon /></span>,
                        }}
                        onChange={() => setVi(!isVi)} />
                </label>
            </div>
        </div>
    );
}