export const BASE_API = process.env.VUE_APP_BASE_API;
export const APP_URL = process.env.VUE_APP_APP_URL;

export const AUTH_ROUTES = {
  SIGNUP: '/signup',
  LOGIN: '/login',
}

export const DASHBOARD_ROUTES = {
  GET_STARTED: '/get-started',
  COMPLIANCE: '/compliance/:step',
  HOME: '/',
  ORIGINATION: '/origination/:tab',
  USER: '/user/:select',
  REPORTS: '/reports',
  BILLINGS: '/billings',
  ACTIVITY: '/activity',
  SETTINGS: '/settings',
  SUPPORT: '/support'
}