export function getErrorMessage(error: any) {
  return error.response?.data?.message || error.message || error;
}
