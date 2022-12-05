import { useState, useEffect } from 'react';

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            // update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // cancel the timeout if value changes (also on delay change or unmount)
            // prevents debounced value from updating if value is changed
            // within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            }
        },
        [value, delay] // only re-call effect if value or delay changes
    );

    return debouncedValue;
}

export default useDebounce;