import { baseApi } from './api';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (data: any) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data: { userId: string; otp: string }) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data: { email: string }) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data: { userId: string; otp: string; newPassword: string }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data: { userId: string }) => ({
        url: '/auth/resend-otp',
        method: 'POST',
        body: data,
      }),
    }),
    getCountries: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/countries',
        method: 'GET',
        params: params || {},
      }),
    }),
    getEducations: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/educations',
        method: 'GET',
        params: params || {},
      }),
    }),
    getSkills: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/skills',
        method: 'GET',
        params: params || {},
      }),
    }),
    getJobTypes: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/job-types',
        method: 'GET',
        params: params || {},
      }),
    }),
    getExperienceLevels: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/experience-levels',
        method: 'GET',
        params: params || {},
      }),
    }),
    getLocations: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/locations',
        method: 'GET',
        params: params || {},
      }),
    }),
    getDomains: builder.query({
      query: (params: { search?: string } | void) => ({
        url: '/domains',
        method: 'GET',
        params: params || {},
      }),
    }),
  }),
});

export const { 
  useLoginMutation, 
  useSignupMutation, 
  useVerifyOtpMutation, 
  useForgotPasswordMutation, 
  useResetPasswordMutation,
  useResendOtpMutation,
  useGetCountriesQuery,
  useGetEducationsQuery,
  useGetSkillsQuery,
  useGetJobTypesQuery,
  useGetExperienceLevelsQuery,
  useGetLocationsQuery,
  useGetDomainsQuery,
} = authApi;
