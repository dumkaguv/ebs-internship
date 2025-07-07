// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => boolean {
  let lastCall = 0;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();
    const difference = now - lastCall;

    if (difference >= delay) {
      lastCall = now;
      callback.apply(this, args);

      return true;
    }

    return false;
  };
}
