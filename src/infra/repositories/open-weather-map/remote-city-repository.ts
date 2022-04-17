import {IRemoteCityRepository} from '../../../domain/repositories/remote-city-repository';
import {CityModel} from '../../../domain/models/city';
import {IHttpClient} from '../../../domain/gateways';

function mapCity(city: any): CityModel {
  return {
    id: city.id,
    name: city.name,
    country: city.sys.country,
  };
}

export class OWMCityRepository implements IRemoteCityRepository {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly appId: string,
  ) {}

  async search(text: string): Promise<CityModel[]> {
    const response = await this.httpClient.request({
      method: 'get',
      url: '/weather',
      params: {
        q: text,
        appid: this.appId,
      },
    });

    return [mapCity(response.body)];
  }
}
