import React from 'react';
import { Field, Form } from 'react-final-form';
import Button from '../button';
import styles from './webinarForm.module.scss';
import { required, isEmail, composeValidators } from 'utils/validate';

const WebinarForm = ({ submitHandler }: { submitHandler?: () => void }) => {
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
            <div className={styles.formDatesWrapper}>
              <h3 className={styles.formTitle}>Стоимость участия: 290 руб.</h3>
              <div className={styles.formDates}>
                <div className={styles.formDatesBlock}>
                  <p className={styles.formDatesLabel}>Дата</p>
                  <p className={styles.formDate}>7 ноября</p>
                </div>
                <div className={styles.formDatesBlock}>
                  <p className={styles.formDatesLabel}>Время</p>
                  <p className={styles.formDate}>19:00 по мск</p>
                </div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.formFields}>
                <h5 className={styles.formFieldsTitle}>Подать заявку</h5>
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
                <Button onClick={() => {}} label="Подать заявку" />
              </div>
            </div>
          </form>
        )}
      />
    </section>
  );
};

export default WebinarForm;
