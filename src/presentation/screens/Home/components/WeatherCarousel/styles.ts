import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const SwipeContainer = styled(Carousel).attrs({
  sliderWidth: width,
  itemWidth: width,
  windowSize: 1,
})<any>``;

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
