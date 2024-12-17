export type RootStackParamList = {
 Splash : undefined,
  OnBoarding: undefined, 
  Login: undefined,
  SignUp: undefined,  
 Home: undefined,
 MainDrawer: undefined
 Profile: undefined
  };

  export interface CustomDrawerProps {
    focusedIcon: string;
    unfocusedIcon: string;
    label?: string;
    onPress?: () => void;
  }