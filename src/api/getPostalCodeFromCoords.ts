export async function getPostalCodeFromCoords(lat: string, lng: string): Promise<string | null> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_API_KEY}&language=ko`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.status === 'OK' && data.results.length > 0) {
      const addressComponents = data.results[0].address_components;
      const postalCode = addressComponents.find((component: any) =>
        component.types.includes('postal_code')
      );
      return postalCode ? postalCode.long_name : null;
    }
  
    return null;
  }
  