import { isValidElement, useMemo } from 'react';
import { FormFieldProps } from './form-field.model';
import styles from './form-field.module.scss';

function FormField({ prefix, suffix, button, buttonIcon: ButtonIcon, ...inputProps }: FormFieldProps): JSX.Element {

  const icon = useMemo(() => {
    if (!ButtonIcon) return null;
    if (typeof ButtonIcon === 'string') {
      return <i className={`ti ti-${ButtonIcon}`} aria-hidden="true" />;
    }
    return isValidElement(<ButtonIcon />)
      ? <ButtonIcon size={20} className={styles['form-field__btn__icon']} />
      : null;
  }, [ButtonIcon]);

  return (
    <div className={styles['form-field']}>
      {prefix && (
        <span className={styles['form-field__prefix']}>
          {prefix}
        </span>
      )}
      <input
        className={styles['form-field__input']}
        {...inputProps}
      />
      {suffix && (
        <span className={styles['form-field__suffix']}>
          {suffix}
        </span>
      )}
      {button && (
        <button className={styles['form-field__btn']}>
          <span>
            {button}
            {icon}
          </span>
        </button>
      )}
    </div>
  );
}

FormField.displayName = 'FormField';

export default FormField;