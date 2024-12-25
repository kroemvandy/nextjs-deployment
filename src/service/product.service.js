// get dog image
export async function getDogService() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {cache: 'no-store'});
    const data = res.json();
    return data;
}

export async function getAllProductService() {
    const res = await fetch('https://666d14e47a3738f7cacb685b.mockapi.io/api/product');
    const data = res.json();
    return data;
}

export async function getProductByIdService(id) {
    const res = await fetch(`https://666d14e47a3738f7cacb685b.mockapi.io/api/product/${id}`)
    const data = res.json();
    return data;
}