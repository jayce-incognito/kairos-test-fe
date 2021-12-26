import trim from 'lodash/trim';
import { useSelector } from 'react-redux';
import { formValueSelector } from 'redux-form';

interface IProps {
    formName: string;
    field: string;
}

export const useFormValue = (props: IProps) => {
    const { formName, field } = props;
    const formValue = useSelector((state) => formValueSelector(formName)(state, field));
    if (!formValue) {
        return '';
    }
    const trimValue = trim(formValue);
    const value = trimValue;
    return value;
};
