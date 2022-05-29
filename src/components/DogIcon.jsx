import React from 'react';

const CatIcon = (props) => {
    return (
        <svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={props.active ? "#ffffff" : "#80CFCE"} d="M34.0403 29.6596C34.8551 28.2515 34.6847 26.6296 33.6598 26.0369C32.6348 25.4442 31.1434 26.1052 30.3287 27.5133C29.5139 28.9214 29.6843 30.5433 30.7092 31.136C31.7342 31.7287 33.2255 31.0676 34.0403 29.6596Z"/>
            <path fill={props.active ? "#ffffff" : "#80CFCE"} d="M57.2777 8.63111C51.3175 2.67292 42.3526 0 30.3096 0C30.3096 0 6.34309 0 4.27569 0C3.12101 0 2.05209 0.394967 1.23125 1.24308C0.410417 2.09731 0 3.0985 0 4.25279V35.4399C3.20983 34.0774 6.80864 32.47 9.30483 31.3708C11.0261 30.6146 12.2451 29.0163 12.4718 27.1517C12.6801 25.431 13.2314 23.1102 14.6035 20.673C17.6602 15.2445 20.8639 15.8201 21.6357 13.0186C22.2115 10.9305 23.0232 8.02488 23.7062 5.5969C24.1319 4.08133 26.2299 3.9558 26.8394 5.40707L31.1611 17.5378C31.4827 18.3951 32.9436 18.4992 33.2928 17.6541L36.1841 10.6611C37.0019 9.25264 39.1489 9.73946 39.2775 11.3622C39.6236 15.7221 40.6221 22.3662 41.2806 26.4965C41.6451 28.7806 43.0662 30.7554 45.1183 31.8209C46.6742 32.6292 48.6038 33.6396 50.4783 34.7541C49.5625 35.9481 47.1 39.61 48.1229 43.2259C48.7723 45.5192 50.6528 47.2858 53.7157 48.4952C51.7524 50.4854 49.1276 52.1173 46.0065 52.0622C42.7324 52.004 40.959 51.5692 39.8993 51.2447C39.8656 51.1988 39.8288 51.1559 39.789 51.1161C39.74 51.0702 35.0202 46.5204 36.5516 41.049C36.7109 40.4796 36.3801 39.8886 35.8074 39.7294C35.2377 39.5702 34.6466 39.9039 34.4873 40.4734C33.0171 45.7243 36.0187 50.0659 37.5287 51.8356C36.6741 53.0818 35.544 54.4963 30.3801 51.6978C25.0998 48.8382 22.7751 50.216 21.0538 51.2202C19.5898 52.0744 17.5009 53.9176 18.3769 60.9321C18.4963 61.8996 18.9037 63.008 19.3539 63.9969C24.6434 63.9969 29.3234 64 29.5408 64C41.2194 64 50.2516 60.8984 56.6376 54.6984C62.9623 48.5565 66.1262 40.7735 66.1262 31.3494C66.1292 22.0998 63.1767 14.5311 57.2777 8.63111ZM55.2103 46.7623C52.3803 45.7978 50.6896 44.417 50.1873 42.6503C49.3756 39.7998 51.7616 36.5819 52.3098 35.893C55.2716 37.8372 57.6942 39.9835 57.6422 41.9094C57.6177 42.681 56.754 44.717 55.2103 46.7623Z"/>
        </svg>
);
};

export default CatIcon;