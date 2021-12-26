import { ACTION_FETCHED, ACTION_FETCHING } from 'src/module/User/features/Profile/Profile.constant';
import { IProfileReducer } from 'src/module/User/features/Profile/Profile.interface';

const initialState: IProfileReducer = {
    isFetched: false,
    isFetching: false,
    data: null,
};

const reducer = (
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
                data: action.payload,
                isFetched: true,
                isFetching: false,
            };
        }
        case ACTION_FETCHING: {
            console.log('aaa');
            return {
                ...state,
                isFetched: false,
                isFetching: true,
            };
        }
        default:
            return state;
    }
};

export default reducer;
