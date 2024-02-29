import { useCallback, useState } from 'react'

export function useStatusState<ResultType, Arguments = void>() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [result, setResult] = useState<ResultType>()

  const wrapPromise = useCallback((call: (args: Arguments) => Promise<ResultType>) => {
    return async (args: Arguments) => {
      setIsLoading(true)
      setError(undefined)
      setResult(undefined)
      try {
        const result = await call(args)
        setIsLoading(false)
        setResult(result)

        return result
      } catch (err) {
        setIsLoading(false)
        setError(JSON.stringify(err))
        throw err
      }
    }
  }, [setIsLoading, setError, setResult])

  return {
    statuses: {
      isLoading,
      error,
      result,
    },
    setIsLoading,
    setError,
    setResult,
    wrapPromise,
  }
}
