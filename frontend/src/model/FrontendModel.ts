export class FrontendModel {

    public url: string;

    constructor () {
        this.url = 'https://swapi.dev/api/';
        //this.url = 'http://172.18.139.97s:1802/api/';
    }

    public getPeopleByID(id: number, fn: Function): void {
        this.http(`${this.url}people/${id}`, 'get', fn);
    }


    public http = async (url: string, method: string, fn: Function) => {
        const response = await fetch(url, {method: method});
        const data = await response.json();
        fn(data);
    }
}
