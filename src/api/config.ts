const getConfigHeaders = () => ({
  'Content-Type': 'application/json',
  'x-api-key': process.env.REACT_APP_API_KEY,
})

export const getRestApiConfig = () => {
  return {
    baseUrl: process.env.REACT_APP_API_URL,
    apiConfig: {
      headers: getConfigHeaders(),
      data: {},
    },
  }
}
