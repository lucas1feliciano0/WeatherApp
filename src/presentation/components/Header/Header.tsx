import React from 'react';

import {Button, Container, Icon} from './styles';

interface IProps {
  onPressLeft(): void;
  leftButtonIcon?: string;
  leftAccessibilityHint?: string;

  onPressRight(): void;
  rightButtonIcon?: string;
  rightAccessibilityHint?: string;
}

const Header: React.FC<IProps> = ({
  leftButtonIcon,
  onPressLeft,
  leftAccessibilityHint,
  rightButtonIcon,
  onPressRight,
  rightAccessibilityHint,
  children,
}) => {
  return (
    <Container>
      <Button onPress={onPressLeft} accessibilityHint={leftAccessibilityHint}>
        <Icon name={leftButtonIcon} />
      </Button>
      {children}
      <Button onPress={onPressRight}>
        <Icon
          name={rightButtonIcon}
          accessibilityHint={rightAccessibilityHint}
        />
      </Button>
    </Container>
  );
};

export {Header};
