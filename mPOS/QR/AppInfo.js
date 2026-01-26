const App = {
    data() {
        return {
            appName: "QR收款",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.3.7',
                    checkValue: '20260123',
                    ticketNumber: 'M2025150 - R114277',
                    changeLog: '憑證更新<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/QR/manifest-uat.plist',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 1.3.6',
                    checkValue: '20260108',
                    ticketNumber: 'M2025143 - R114244',
                    changeLog: '密碼長度調整8碼<br>實驗室覆測<br>憑證更新<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/QR/manifest-uat_1.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.2',
                    checkValue: '20260123',
                    ticketNumber: 'M2025150 - R114277',
                    changeLog: '更新憑證<br>',
                    download: 'https://drive.google.com/file/d/1LFhLFIFQeFgUJUlBOpl3taAWgKFye7Oe/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 1.4.1',
                    checkValue: '20260108145112',
                    ticketNumber: 'M2025143 - R114244',
                    changeLog: '密碼長度調整8碼<br>實驗室覆測<br>憑證更新<br>',
                    download: 'https://drive.google.com/file/d/1Il342sVGQrHoBpRBXQNIUe0toBW41jSx/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'SIT',
                    appVersion: 'version 1.3.9',
                    checkValue: '2025/09/22 (30)',
                    ticketNumber: 'M2025099 - R114166',
                    changeLog: 'API 35<br>',
                    download: 'https://drive.google.com/file/d/1uyQeVO1qnsTpuu0V7n2WV0NZAe8DE22L/view?usp=sharing',
                },
            ]
        }
    }
}
