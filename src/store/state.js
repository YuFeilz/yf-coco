let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city || defaultCity
  }
} catch (e) {}
export default {
  city: defaultCity
}
