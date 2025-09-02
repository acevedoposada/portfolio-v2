import { isValidElement, useCallback, useMemo } from 'react';

import { cn } from '@/utils/cn';

import { FormFieldIcon, FormFieldProps, IconPosition } from './form-field.model';
import styles from './form-field.module.scss';

function FormField({
  label,
  helpText,
  error,
  prefix,
  suffix,
  button,
  buttonIcon,
  icon,
  iconPosition = IconPosition.left,
  placeholder,
  disabled,
  classes = {},
  className,
  onButtonClick,
  ...inputProps
}: FormFieldProps): JSX.Element {

  const validateIcon = useCallback((IconValidate?: FormFieldIcon) => {
    if (!IconValidate) return null;
    if (typeof IconValidate === 'string') {
      return <i className={cn(`ti ti-${IconValidate}`, styles['form-field__btn__icon'])} aria-hidden="true" />;
    }
    return isValidElement(<IconValidate />)
      ? <IconValidate size={20} className={styles['form-field__btn__icon']} />
      : null;
  }, [])

  const iconValidated = useMemo(() => validateIcon(icon), [icon]);
  const buttonIconValidated = useMemo(() => validateIcon(buttonIcon), [buttonIcon]);

  const formField = (
    <div className={cn(
      styles['form-field'],
      classes.root,
      {
        [styles['form-field--error']]: error
      },
      className
    )}>
      {prefix && (
        <span className={cn(styles['form-field__prefix'], classes.prefix)}>
          {prefix}
        </span>
      )}
      <div className={cn(styles['form-field__input'], classes.input)}>
        {iconValidated && iconPosition === IconPosition.left && (
          <span className={styles['form-field__input__icon']}>
            {iconValidated}
          </span>
        )}

        <input
          className={cn(styles['form-field__input__field'], classes.field)}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
        />

        {iconValidated && iconPosition === IconPosition.right && (
          <span
            className={cn(
              styles['form-field__input__icon'],
              styles['form-field__input__icon--right']
            )}
          >
            {iconValidated}
          </span>
        )}
      </div>
      {suffix && (
        <span className={cn(styles['form-field__suffix'], classes.suffix)}>
          {suffix}
        </span>
      )}
      {button && (
        <button
          className={cn(styles['form-field__btn'], classes.button)}
          onClick={onButtonClick}
          disabled={disabled}
        >
          <span>
            {button}
            {buttonIconValidated}
          </span>
        </button>
      )}
    </div>
  );

  const fieldContainer = useMemo(() => {
    return (
      <div className={cn(styles['form-field__container'], classes.container)}>
        {label && (
          <p className={styles['form-field__label']}>
            {label}
          </p>
        )}
        {formField}
        {helpText && (
          <p className={cn(
            styles['form-field__help-text'],
            error && styles['form-field__help-text--error']
          )}>
            {helpText}
          </p>
        )}
      </div>
    );
  }, [formField]);

  return useMemo(() => label || helpText
    ? fieldContainer
    : formField,
    [fieldContainer, formField]);

}

FormField.displayName = 'FormField';

export default FormField;