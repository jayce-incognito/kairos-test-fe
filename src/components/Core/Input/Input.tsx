import React, { ChangeEvent, InputHTMLAttributes, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ITheme, COLORS } from 'src/styles';
import { EyeIcon } from 'src/components/Icons';

interface IProps {
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    label?: string;
    borderless?: boolean;
    toggleVisible?: boolean;
}

const Styled = styled.div`
    position: relative;

    label {
        font-size: 18px;
        font-weight: medium;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid ${(props: { theme: ITheme }) => props.theme.inputBorder};
        border-radius: 8px;
        color: ${(props: { theme: ITheme }) => props.theme.inputTextColor};
        background-color: ${(props: { theme: ITheme }) => props.theme.input};
        &.borderless {
            border: none;
            background-color: transparent;
            padding: 10px 0;

            font-size: 18px;
            font-weight: medium;
        }
    }

    input::placeholder {
        color: ${COLORS.colorGreyBold};
    }

    .toggle-visible {
        padding-right: 50px;
    }

    .eye-icon {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Input = (props: IProps) => {
    const { label, toggleVisible, borderless, inputProps } = props;
    const { name, type } = inputProps;
    const [inputType, setInputType] = useState(type);

    const className = useMemo(() => {
        const classes = [];
        if (borderless) {
            classes.push('borderless');
        }

        if (type === 'password' && toggleVisible) {
            classes.push('toggle-visible');
        }
        return classes;
    }, [borderless, type]);

    const handleTogglePassword = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <Styled>
            {!!label && <label htmlFor={name}>{label}</label>}
            <input {...inputProps} type={inputType} className={className.join(' ')} />
        </Styled>
    );
};

export default Input;
