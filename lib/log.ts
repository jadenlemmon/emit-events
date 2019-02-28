export default (message: string, color: string, object: any) => {
  if (object && Object.keys(object).length) {
    console.log(
      `%c${message}`,
      `color: ${color}; font-weight: bold;\n`,
      object
    );
  }
};
