import storage from 'redux-persist/lib/storage';
import { ILoginReducer } from 'src/module/User/features/Login/Login.interface';
import { ACTION_FETCHED } from 'src/module/User/features/Login/Login.constant';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import persistReducer from 'redux-persist/es/persistReducer';

export const initialState: ILoginReducer = {
    isAuthen: false,
};

const reducer: (state: ILoginReducer | any, action: any) => any = (
    state = initialState,
    action: {
        type: string;
        payload: any;
    },
) => {
    switch (action.type) {
        case ACTION_FETCHED: {
            return {
                ...state,
                isAuthen: !!action.payload.isAuthen,
            };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'login',
    storage,
    whitelist: ['isAuthen'],
    stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, reducer);
