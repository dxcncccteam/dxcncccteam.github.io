const App = {
    data() {
        return {
            appName: "QR收款",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.4.0',
                    checkValue: '20261103',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
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
                    appVersion: 'version 1.4.6',
                    checkValue: '20261111170220',
                    ticketNumber: 'M2026041 - R115080',
                    changeLog: 'mPOS 修改推播套件<br>',
                    download: 'https://drive.google.com/file/d/1GPs2kpLeaYuEHbR3s0hSBoC8dzhGPAio/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.5',
                    checkValue: '20261103094201',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
                    download: 'https://drive.google.com/file/d/1ofu34_oCMFMXaoM3AnRwGg0YcYJY0Csh/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 1.4.5',
                    checkValue: '2026/11/04 (36)',
                    ticketNumber: 'INT115174',
                    changeLog: 'TWCA憑證緊急更換<br>',
                    download: 'https://drive.google.com/file/d/1srIW1K3s0MzN03en4kIc6OJ_kGSprZTF/view?usp=sharing',
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
