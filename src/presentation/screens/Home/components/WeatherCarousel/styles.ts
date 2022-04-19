import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FeatherIcons from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex: 1;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity`
  z-index: 1;
  ${props => (props.disabled ? 'opacity: 0.6; transform: scale(0.8)' : '')}
`;

export const SwipeContainer = styled(Carousel).attrs({
  sliderWidth: width,
  itemWidth: width,
  windowSize: 1,
})<any>`
  background-color: orange;
`;

export const PaginationDots = styled(Pagination).attrs(props => ({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: props.theme.colors.primary,
  },
  containerStyle: {paddingVertical: props.theme.padding.medium},
}))<any>``;

export const Icon = styled(FeatherIcons).attrs(props => ({
  name: props.name,
  color: props.theme.colors.texts.primary,
  size: props.theme.fontSize.large,
}))``;
