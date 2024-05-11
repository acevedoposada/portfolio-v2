import clsx from 'clsx';

import { ButtonProps } from './button.entity';
import styles from './button.module.scss';

const Button = ({
  children,
  hoverText,
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} {...buttonProps}>
      <span className={styles.button__border} />
      <span className={styles.button__ripple}>
        <span />
      </span>
      <span className={styles.button__title}>
        <span data-text={hoverText || children}>{children}</span>
      </span>
    </button>
  );
};

export default Button;
