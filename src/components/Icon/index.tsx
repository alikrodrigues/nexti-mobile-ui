import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
// import { createIconSetFromFontello } from 'react-native-vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { Badge, useTheme } from 'react-native-paper';
// import Text from '../Text';
// import fontelloConfig from '../../../config.json';
import styles from './styles';
import { moderateScale } from '../../utils/Scale';
import type { IconProps } from 'react-native-vector-icons/Icon';

// const IconNexti = createIconSetFromFontello(fontelloConfig);

interface IconNextiProps extends IconProps {
   nameIcon: string;
   containerStyle: any;
   title: string;
   colorIcon?: string;
   typeIcon?: string;
   focused?: boolean;
   isTab?: boolean;
   size?: number;
   badge?: boolean;
   badgeCount?: string;
   titleStyle?: any;
}

const IconCustom = ({ typeIcon, ...props }) => {
   switch (typeIcon) {
      case 'fontAwesome5':
         return <FontAwesome5 {...props} />;
      case 'materialCommunity':
         return <MaterialCommunityIcon {...props} />;
      case 'entypo':
         return <EntypoIcon {...props} />;
      case 'antDesign':
         return <AntIcon {...props} />;
      case 'ionIcons':
         return <IonIcons {...props} />;
      case 'feather':
         return <FeatherIcon {...props} />;
      case 'octicons':
         return <OcticonsIcon {...props} />;
      // case 'nexti':
      //    return <IconNexti {...props} />;
      default:
         return <MaterialIcon {...props} />;
   }
};

export const ButtonIcon = ({
   nameIcon,
   containerStyle,
   title,
   colorIcon,
   typeIcon,
   size,
   badge,
   badgeCount,
   titleStyle,
   style,
   children,
   ...rest
}) => (
   <TouchableOpacity style={style} {...rest}>
      <Icon
         nameIcon={nameIcon}
         containerStyle={containerStyle}
         title={title}
         size={size}
         colorIcon={colorIcon}
         typeIcon={typeIcon}
         badge={badge}
         badgeCount={badgeCount}
         titleStyle={titleStyle}
      />
      {children}
   </TouchableOpacity>
);

const Icon = ({
   nameIcon,
   containerStyle,
   title,
   colorIcon,
   typeIcon,
   focused,
   isTab,
   size,
   badge,
   badgeCount,
   titleStyle,
   ...rest
}: IconNextiProps) => {
   const iconColor = colorIcon || '#808080';
   const tabIconColor = focused ? colorIcon : '#3C3C3C';

   const { colors } = useTheme();
   return (
      <View style={containerStyle || (isTab && styles.container)}>
         <View style={{ flexDirection: 'row' }}>
            <IconCustom
               color={isTab ? tabIconColor : iconColor}
               name={nameIcon}
               typeIcon={typeIcon}
               size={size || moderateScale(18)}
               {...rest}
            />
            {badge && (
               <View style={{ alignItems: 'flex-end' }}>
                  <Badge
                     style={{
                        backgroundColor: colors.primary,
                        position: 'absolute',
                        alignSelf: 'center',
                     }}
                     size={moderateScale(16)}
                  >
                     {/* <Text
                        style={{ fontSize: moderateScale(12), color: '#fff' }}
                     > */}
                     {badgeCount}
                     {/* </Text> */}
                  </Badge>
               </View>
            )}
         </View>
         {title && (
            <Text style={titleStyle || { ...styles.text, color: tabIconColor }}>
               {title}
            </Text>
         )}
      </View>
   );
};

export default Icon;
