// log
import { Dispatch } from 'redux';
import { CustomAlert, Speech } from '../../types';
import { store } from '../store';

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: 'SET_LOADING',
        payload: { isLoading },
    };
};

export const addAlert = (newAlert: CustomAlert) => {
    return {
        type: 'ADD_ALERT',
        payload: { newAlert },
    };
};

export const removeAlert = (key: string) => {
    return {
        type: 'REMOVE_ALERT',
        payload: { key },
    };
};

var timer: any;

export const setBotSpeech = (speech: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: 'SET_BOT_SPEECH', payload: { speech: { message: speech } } });

        clearTimeout(timer);

        timer = setTimeout(() => {
            dispatch({ type: 'SET_BOT_SPEECH', payload: { speech: undefined } });
        }, 10000);
    };
};

export const setBotError = (error: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: 'SET_BOT_SPEECH', payload: { speech: { message: error, isError: true } } });

        clearTimeout(timer);

        timer = setTimeout(() => {
            dispatch({ type: 'SET_BOT_SPEECH', payload: { speech: undefined } });
        }, 10000);
    };
};

export const clearBotSpeech = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: 'SET_BOT_SPEECH', payload: { speech: undefined } });
    };
};
