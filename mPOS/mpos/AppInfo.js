const App = {
    data() {
        return {
            appName: "mPOS行動收單業務",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.8',
                    checkValue: '20260504',
                    ticketNumber: 'M2025151 - R114274',
                    changeLog: 'Xcode 26升級<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat_1.plist',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.7',
                    checkValue: '20260128',
                    ticketNumber: 'M2025150 - R114277',
                    changeLog: '更新憑證<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.8.2',
                    checkValue: '20260807164124',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br>',
                    download: 'https://drive.google.com/file/d/1x3p86lLtmWUrd-sqzd-0QfTZi1s6M77y/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.8.1',
                    checkValue: '20260413181910',
                    ticketNumber: 'M2025132 - R114224',
                    changeLog: 'QR_API符規<br>build with angela hsm <br>',
                    download: 'https://drive.google.com/file/d/1jeW89F4t2brAmfb1YipiRyATnioSiYam/view?usp=sharing',
                },
                {
                    supSystem: 'iOS',
                    env: 'SIT',
                    appVersion: 'version 2.7.0',
                    checkValue: '2024/01/18',
                    ticketNumber: 'oc',
                    changeLog: '- 優化<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-sit.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 2.8.2',
                    checkValue: '2026/08/21(135)',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br>',
                    download: 'https://drive.google.com/file/d/1q61ZwSAYq2K-yd1zQfxV-FA_0b40r337/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 2.8.2',
                    checkValue: '2026/09/11(135)',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br> 新received key<br>',
                    download: 'https://drive.google.com/file/d/1N_mkKjfKLh4BV0VZwgQuarwOvjjc7bJt/view?usp=sharing',
                },
                
            ]
        }
    }
}
