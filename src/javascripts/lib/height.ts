export const height = (el: HTMLElement) => {
  const { paddingTop, paddingBottom } = getComputedStyle(el);
  return el.clientHeight - (parseFloat(paddingTop) + parseFloat(paddingBottom));
};
