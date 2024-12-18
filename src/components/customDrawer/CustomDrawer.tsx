import React from 'react';
import {Drawer} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export interface CustomDrawerProps {
  label: string;
  focusedIcon?: string;
  unfocusedIcon?: string;
  onPress?: () => void;
  style?: {};
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  focusedIcon,
  unfocusedIcon,
  label,
  onPress,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <Drawer.CollapsedItem
      label={label}
      unfocusedIcon={unfocusedIcon}
      focusedIcon={focusedIcon}
      onPress={onPress}
      style={style}
    />
  );
};

export default CustomDrawer;
