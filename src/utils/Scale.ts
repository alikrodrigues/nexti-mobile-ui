import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 1) =>
   size + (scale(size) - size) * factor;
const rem = (size: number, factor = 1) => moderateScale(size, factor);
export { scale, verticalScale, moderateScale, rem };
