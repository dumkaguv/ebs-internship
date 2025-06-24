export const createTextRules = (data: string) => {
  return [
    {
      required: true,
      message: `Please enter your ${data}`,
    },
    {
      min: 2,
      message: `${data} must be at least 2 characters`,
    },
    {
      max: 30,
      message: `${data} must be at most 30 characters`,
    },
    {
      pattern: /^[A-Za-z\s-]+$/,
      message: "Only letters, spaces, and hyphens are allowed",
    },
  ];
};
