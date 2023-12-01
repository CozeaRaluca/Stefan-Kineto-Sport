export const joinClasses = (class1: string, class2?: string): string => {
  if (!class2) {
    return class1;
  }

  return `${class1} ${class2}`;
};
