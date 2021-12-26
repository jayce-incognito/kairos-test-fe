import { ACTION_FETCHED, ACTION_FETCHING } from './Profile.constant';

export const actionFetched = (payload: any) => ({
    type: ACTION_FETCHED,
    payload,
});

export const actionFetching = () => ({
    type: ACTION_FETCHING,
});
