/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetNestedAnimalResponse = {
    nested: {
        animal: {
            type: GetNestedAnimalResponse.type,
        },
    };
}

export namespace GetNestedAnimalResponse {

    export enum type {
        FROG = 'frog',
        BADGER = 'badger',
    }


}
