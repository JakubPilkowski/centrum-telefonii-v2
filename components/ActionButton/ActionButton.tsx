import clsx from "clsx";
import React, { FC, memo } from "react";

import styles from "./ActionButton.module.css";

const icons = {
  call: "call",
  direction: "place",
  opinion: "grade",
};

type ActionButtonProps = {
  type: "call" | "opinion" | "direction";
  isFloating?: boolean;
  text?: string;
  className?: string;
};

const ActionButton: FC<ActionButtonProps> = ({
  type,
  text,
  isFloating = false,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        styles.actionButton,
        styles[`${type}Button`],
        isFloating && styles.floatingButton,
        className
      )}
    >
      {text && <p>{text}</p>}
      <span className="material-icons"> {icons[type]} </span>
    </div>
  );
};

export default memo(ActionButton);
