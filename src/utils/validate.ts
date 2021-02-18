export const required = (value: string) => (value ? undefined : `Обязательно`);

export const isEmail = (value: string) =>
  value && !/\S+@\S+\.\S+/.test(value)
    ? `Неправильный формат email`
    : undefined;

export const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce(
    (error: any, validator: any) => error || validator(value),
    undefined,
  );
