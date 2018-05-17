export class Weather {
        cod: String;
        message: Number;
        cnt: Number;
        list: [
            {
                dt: Number;
                main: {
                    temp: Number;
                    temp_min: Number;
                    temp_max: Number;
                    pressure: Number;
                    sea_level: Number;
                    grnd_level: Number;
                    humidity: Number;
                    temp_kf: Number;
                };
                weather: [
                    {
                        id: Number;
                        main: String;
                        description: String;
                        icon: String;
                    }
                ];
                clouds: {
                    all: Number;
                };
                wind: {
                    speed: Number;
                    deg: Number;
                };
                sys: {
                    pod: String;
                };
                dt_txt: String;
            }
        ];
        city: {
            id: Number;
            name: String;
            coord: {
                lat: Number;
                lon: Number;
            };
            country: String;
            population: Number;
        };
}