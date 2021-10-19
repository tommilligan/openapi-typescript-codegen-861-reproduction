/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAllAnimalsResponse } from '../models/GetAllAnimalsResponse';
import type { GetNestedAnimalResponse } from '../models/GetNestedAnimalResponse';
import type { GetSingleAnimalResponse } from '../models/GetSingleAnimalResponse';
import { request as __request } from '../core/request';

export class Service {

    /**
     * @returns GetSingleAnimalResponse
     * @throws ApiError
     */
    public static async getService(): Promise<GetSingleAnimalResponse> {
        const result = await __request({
            method: 'GET',
            path: `/_private/animals/single`,
        });
        return result.body;
    }

    /**
     * @returns GetAllAnimalsResponse
     * @throws ApiError
     */
    public static async getService1(): Promise<GetAllAnimalsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/_private/animals/all`,
        });
        return result.body;
    }

    /**
     * @returns GetNestedAnimalResponse
     * @throws ApiError
     */
    public static async getService2(): Promise<GetNestedAnimalResponse> {
        const result = await __request({
            method: 'GET',
            path: `/_private/animals/nested`,
        });
        return result.body;
    }

}