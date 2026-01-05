import axios from 'axios'

const BASE = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: `${BASE}/api`,
  headers: { 'Content-Type': 'application/json' },
})

export async function fetchGalleryGroups() {
  const res = await api.get('/gallery-groups')
  return res.data
}

export async function createGalleryGroup(payload: any) {
  const res = await api.post('/admin/gallery-groups', payload)
  return res.data
}

export async function fetchProductsBySlug(slug: string) {
  const res = await api.get(`/products/${slug}`)
  return res.data
}

export async function fetchAllProducts() {
  const res = await api.get('/products')
  return res.data
}

export async function fetchCenters() {
  const res = await api.get('/centers')
  return res.data
}

export default api
