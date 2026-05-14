import type { InternalAxiosRequestConfig } from "axios";

export const addAutorizationHeader = (
    config: InternalAxiosRequestConfig,
) => {
    const token = localStorage.getItem("token");
    if (!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}