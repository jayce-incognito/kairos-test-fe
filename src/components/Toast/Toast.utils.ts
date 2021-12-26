import { isString } from 'lodash';

export const getMessageError = (error: any, defaultMessage?: string) => {
    if (error instanceof Error) {
        return error?.message;
    }
    if (isString(error)) {
        return error;
    }
    return defaultMessage;
};
