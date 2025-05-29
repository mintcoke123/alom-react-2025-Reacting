export function getEnglishAddressToObject(address: string): {
    address1: string;
    address2: string;
    city: string;
    country: string;
} {
    const addressParts = address.split(',');
    return {
        address1: addressParts[0],
        address2: addressParts[1],
        city: addressParts[2],
        country: addressParts[3],
    };
}
