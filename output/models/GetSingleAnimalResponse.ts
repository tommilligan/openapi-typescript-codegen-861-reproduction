/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSingleAnimalResponse = {
    animal: {
        type: GetSingleAnimalResponse.type,
    };
}

export namespace GetSingleAnimalResponse {

    export enum type {
        FROG = 'frog',
        BADGER = 'badger',
    }


}
