// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => Promise<boolean> {
  let lastCall = 0;

  return async function (
    this: unknown,
    ...args: Parameters<T>
  ): Promise<boolean> {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      try {
        const result = callback.apply(this, args);
        if (result instanceof Promise) {
          await result;
        }
        return true;
      } catch (error) {
        console.error("Error in throttled function:", error);
        return false;
      }
    }
    return false;
  };
}
