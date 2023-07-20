import axios from "axios"
const sDGTestWebAppAPI = axios.create({
  baseURL: "https://sdg-test-webapp-36733.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return sDGTestWebAppAPI.post(`/api/v1/login/`)
}
function api_v1_resource_list(payload) {
  return sDGTestWebAppAPI.get(`/api/v1/resource/`)
}
function api_v1_resource_create(payload) {
  return sDGTestWebAppAPI.post(`/api/v1/resource/`, payload.data)
}
function api_v1_resource_read(payload) {
  return sDGTestWebAppAPI.get(`/api/v1/resource/${payload.id}/`)
}
function api_v1_resource_update(payload) {
  return sDGTestWebAppAPI.put(`/api/v1/resource/${payload.id}/`, payload.data)
}
function api_v1_resource_partial_update(payload) {
  return sDGTestWebAppAPI.patch(`/api/v1/resource/${payload.id}/`, payload.data)
}
function api_v1_resource_delete(payload) {
  return sDGTestWebAppAPI.delete(`/api/v1/resource/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return sDGTestWebAppAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_task_list(payload) {
  return sDGTestWebAppAPI.get(`/api/v1/task/`)
}
function api_v1_task_create(payload) {
  return sDGTestWebAppAPI.post(`/api/v1/task/`, payload.data)
}
function api_v1_task_read(payload) {
  return sDGTestWebAppAPI.get(`/api/v1/task/${payload.id}/`)
}
function api_v1_task_update(payload) {
  return sDGTestWebAppAPI.put(`/api/v1/task/${payload.id}/`, payload.data)
}
function api_v1_task_partial_update(payload) {
  return sDGTestWebAppAPI.patch(`/api/v1/task/${payload.id}/`, payload.data)
}
function api_v1_task_delete(payload) {
  return sDGTestWebAppAPI.delete(`/api/v1/task/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return sDGTestWebAppAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return sDGTestWebAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return sDGTestWebAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return sDGTestWebAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return sDGTestWebAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return sDGTestWebAppAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return sDGTestWebAppAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return sDGTestWebAppAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return sDGTestWebAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return sDGTestWebAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return sDGTestWebAppAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_resource_list,
  api_v1_resource_create,
  api_v1_resource_read,
  api_v1_resource_update,
  api_v1_resource_partial_update,
  api_v1_resource_delete,
  api_v1_signup_create,
  api_v1_task_list,
  api_v1_task_create,
  api_v1_task_read,
  api_v1_task_update,
  api_v1_task_partial_update,
  api_v1_task_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
