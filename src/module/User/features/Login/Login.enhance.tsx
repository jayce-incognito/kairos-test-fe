import React from 'react';
import { compose } from 'recompose';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { useFormValue } from 'src/hooks';
import { useHistory } from 'react-router-dom';
import homeRoute from 'src/module/Home/Home.route';
import { USER_AUTHEN_COOKIES_KEY } from 'src/module/User';
import { useCookies } from 'react-cookie';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { actionFetchLogin } from './Login.actions';
import { FORM_CONFIGS } from './Login.constant';

interface IProps {}

export interface TInner {
    handleSubmitForm: () => any;
}

const enhance = (WrappedComponent: React.FunctionComponent & TInner) => (props: IProps & any) => {
    const dispatch = useDispatch();
    const [, setCookie] = useCookies([USER_AUTHEN_COOKIES_KEY]);
    const username = useFormValue({ formName: FORM_CONFIGS.formName, field: FORM_CONFIGS.usernameField });
    const password = useFormValue({ formName: FORM_CONFIGS.formName, field: FORM_CONFIGS.passwordField });
    const history = useHistory();
    const handleSubmitForm = React.useCallback(async () => {
        const isAuthen: any = await dispatch(actionFetchLogin({ username, password }));
        if (isAuthen) {
            let date = new Date();
            date.setHours(date.getHours() + 1);
            setCookie(USER_AUTHEN_COOKIES_KEY, isAuthen, { expires: date });
            history.push(homeRoute.path);
        }
    }, [username, password]);
    return (
        <ErrorBoundary>
            <WrappedComponent {...{ ...props, handleSubmitForm }} />
        </ErrorBoundary>
    );
};

export default compose<TInner, any>(enhance, reduxForm({ form: FORM_CONFIGS.formName }));
