import { IUser } from '@/shared/types/ures.interface';

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {
}

export enum EnumSecureStore {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken'
}

export interface IToken {
    accessToken: string
    refreshToken: string
}

export enum EnumAsyncStorage {
USER= 'user'
}

export interface IAuthResponse extends IToken{
    user: IUser
}