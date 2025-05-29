import { transformAddressData } from './transformAddressData';
import { searchPlace } from '../api/searchPlace';

export async function getKeywordToObject(keyword: string): Promise<any> {
    const searchedKoreanAddress = await searchPlace(keyword);
    const transformedAddressData = await transformAddressData(searchedKoreanAddress);
    
    return transformedAddressData;
}