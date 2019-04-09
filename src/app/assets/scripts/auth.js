export const logout = () => {
  delete window.localStorage.token
  delete window.sessionStorage.token
}

export const isLoggedIn = () => {
  return window.localStorage.token || window.sessionStorage.token
}

export const login = (token, permanent) => {
  const prefferedBrain = { true: 'localStorage', false: 'sessionStorage' }[permanent]
  window[prefferedBrain].token = token
}

export const requireAuth = (to, _from, next) => {
  if (isLoggedIn()) return next()
  next({
    path: '/login'
  })
}
