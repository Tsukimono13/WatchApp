import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import {useTypedNavigation} from "@/hooks/useTypedNavigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFormData} from "@/shared/types/auth.interface";
import {Button, Loader} from "@/components";


const Auth = () => {
    const [isRegister, setIsRegister] = useState(false)
    const {reset, handleSubmit, control} = useForm<IAuthFormData>({
        mode: 'onChange'
    })
    const {goBack} = useTypedNavigation()

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        const {password, email} = data
    }
    const isLoading = false
    return (
        <View className="mx-2 items-center justify-center h-full">
            <View className="w-9/12">
                <Text className="text-center text-white text-4xl font-bold mb-2.5">
                    {isRegister ? 'Register' : 'Login'}
                </Text>
                {isLoading ? <Loader/> : <>

                    <Button icon={'film'} onPress={handleSubmit(onSubmit)}>
                       Go to watch
                    </Button>

                    <Pressable onPress={() => setIsRegister(!isRegister)}>
                        <Text className="text-white opacity-30 text-right text-base mt-3">
                            {isRegister ? 'Login' : 'Register'}
                        </Text>
                    </Pressable>
                </>}
            </View>
        </View>
    );
};

export default Auth;