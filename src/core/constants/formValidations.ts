export const phone = {
  isPhoneNumber: (value: string) =>
    /^\+?[0-9]*$/.test(value) || 'Phone number is invalid',
}

export const email = {
  isEmail: (value: string) => /^\S+@\S+$/i.test(value) || 'Email is invalid',
}
