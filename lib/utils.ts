// import qs from "qs" // qs and query-string are different package
import qs from "query-string"

export function getCurrentYear() {
  const currentYear = new Date().getFullYear()
  return currentYear
}

// Form URL
type UrlQueryParams = {
  params: string
  key: string
  value: string
  baseUrl?: string
}
export const formUrlQuery = ({
  params,
  key,
  value,
  baseUrl,
}: UrlQueryParams) => {
  const currentQs = qs.parse(params)
  currentQs[key] = value

  return qs.stringifyUrl(
    {
      url: baseUrl || window.location.pathname,
      query: currentQs,
    },
    { skipNull: true, skipEmptyString: true }
  )
}

// Remove keys from query
type RemoveKeysFromQueryParams = {
  params: string
  keys: string[]
}
export const RemoveKeysFromQuery = ({
  params,
  keys,
}: RemoveKeysFromQueryParams) => {
  const currentQs = qs.parse(params)
  keys.forEach((key) => {
    delete currentQs[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentQs,
    },
    { skipNull: true, skipEmptyString: true }
  )
}
