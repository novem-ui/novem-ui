export interface GetIconProps {
  error?: boolean | string | Error
  valid?: boolean
}

const errorIcon =
  "\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H0V16H16V0Z' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M4.66699 4.66663L11.3337 11.3333' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.66699 11.3333L11.3337 4.66663' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\""
const successIcon =
  "\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0H0V16H16V0Z' fill='white' fill-opacity='0.01'/%3E%3Cpath d='M3.33301 7.99996L6.66634 11.3333L13.333 4.66663' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\""

const getIcon = ({ error, valid }: GetIconProps): string | null => {
  if (error) {
    return errorIcon
  }

  if (valid) {
    return successIcon
  }

  return null
}

export default getIcon
