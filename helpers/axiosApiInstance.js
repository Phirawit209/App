import React, { Component } from 'react';
import deviceStorage from './deviceStorage'
import Constants from 'expo-constants';

import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async config => {
        const currentUser = await deviceStorage.getItem('currentUser')
        const token = currentUser.token
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        console.log(response)
        return response;
    },
    error => {
        const { response } = error;
        if (axios.isCancel(error)) {
            return new Promise(() => {
                //
            });
        }
        return Promise.reject(error);
    }
);

export { axiosInstance };