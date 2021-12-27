import { ILanguage } from './interface';

const language: ILanguage = {
    general: {
        copied: 'Copied',
        copy: 'Copy',
        seeKey: 'See keys',
        lostNetwork:
            'Your internet connection is currently<br />unstable. Please check your network<br />settings and try again.',
        btnReload: 'Reload',
        loadingTx: `Please do not navigate away till this<br />window closes.`,
        btnRetry: 'Retry',
        switched: 'Switched',
        removed: 'Removed',
        keys: 'keys',
        readyDesc: 'You’re ready to go Incognito.',
        hasCameraDesc: 'To continue using Incognito, please close this window and reopen the extension.',
        scanQrCode: 'Scan QR Code',
        placeQrCode: 'Place the QR code in front of your camera',
        cameraReadyDesc: 'Scan function enabled.',
        success: 'Success',
        masterKey: 'Master keys',
        masterLess: 'Masterless',
        keychainName: 'Keychain name',
        masterKeyName: 'Master key name',
        privateKey: 'Private key',
        phrase: 'Phrase',
        btnSetting: 'Setting',
        btnTrash: 'Clear',
    },
    setting: {
        headerTitle: 'Settings',
        network: {
            title: 'Network',
        },
        dev: {
            title: 'Dev Sections',
            homeConfigs: 'Use staging home configs',
        },
        addressBook: {
            title: 'Address Book',
            desc: 'Manage your saved addresses',
        },
        keychain: {
            title: 'Keychain',
            desc: 'Manage your keychains',
        },
        decimalDigits: {
            title: 'Decimal Digits',
            desc: 'Limit main asset<br />displays to 5 decimal digits',
        },
        darkMode: {
            title: 'Theme',
            desc: 'Use dark mode and light mode',
        },
        logout: {
            title: 'Logout',
        },
    },
    login: {
        usernamePlaceholder: 'Enter your username',
        passwordPlaceholder: 'Enter your pasword',
        btnLogin: 'Login',
        errorLogin: 'Login failed!',
    },
    home: {
        sectionFactories: [
            {
                id: 'section-1',
                title: `IT CLOUD SEA’S IT SERVICE`,
                icon: 'section-1-bg-1.svg',
                titleContent: 'ASSETS',
                descContents: [
                    {
                        desc: 'Inventory Management',
                        btnDesc: 'G-Book',
                    },
                ],
            },
            {
                id: 'section-2',
                icon: 'section-2-bg-2.svg',
                titleContent: 'ACCOUNTING',
                descContents: [
                    {
                        desc: 'Accounting',
                        btnDesc: 'G-Book',
                    },
                ],
            },
            {
                id: 'section-3',
                icon: 'section-3-bg-3.svg',
                titleContent: 'HR & ADMIN',
                descContents: [
                    {
                        desc: 'Webmail',
                        btnDesc: 'E-office',
                    },
                    {
                        desc: 'E-Approval',
                        btnDesc: 'E-office',
                    },
                    {
                        desc: 'E-Document',
                        btnDesc: 'E-office',
                    },
                    {
                        desc: 'E-Check in.out',
                        btnDesc: 'E-office',
                    },
                    {
                        desc: 'Co-worker/Project',
                        btnDesc: 'E-office',
                    },
                ],
            },
            {
                id: 'section-4',
                icon: 'section-4-bg-4.svg',
                titleContent: 'SALES',
                descContents: [
                    {
                        desc: `Create Homepag\nYoutube & Instagram`,
                        btnDesc: 'Fieldmake',
                    },
                ],
            },
            {
                id: 'section-5',
                icon: 'section-5-bg-5.svg',
                titleContent: 'CUSTOMER',
                descContents: [
                    {
                        desc: `Customer Request Management`,
                        btnDesc: 'OQUFIE',
                    },
                ],
            },
            {
                id: 'section-6',
                icon: 'section-6-bg-6.svg',
                titleContent: 'Security',
                descContents: [
                    {
                        desc: `SSL server`,
                        btnDesc: 'SECTIGO',
                    },
                ],
            },
        ],
    },
};

export default language;
