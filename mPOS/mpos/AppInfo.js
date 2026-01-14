const App = {
    data() {
        return {
            appName: "mPOS行動收單業務",
            datas: [
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.6',
                    checkValue: '20260108',
                    ticketNumber: 'M2025143 - R114244',
                    changeLog: '密碼長度調整8碼<br>實驗室覆測<br>憑證更新<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat_1.plist',
                },
                {
                    supSystem: 'iOS',
                    env: 'UAT',
                    appVersion: 'version 2.7.5',
                    checkValue: '20251022',
                    ticketNumber: 'M2024190 - R113369',
                    changeLog: 'Xcode16編譯<br>實驗室檢測<br>',
                    download: 'itms-services://?action=download-manifest&url=https://dxcncccteam.github.io/mPOS/mpos/manifest-uat.plist',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.7.9',
                    checkValue: '20260108115029',
                    ticketNumber: 'M2025143 - R114244',
                    changeLog: '密碼長度調整8碼<br>實驗室覆測<br>憑證更新<br>',
                    download: 'https://drive.google.com/file/d/1of15Rm3CdtCUVw_M7TUd9xFM61nX1dDW/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.7.8',
                    checkValue: '20251020095445',
                    ticketNumber: 'M2025099 - R114166',
                    changeLog: 'API 35<br>導覽列收闔不影響畫面<br>',
                    download: 'https://drive.google.com/file/d/1HoZE7G7w67LMr2O5Fh5cCqfVSU_ZD5U_/view?usp=sharing',
                },
                {
                    supSystem: 'Android',
                    env: 'UAT',
                    appVersion: 'version 2.7.5',
                    checkValue: '20241029113055',
                    ticketNumber: 'R113210',
                    changeLog: 'API 34<br>',
                    download: 'https://drive.google.com/file/d/1cpUixjOxNL9udl9EVsu11VfjmG2mZCVM/view?usp=drive_link',
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
                    appVersion: 'version 2.7.9',
                    checkValue: '2026/01/14(129)',
                    ticketNumber: 'M2025143 - R114244',
                    changeLog: '密碼長度調整8碼<br>實驗室覆測<br>憑證更新<br>',
                    download: 'https://drive.google.com/file/d/1AVAAcwwVAY3LGHEMT8iXS3DvmhQ5jb11/view?usp=sharing',
                },
            ]
        }
    }
}
