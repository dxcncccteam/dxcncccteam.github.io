const App = {
    data() {
        return {
            appName: "mPOS行動收單業務",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.10',
                    checkValue: '20261112',
                    ticketNumber: 'M2026133 - R115238',
                    changeLog: 'APP修改JB邏輯<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat_1.plist',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.9',
                    checkValue: '20261103',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.8.4',
                    checkValue: '20261111162034',
                    ticketNumber: 'M2026041 - R115080',
                    changeLog: 'mPOS 修改推播套件<br>',
                    download: 'https://drive.google.com/file/d/1GZanP9Qye7khhj1oUGvJSejXjH7CGcvI/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.8.3',
                    checkValue: '20261103092048',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
                    download: 'https://drive.google.com/file/d/19WxKrmBCN512SxpC6IqJ55vlbMmU7ndT/view?usp=sharing',
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
                    appVersion: 'version 2.8.3',
                    checkValue: '2026/11/04(136)',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
                    download: 'https://drive.google.com/file/d/1LCPfkV6GVaAh2XWDWjVVhmh047tDPAg_/view?usp=sharing',
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
