import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Color from 'color';
import { useTheme, Text } from 'react-native-paper';
import { moderateScale } from '../../utils/Scale';
import { ButtonIcon } from '../Icon';

const defaultSize = 64;

export default ({
   size = defaultSize,
   source,
   style,
   label,
   labelStyle,
   color,
   showAcessory,
   onPress,
   iconAcessory,
   colorAcessory,
   backgroundAcessory,
   styleAcessory,
   iconSize,
   typeIcon,
   ...rest
}) => {
   const { colors } = useTheme();

   const { backgroundColor = colors.primary } = StyleSheet.flatten(style) || {};

   const textColor =
      color || (Color(backgroundColor).isLight() ? '#4D4D4D' : '#fff');

   const acessoryBackground =
      backgroundAcessory ||
      (Color(backgroundColor).isLight() ? colors.primary : '#fff');

   const acessoryColor =
      colorAcessory ||
      (Color(acessoryBackground).isLight() ? '#4D4D4D' : '#fff');

   const uri = source.url || source.uri;

   return (
      <View
         style={[
            {
               width: size,
               height: size,
               borderRadius: size / 2,
               backgroundColor,
            },
            style,
         ]}
         {...rest}
      >
         {uri ? (
            <Image
               source={{ uri, cache: 'reload' }}
               style={{ width: size, height: size, borderRadius: size / 2 }}
            />
         ) : (
            <Text
               style={[
                  {
                     color: textColor,
                     fontSize: size / 2,
                     lineHeight: size,
                     textAlign: 'center',
                     textAlignVertical: 'center',
                  },
                  labelStyle,
               ]}
               numberOfLines={1}
            >
               {label}
            </Text>
         )}
         {showAcessory && (
            <ButtonIcon
               nameIcon={iconAcessory || 'camera'}
               typeIcon={typeIcon || 'materialCommunity'}
               colorIcon={acessoryColor}
               style={{
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  width: moderateScale(40),
                  height: moderateScale(40),
                  right: moderateScale(2),
                  bottom: moderateScale(2),
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...styleAcessory,
               }}
               size={iconSize || 13}
               onPress={onPress}
            />
         )}
      </View>
   );
};
