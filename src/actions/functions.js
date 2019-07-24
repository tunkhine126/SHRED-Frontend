import { LOGOUT_ACTION } from '/types'

export function logout() {
  return => {
    dispatch(type: LOGOUT_ACTION)
  }
}