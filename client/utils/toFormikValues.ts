export const toFormikValues = (initialValues: string[]) => {
  return initialValues.reduce((values, field) => {
    values[field] = '';
    return values;
  }, {});
};
