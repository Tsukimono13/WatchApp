import React, { FC } from 'react';
import { TypeNavigate } from '@/components/layout/bottomMenu/menu.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { menuItem } from '@/components/layout/bottomMenu/menu.data';
import { MenuItem } from '@/components/layout/bottomMenu/MenuItem';

interface IBottomMenuProps {
	nav: TypeNavigate;
	currentRoute?: string;
}

export const BottomMenu: FC<IBottomMenuProps> = ({ nav, currentRoute }) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]'
			style={{
				paddingBottom: bottom + 5
			}}>
			{menuItem.map(item => (
				<MenuItem key={item.path } item={item} nav={nav} currentRoute={currentRoute}/>
			))}
		</View>
	);
};
