export default async function getListFromApi() {
    // const response = await fetch(`https://swapi.dev/api`, {
    const response = await fetch(`https://swapi.dev/api/people/`, {
        method: 'GET',
    });
    return await response.json();
}
