export interface KakaoPlace {
    address_name: string;
    category_group_code: string;
    category_group_name: string;
    category_name: string;
    distance: string;
    id: string;
    phone: string;
    place_name: string;
    place_url: string;
    road_address_name: string;
    x: string;
    y: string;
  }

  export interface TransformedKakaoPlace {
    id: string;
    postal_code: string;
    address_name: string;
    road_address_name: string;
    place_name: string;
    x: string;
    y: string;
    english_address: {
      address1: string;
      address2: string;
      city: string;
      country: string;
    };
  }