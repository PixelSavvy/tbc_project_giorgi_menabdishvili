export const observer = (
  element: HTMLElement | null,
  threshold: number,
  rootMargin: number,
) => {
  if (!element) return;

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.setAttribute("aria-hidden", "true");
      } else {
        entry.target.setAttribute("aria-hidden", "false");
      }
    });
  };

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: `${rootMargin}px`,
    threshold: threshold,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  return observer.observe(element);
};
