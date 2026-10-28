const App = {
    data() {
        return {
            appName: "QR收款",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.4.0',
                    checkValue: '20261028',
                    ticketNumber: 'M2026041 - R115080',
                    changeLog: 'update FCM received key<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/QR/manifest-uat_1.plist',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.3.9',
                    checkValue: '20260504',
                    ticketNumber: 'M2025151 - R114274',
                    changeLog: 'Xcode 26升級<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/QR/manifest-uat.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.5',
                    checkValue: '20261028170356',
                    ticketNumber: 'M2026041_R115080',
                    changeLog: 'update FCM received key<br>',
                    download: 'https://drive.google.com/file/d/1vluEY5-I49qgP2udWBXvP6KDB2LbIqmM/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.4',
                    checkValue: '20260807160554',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br>',
                    download: 'https://drive.google.com/file/d/13LPKYoqV2VIAQ6DJCrrgRMm83rYVa7dX/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 1.4.4',
                    checkValue: '2026/09/16 (35)',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br>',
                    download: 'https://drive.google.com/file/d/1kOXY1mu3cIz4wYC2I1_MEc_G9W48HbBE/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 1.4.4',
                    checkValue: '2026/09/21 (35)',
                    ticketNumber: 'M2026045 - R115083',
                    changeLog: 'API 36<br> update UAT Received key<br>',
                    download: 'https://drive.google.com/file/d/1yBgd0UKAkqHISHqFfXR8yqmiuMAj6cBA/view?usp=sharing',
                }
            ]
        }
    }
}
