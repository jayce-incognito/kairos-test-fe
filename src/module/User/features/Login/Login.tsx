import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'src/components/Core';
import { InputField, validator } from 'src/components/ReduxForm';
import { INPUT_FIELD } from 'src/components/ReduxForm/InputField';
import { useFormValue } from 'src/hooks';
import styled from 'styled-components';
import { profileSelector } from 'src/module/User/features/Profile';
import { useHistory } from 'react-router-dom';
import homeRoute from 'src/module/Home/Home.route';
import { USER_AUTHEN_COOKIES_KEY } from 'src/module/User';
import { useCookies } from 'react-cookie';
import { COLORS } from 'src/styles';
import { actionFetchLogin } from './Login.actions';
import { FORM_CONFIGS } from './Login.constant';

const Styled = styled.div`
    &.login-page {
        min-width: 320px;
        max-width: 414px;
        margin: auto;
        width: 100%;
        height: 100vh;
        min-height: 800px;
        border-radius: 30px;
        border: 1px solid ${COLORS.lightGrey21};
        padding: 24px;
    }
    &.login-page button.btn-container {
        margin-top: 40px;
        width: 100%;
    }
`;

const LoginPage = () => {
    const [cookies, setCookie] = useCookies([USER_AUTHEN_COOKIES_KEY]);
    const username = useFormValue({ formName: FORM_CONFIGS.formName, field: FORM_CONFIGS.usernameField });
    const password = useFormValue({ formName: FORM_CONFIGS.formName, field: FORM_CONFIGS.passwordField });
    const profileState = useSelector(profileSelector);
    const history = useHistory();
    const { isFetching } = profileState;
    const dispatch = useDispatch();
    const handleSubmitForm = React.useCallback(async () => {
        const isAuthen: any = await dispatch(actionFetchLogin({ username, password }));
        if (isAuthen) {
            let date = new Date();
            date.setSeconds(date.getSeconds() + 10);
            setCookie(USER_AUTHEN_COOKIES_KEY, isAuthen, { expires: date });
            history.push(homeRoute.path);
        }
    }, [username, password]);
    React.useEffect(() => {
        console.log('cookies', cookies);
    }, []);
    return (
        <Styled className="login-page">
            <form>
                <Field
                    component={InputField}
                    name={FORM_CONFIGS.usernameField}
                    validate={[validator.required]}
                    componentProps={{
                        placeholder: 'Type username',
                    }}
                />
                <Field
                    component={InputField}
                    name={FORM_CONFIGS.passwordField}
                    validate={[validator.required]}
                    componentProps={{
                        placeholder: 'Type password',
                    }}
                    inputType={INPUT_FIELD.password}
                />
                <Button title={`Login${isFetching ? '...' : ''}`} type="button" onClick={handleSubmitForm} />
            </form>
        </Styled>
    );
};

export default reduxForm({ form: FORM_CONFIGS.formName })(React.memo(LoginPage));
