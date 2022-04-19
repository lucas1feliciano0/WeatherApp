import React from 'react';

import {Button, Container, Icon} from './styles';

interface IProps {
  onPressLeft(): void;
  leftButtonIcon?: string;
  leftAccessibilityHint?: string;
  leftDisabled?: boolean;

  onPressRight(): void;
  rightButtonIcon?: string;
  rightAccessibilityHint?: string;
  rightDisabled?: boolean;
}

const Header: React.FC<IProps> = ({
  leftButtonIcon,
  onPressLeft,
  leftAccessibilityHint,
  rightButtonIcon,
  onPressRight,
  rightAccessibilityHint,
  leftDisabled,
  rightDisabled,
  children,
}) => {
  return (
    <Container>
      <Button
        disabled={leftDisabled}
        onPress={onPressLeft}
        accessibilityHint={leftAccessibilityHint}>
        <Icon name={leftButtonIcon} />
      </Button>
      {children}
      <Button disabled={rightDisabled} onPress={onPressRight}>
        <Icon
          name={rightButtonIcon}
          accessibilityHint={rightAccessibilityHint}
        />
      </Button>
    </Container>
  );
};

export {Header};
