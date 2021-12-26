import { combineReducers } from 'redux';
import { profileReducer } from 'src/module/User/features/Profile';
import { loginReducer } from 'src/module/User/features/Login';

export default combineReducers({
    profile: profileReducer,
    login: loginReducer,
});
