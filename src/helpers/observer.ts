export const observer = (
  element: HTMLElement | null,
  threshold: number,
  rootMargin: number,
) => {
  if (!element) return;

  // Callback function to execute when the observer is triggered
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.setAttribute("aria-hidden", "true");
      } else {
        entry.target.setAttribute("aria-hidden", "false");
      }
    });
  };

  // Options for the observer
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: `${rootMargin}px`,
    threshold: threshold,
  };

  // Create the observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  // Start observing the target element
  observer.observe(element);
};
