import React from 'react';
import {CustomDrawerProps} from '../../utils/types';
import {Drawer} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  focusedIcon,
  unfocusedIcon,
  label,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <Drawer.CollapsedItem
      label={label}
      unfocusedIcon={unfocusedIcon}
      focusedIcon={focusedIcon}
      onPress={onPress}
    />
  );
};

export default CustomDrawer;
