import { IRootState } from 'src/redux/interface';
import {
    IProfileUser,
    actionFetched as actionFetchedProfile,
    actionFetching as actionFetchingProfile,
} from 'src/module/User/features/Profile';
import { Dispatch } from 'redux';
import { HTTP } from 'src/services';
import { getMessageError } from 'src/components/Toast';
import { translateByFieldSelector } from 'src/module/Setting';
import { ACTION_FETCHED } from './Login.constant';
import { ILoginLanguage } from './Login.interface';

export const actionFetched = ({ isAuthen }: { isAuthen: boolean }) => ({
    type: ACTION_FETCHED,
    payload: { isAuthen },
});

export const actionFetchLogin =
    ({ username, password }: { username: string; password: string }) =>
    async (dispatch: Dispatch, getState: () => IRootState) => {
        let isAuthenticated = false;
        let data;
        const state = getState();
        dispatch(actionFetchingProfile());
        try {
            const res: IProfileUser = await HTTP.apiFetchProfile();
            if (res.id && username === res.username && password === res.password) {
                isAuthenticated = true;
                data = res;
            } else {
                const { errorLogin }: ILoginLanguage = translateByFieldSelector(state)('login');
                throw errorLogin;
            }
        } catch (error) {
            alert(getMessageError(error));
        }
        dispatch(actionFetched({ isAuthen: isAuthenticated }));
        dispatch(actionFetchedProfile(data));
        return isAuthenticated;
    };
