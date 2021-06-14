import { AUTH_ROUTES, DASHBOARD_ROUTES } from "../constants/routes";


function loadView(view) {
	return () => import(/* webpackChunkName: "about" */ `../views/${view}`);
}

export const routes = [
	{ path: '/compliance', redirect: '/compliance/company' },
	{ path: '/origination', redirect: '/origination/pending' },
	// { path: '/origination/details', redirect: '/origination/details/info' },
  {
		path: '*',
		name: '404',
		component: loadView('NotFound.vue')
	},
  {
		path: AUTH_ROUTES.SIGNUP,
		name: "Signup",
		component: loadView("auth/Signup.vue"),
		// beforeEnter: redirectIfAuthenticated,
	},
  {
		path: AUTH_ROUTES.LOGIN,
		name: "Login",
		component: loadView("auth/Login.vue"),
		// beforeEnter: redirectIfAuthenticated,
	},
	{
		path: DASHBOARD_ROUTES.GET_STARTED,
		name: 'Get Started',
		component: loadView('dashboard/GetStarted.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.COMPLIANCE,
		name: 'Compliance',
		component: loadView('dashboard/Compliance.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.HOME,
		name: 'Home',
		component: loadView('Home.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.ORIGINATION,
		name: 'Origination',
		component: loadView('dashboard/origination/Base.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.USER,
		name: 'User Details',
		component: loadView('dashboard/User.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.REPORTS,
		name: 'Reports',
		component: loadView('dashboard/Home.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.BILLINGS,
		name: 'Billings',
		component: loadView('dashboard/Home.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.ACTIVITY,
		name: 'Activity',
		component: loadView('dashboard/Home.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.SETTINGS,
		name: 'Settings',
		component: loadView('dashboard/Home.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: DASHBOARD_ROUTES.SUPPORT,
		name: 'Support',
		component: loadView('dashboard/Support.vue'),
		meta: {
			requiresAuth: true,
		}
	},
]