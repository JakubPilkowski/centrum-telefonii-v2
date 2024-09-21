import clsx from "clsx";
import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from "react";

import styles from "./ActionButton.module.css";
import Box from "components/Box";

const icons = {
  call: "call",
  direction: "place",
  opinion: "grade",
} as const;

type ActionButtonProps<T extends ElementType> = {
  iconType: keyof typeof icons;
  isFloating?: boolean;
  text?: string;
  component?: T;
} & ComponentPropsWithoutRef<T>;

const ActionButton = <T extends ElementType>({
  iconType,
  text,
  isFloating = false,
  className = "",
  component: Component,
  ...props
}: ActionButtonProps<T>): ReactElement => {
  return (
    <Box
      className={clsx(
        styles.actionButton,
        styles[`${iconType}Button`],
        isFloating && styles.floatingButton,
        className
      )}
      component={Component}
      {...props}
    >
      {text && <h6>{text}</h6>}
      <span className="material-icons"> {icons[iconType]} </span>
    </Box>
  );
};

export default ActionButton;
