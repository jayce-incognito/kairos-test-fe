import { IRootState } from 'src/redux/interface';
import {
    IProfileUser,
    actionFetched as actionFetchedProfile,
    actionFetching as actionFetchingProfile,
} from 'src/module/User/features/Profile';
import { Dispatch } from 'redux';
import { HTTP } from 'src/services';
import { ACTION_FETCHED } from './Login.constant';

export const actionFetched = ({ isAuthen }: { isAuthen: boolean }) => ({
    type: ACTION_FETCHED,
    payload: { isAuthen },
});

export const actionFetchLogin =
    ({ username, password }: { username: string; password: string }) =>
    async (dispatch: Dispatch, getState: () => IRootState) => {
        let isAuthenticated = false;
        let data;
        dispatch(actionFetchingProfile());
        try {
            const res: IProfileUser = await HTTP.apiFetchProfile();
            if (res.id && username === res.username && password === res.password) {
                isAuthenticated = true;
                data = res;
            }
        } catch (error) {
            console.log('error', error);
        }
        dispatch(actionFetched({ isAuthen: isAuthenticated }));
        dispatch(actionFetchedProfile(data));
        return isAuthenticated;
    };
