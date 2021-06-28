import { StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/Scale';

export default StyleSheet.create({
   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
   text: {
      flexGrow: 0.8,
      flexWrap: 'wrap',
      flexShrink: 1,
      fontSize: moderateScale(12),
      paddingVertical: moderateScale(5),
   },
});
