import axios, {AxiosError } from 'axios';


export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api= axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    });