export const pushRoute = (url: string) => {
  history.pushState({}, "", url);
  window.location.href = url;
};
