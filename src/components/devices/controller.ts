// eslint-disable-next-line import/prefer-default-export
export const copyLink = (id: string): void => {
  const url = window.location.href;
  // eslint-disable-next-line compat/compat
  navigator.clipboard.writeText(`${url}#${id}`).catch((err) => console.info(err));
};
