import { IHomeLanguage } from 'src/module/Home';
import { ISettingLanguage } from 'src/module/Setting';
import { ILoginLanguage } from 'src/module/User/features/Login';

export interface ILanguage {
    general: IGeneralLanguage;
    setting: ISettingLanguage;
    login: ILoginLanguage;
    home: IHomeLanguage;
}

export interface IGeneralLanguage {
    copied: string;
    copy: string;
    seeKey: string;
    lostNetwork: string;
    btnReload: string;
    loadingTx: string;
    btnRetry: string;
    switched: string;
    removed: string;
    keys: string;
    readyDesc: string;
    cameraReadyDesc: string;
    hasCameraDesc: string;
    scanQrCode: string;
    placeQrCode: string;
    success: string;
    masterKey: string;
    masterLess: string;
    keychainName: string;
    masterKeyName: string;
    privateKey: string;
    phrase: string;
    btnSetting: string;
    btnTrash: string;
}
