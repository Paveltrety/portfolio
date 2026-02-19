export const sendYandexMetrikEvent = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (window?.ym !== undefined) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.ym(106917761, 'reachGoal', name);
  }
};
