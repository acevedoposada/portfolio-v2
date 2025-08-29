import { FormFieldProps } from './form-field.model';
import styles from './form-field.module.scss';

function FormField({ prefix, suffix, button, ...inputProps }: FormFieldProps): JSX.Element {
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
          {button}
          <i className="ti ti-brand-tabler"></i>
        </button>
      )}
    </div>
  );
}

FormField.displayName = 'FormField';

export default FormField;