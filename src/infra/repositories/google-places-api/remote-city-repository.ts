import {IRemoteCityRepository} from '../../../domain/repositories/remote-city-repository';
import {CityModel} from '../../../domain/models/city';
import {IHttpClient} from '../../../domain/gateways';

function mapCity(city: any): CityModel {
  const fullAddress = city.formatted_address || '';
  const address = fullAddress.substring(fullAddress.indexOf(', ') + 1);

  return {
    id: city.place_id,
    lat: city.geometry.location.lat,
    lon: city.geometry.location.lng,
    name: city.name,
    address,
  };
}

export class GPACityRepository implements IRemoteCityRepository {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly appId: string,
  ) {}

  async search(text: string): Promise<CityModel[]> {
    const response = await this.httpClient.request({
      method: 'get',
      url: '/place/textsearch/json',
      params: {
        query: text,
        key: this.appId,
        inputtype: 'textquery',
        fields: 'place_id,formatted_address,name,geometry',
        language: 'pt',
        types: '(cities)',
        sensor: false,
      },
    });

    return response.body.results.map(mapCity);
  }
}
