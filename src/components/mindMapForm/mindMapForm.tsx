import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../button';
import styles from './mindMapForm.module.scss';
import { required, isEmail, composeValidators } from 'utils/validate';

const MindMapForm = ({ submitHandler }: { submitHandler?: () => void }) => {
  const onSubmit = (v: any) => {
    console.log(v);
    submitHandler && submitHandler();
  };
  return (
    <section className={styles.formWrapper}>
      <Form
        onSubmit={(v) => onSubmit(v)}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Получить Mindmap</h3>
            <div className={styles.formFields}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div className={styles.formField}>
                    <input
                      className={styles.formInput}
                      placeholder="Ваше имя"
                      {...input}
                    />
                    {meta.touched && meta.error && (
                      <p className={styles.formFieldError}>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
              <Field
                name="email"
                validate={composeValidators(required, isEmail)}
              >
                {({ input, meta }) => (
                  <div className={styles.formField}>
                    <input
                      className={styles.formInput}
                      placeholder="Ваше email"
                      {...input}
                    />
                    {meta.touched && meta.error && (
                      <p className={styles.formFieldError}>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
              <Field name="contact" validate={required}>
                {({ input, meta }) => (
                  <div className={styles.formField}>
                    <input
                      className={styles.formInput}
                      placeholder="WhatsApp или Telegram"
                      {...input}
                    />
                    {meta.touched && meta.error && (
                      <p className={styles.formFieldError}>{meta.error}</p>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <Button onClick={() => {}} label="Получить бесплатно" />
          </form>
        )}
      />
    </section>
  );
};

export default MindMapForm;
