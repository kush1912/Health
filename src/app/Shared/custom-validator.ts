import { FormControl } from '@angular/forms'

export function validateDob(c: FormControl) {
  const dob = new Date(c.value)
  const today = new Date()
  const diff = today.getFullYear() - dob.getFullYear()
  if (diff >= 20 && diff <= 100) {
    return null
  }
  return {
    invalidDob: {
      message: "Age should be between 20 and 100 years"
    }
  }
}
  
export function validatePhone(c: FormControl) {
  if (String(c.value).length === 10) {
    return null
  }
  return {
    invalidPhone: {
      message: "Mobile Number should have 10 digits"
    }
  }
}

export function validatePincode(c: FormControl) {
  if (String(c.value).length === 6) {
    return null
  }
  return {
    invalidPincode: {
      message: "Invalid Pincode"
    }
  }
}

export function validateDoa(c: FormControl) {
  const msDay = 86400000
  const appointmentDate = new Date(c.value)
  const today = new Date()
  const diff = appointmentDate.getTime() - today.getTime()
  if (diff < (7 * msDay) && diff > 0) return null
  return {
    invalidDoa: {
      message: "Invalid DOA"
    }
  }
}