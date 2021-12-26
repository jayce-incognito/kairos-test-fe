import { IRootState } from 'src/redux/interface';
import { createSelector } from 'reselect';

export const loginSelector = createSelector(
    (state: IRootState) => state.user.login,
    (login) => login,
);

export const isAuthenSelector = createSelector(loginSelector, ({ isAuthen }) => isAuthen);
