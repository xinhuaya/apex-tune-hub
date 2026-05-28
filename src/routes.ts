/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // marketing pages
  FAQ = '/#faqs',
  Features = '/#features',
  Pricing = '/pricing',
  Blog = '/blog',
  Docs = '/docs',
  ForzaHorizon6 = '/games/forza-horizon-6',
  ForzaHorizon6Guides = '/games/forza-horizon-6/guides',
  ForzaHorizon6BestCars = '/games/forza-horizon-6/best-cars',
  ForzaHorizon6BestDriftCars = '/games/forza-horizon-6/best-drift-cars',
  ForzaHorizon6BestRallyCars = '/games/forza-horizon-6/best-rally-cars',
  ForzaHorizon6BestRoadRacingCars = '/games/forza-horizon-6/best-road-racing-cars',
  ForzaHorizon6BestJdmCars = '/games/forza-horizon-6/best-jdm-cars',
  ForzaHorizon6Cars = '/games/forza-horizon-6/cars',
  ForzaHorizon6CarPass = '/games/forza-horizon-6/car-pass',
  ForzaHorizon6Faq = '/games/forza-horizon-6/faq',
  ForzaHorizon6ReleaseStatus = '/games/forza-horizon-6/release-status',
  ForzaHorizon6PcRequirements = '/games/forza-horizon-6/pc-requirements',
  ForzaHorizon6OfficialSources = '/games/forza-horizon-6/official-sources',
  ForzaHorizon6WeeklyPlaylist = '/games/forza-horizon-6/weekly-playlist',
  ForzaHorizon6Controller = '/settings/forza-horizon-6-controller',
  ForzaHorizon6Pc = '/settings/forza-horizon-6-pc',
  ForzaHorizon6SteamDeck = '/settings/forza-horizon-6-steam-deck',
  ForzaHorizon6Wheel = '/settings/forza-horizon-6-wheel',
  TuneCalculator = '/tools/forza-horizon-6-tune-calculator',
  TunePresets = '/tools/forza-horizon-6-tune-presets',
  TuneCodes = '/tools/forza-horizon-6-tune-codes',
  DriftTuneCalculator = '/tools/forza-horizon-6-drift-tune-calculator',
  GearRatioCalculator = '/tools/forza-horizon-6-gear-ratio-calculator',
  Ai = '/ai',
  About = '/about',
  Contact = '/contact',
  Waitlist = '/waitlist',
  Changelog = '/changelog',
  Roadmap = '/roadmap',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',

  // admin routes
  AdminUsers = '/admin/users',

  // settings routes
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  SettingsApiKeys = '/settings/apikeys',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.SettingsApiKeys,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = Routes.Dashboard;
