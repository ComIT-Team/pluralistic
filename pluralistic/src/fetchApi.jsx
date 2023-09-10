let api = 'https://fakestoreapi.com/products'
export async function fetchApi(){
  try {
    const res = await fetch(api)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}