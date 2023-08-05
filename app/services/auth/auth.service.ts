import {EnumAsyncStorage, IAuthResponse} from "../../shared/types/auth.interface";
import {deleteTokensStorage, saveToStorage} from "./auth.helper";
import {requestApi} from "../api/request.api";
import {getAuthUrl} from "../../config/api.config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthService = {
    async main(variant: 'reg' | 'login',
               email: string,
               password: string
    ){
        const response = await requestApi<IAuthResponse >({
            url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
            method: 'POST',
            data: {email, password}
        })
        if (response.accessToken) await saveToStorage(response)
        return response
    },
    async logout() {
        await deleteTokensStorage()
        await AsyncStorage.removeItem(EnumAsyncStorage.USER)
    }
}