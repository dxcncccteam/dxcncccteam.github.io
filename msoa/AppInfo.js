const App = {
    data() {
        return {
            appName: "聯卡e客服",
            datas: [
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.0',
                    checkValue: '20251105',
                    ticketNumber: 'M2025036_R114059',
                    changeLog: 'API改善',
                    download: 'https://drive.google.com/file/d/1TjxkUAxTxPwKdjCOxmGYK_CEYVQMODE_/view?usp=sharing',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.6.0',
                    checkValue: '20251201',
                    ticketNumber: 'M2025036_R114059',
                    changeLog: 'API改善',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/msoa/manifest.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.3.3',
                    checkValue: '20250602',
                    ticketNumber: 'M2025057_R114087',
                    changeLog: '憑證更新',
                    download: 'https://drive.google.com/file/d/11ONAIFNPvE9LXMuumThYKIXF6njq6b_d/view?usp=sharing',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.5.10',
                    checkValue: '20250708',
                    ticketNumber: 'INT114120',
                    changeLog: '修正聯絡客服功能失效之問題',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/msoa/manifest-uat.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 1.3.2',
                    checkValue: '2025/03/14',
                    ticketNumber: '',
                    changeLog: 'FCM API update\nCVE 弱點修補\nuse UAT FCM project\n',
                    download: 'https://drive.google.com/file/d/1o5AKsaXDEFOz-wkVSwxOr1RuvNQ2q_U5/view?usp=sharing',
                },
            ]
        }
    }
}