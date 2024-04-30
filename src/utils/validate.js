export const checkValidateData = (email, password, fullname) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,20}$/.test(email)
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  const isNameValid =
    /^(?:[A-Za-z]+(?:\s+[A-Za-z]+)*(?:\s*[-',.]?\s*[A-Za-z]+)*)+$/.test(
      fullname
    )
  if (!isEmailValid) return 'Email ID is not valid'
  if (!isNameValid) return 'Name is not valid'
  if (!isPasswordValid) return 'Password is not valid'

  return null
}
