import { useEffect, DependencyList } from 'react'

/**
 * Custom hook for adding a debounced effect.
 *
 * @param {Function} fn - The function to execute after debouncing.
 * @param {number} waitTime - The debounce time in milliseconds.
 * @param {DependencyList} deps - The dependency list for the effect.
 */
export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: DependencyList,
) {
  useEffect(() => {
    // Set a timeout to execute the function after the debounce time.
    const t = setTimeout(() => {
      fn.apply(undefined, deps as any)
    }, waitTime)

    // Cleanup: Clear the timeout when component unmounts or dependencies change.
    return () => {
      clearTimeout(t)
    }
  }, deps)
}