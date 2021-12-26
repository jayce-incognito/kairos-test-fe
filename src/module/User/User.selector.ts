import { IRootState } from 'src/redux/interface';
import { createSelector } from 'reselect';

export const userSelector = createSelector(
    (state: IRootState) => state.user,
    (user) => user,
);
