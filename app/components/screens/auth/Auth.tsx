import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/shared/types/auth.interface';
import { Button, DismissKeyboard, Loader } from '@/components/ui';
import AuthFields from '@/components/screens/auth/AuthFields';
import { useAuthMutations } from '@/components/screens/auth/useAuthMutations';


const Auth = () => {
	const [isReg, setIsReg] = useState(false);
	const { reset, handleSubmit, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	});

	const { loginSync, registerSync, isLoading } = useAuthMutations(reset);

	const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
		if(isReg) registerSync(data)
		else loginSync(data)
	};

	return (
		<DismissKeyboard>
			<View className='mx-2 items-center justify-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-white text-4xl font-bold mb-2.5'>
						{isReg ? 'Register' : 'Login'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} isPassRequired />
							<Button icon={'film'} onPress={handleSubmit(onSubmit)}>
								Go to watch
							</Button>

							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-white opacity-30 text-right text-base mt-3'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</DismissKeyboard>
	);
};

export default Auth;