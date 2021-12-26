import { getMessageError } from './Toast.utils';
import { IToggleToast } from './Toast.interface';
import { ACTION_TOGGLE_TOAST } from './Toast.constant';

export const TOAST_CONFIGS = {
    error: -1,
    success: 0,
    warning: 1,
    custom: 2,
};

export const TOAST_CONFIGS_CLASSNAME: any = {
    '-1': 'error',
    '0': 'success',
    '1': 'warning',
    '2': 'custom',
};

export interface IToastReducer {
    value: any;
    type: number;
    toggle: boolean;
}

const initialState: IToastReducer = {
    value: '',
    type: 0,
    toggle: false,
};

const reducer: (state: IToastReducer, action: { type: string; payload: any }) => any = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case ACTION_TOGGLE_TOAST: {
            let { type, toggle, value, defaultMessage }: IToggleToast = action.payload;
            if (type === TOAST_CONFIGS.error) {
                value = getMessageError(value, defaultMessage);
            }
            return {
                ...state,
                type,
                toggle,
                value,
            };
        }
        default:
            return state;
    }
};

export default reducer;
