export default async function getListFromApi() {
    const response = await fetch(`https://swapi.dev/api`, {
        method: 'GET',
    });
    return await response.json();
}