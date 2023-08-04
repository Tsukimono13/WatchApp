import React, { FC } from 'react';
import { IMenuItem, TypeNavigate } from './menu.interface';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getColor } from '@/config/colors.config';

interface IMenuItemProps {
	item: IMenuItem;
	nav: TypeNavigate
	currentRoute?: string;
}

export const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {

	const isActive = currentRoute === item.path;
	return (
		<Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
			<Feather name={item.iconName} size={26} color={isActive ? getColor('primary') :
				getColor('gray.400')} />
		</Pressable>
	);
};
