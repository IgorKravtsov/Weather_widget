export const useCityFormValidation = () => {
  return {
    minLengthErr(inputName: string, sybmbols: number) {
      return `${inputName} has to be not less than ${sybmbols} character`;
    },
    matchesErr(inputName: string, message: string) {
      return `${inputName} ${message}`;
    },
  };
};
