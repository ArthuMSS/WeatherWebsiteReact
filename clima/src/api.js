export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '864f832d31msh8325f14896424a8p1f0724jsnf7b4f964853f',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}