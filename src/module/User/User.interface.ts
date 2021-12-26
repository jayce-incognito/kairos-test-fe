import { ILoginReducer } from 'src/module/User/features/Login';
import { IProfileReducer } from 'src/module/User/features/Profile';

export interface IProps {}

export interface IUserReducer {
    login: ILoginReducer;
    profile: IProfileReducer;
}
