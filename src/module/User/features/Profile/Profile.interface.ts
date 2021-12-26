export interface IProps {}
export interface IProfileUser {
    createdAt: string;
    name: string;
    avatar: string;
    username: string;
    password: string;
    id: string;
}

export interface IProfileReducer {
    data?: IProfileUser | null;
    isFetched: boolean;
    isFetching: boolean;
}
