async function callApi(endpoint) {
  const headers = { 'Content-Type': 'application/json' }

  const call = await fetch(`http://e32.studio/wp-json/wp/v2/${endpoint}`, {
    method: 'GET',
    headers,
  })

  const response = await call.json()

  return response
}

export async function getHomeAboutData() {
  return callApi('landing')
}

export async function getSlidersData() {
  return callApi('sliders_categories')
}

export async function getArchitectureData() {
  return callApi('slider_architecture')
}

export async function getLightingData() {
  return callApi('slider_lighting')
}