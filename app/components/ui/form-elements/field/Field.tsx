import React, { JSX } from 'react';
import { IField } from './field.interface';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import cn from 'clsx';

const Field = <T extends Record<string, any>>({ control, name, rules, className, ...rest }: IField<T>): JSX.Element => {
	return (
		<Controller control={control} name={name} rules={rules} render={
			({ field: { value, onChange, onBlur }, fieldState: { error } }) => <>
				<View className={cn(
					'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
					error ? 'border-red' : 'border-transparent')}
				>
					<TextInput onChangeText={onChange}
										 onBlur={onBlur}
										 autoCapitalize={'none'}
										 value={(value || ''.toString())}
										 className='text-white text-base' {...rest}
					/>
				</View>
				{error && <Text className='text-red'>{error.message}</Text>}
			</>
		} />


	);
};

export default Field;