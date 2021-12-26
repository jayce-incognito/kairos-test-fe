import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'redux-form';
import { Button } from 'src/components/Core';
import { InputField, validator } from 'src/components/ReduxForm';
import { INPUT_FIELD } from 'src/components/ReduxForm/InputField';
import { profileSelector } from 'src/module/User/features/Profile';
import { translateByFieldSelector } from 'src/module/Setting';
import { Styled } from './Login.styled';
import { ILoginLanguage } from './Login.interface';
import { FORM_CONFIGS } from './Login.constant';
import withLoginPage, { TInner } from './Login.enhance';

const LoginPage = (props: TInner & any) => {
    const { handleSubmitForm }: TInner = props;
    const { usernamePlaceholder, passwordPlaceholder, btnLogin }: ILoginLanguage =
        useSelector(translateByFieldSelector)('login');
    const profileState = useSelector(profileSelector);
    const { isFetching } = profileState;
    return (
        <Styled className="login-page">
            <form>
                <Field
                    component={InputField}
                    name={FORM_CONFIGS.usernameField}
                    validate={[validator.required]}
                    componentProps={{
                        placeholder: usernamePlaceholder,
                    }}
                />
                <Field
                    component={InputField}
                    name={FORM_CONFIGS.passwordField}
                    validate={[validator.required]}
                    componentProps={{
                        placeholder: passwordPlaceholder,
                    }}
                    inputType={INPUT_FIELD.password}
                />
                <Button title={`${btnLogin}${isFetching ? '...' : ''}`} type="button" onClick={handleSubmitForm} />
            </form>
        </Styled>
    );
};

export default withLoginPage(React.memo(LoginPage));
