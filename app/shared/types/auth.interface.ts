import {IUser} from "@/shared/types/ures.interface";

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {
}