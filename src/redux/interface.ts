import { ITabsReducer } from 'src/components/Core/Tabs';
import { IToastReducer } from 'src/components/Toast';
import { ISettingReducer } from 'src/module/Setting';
import { ITooltipReducer } from 'src/module/Tooltip';
import { IUserReducer } from 'src/module/User';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    setting: ISettingReducer;
    tooltip: ITooltipReducer;
    tabs: ITabsReducer;
    user: IUserReducer;
    toast: IToastReducer;
}
