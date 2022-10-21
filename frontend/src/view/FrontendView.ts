import { IPeople } from "src/interface/IPeople";

export class FrontendView {

    private HTMLTable: HTMLElement | null;

    constructor() {
        this.HTMLTable = this.getElement('#people');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    private createElement = (tag: string, classNames: string[]) => {
        const element = document.createElement(tag);
        if (classNames) element.classList.add(...classNames);
        return element;
    }

    private fillRow(key: string, value: any) {
        if (this.HTMLTable) {
            let row = this.createElement('tr', []);
            let td = this.createElement('td', []);
            td.innerHTML = key + ': ';
            row.appendChild(td);
            td = this.createElement('td', []);            
            if (Array.isArray(value)) {
                let ul = this.createElement('ul', ['list-group', 'm-1']);
                let li: HTMLElement;
                value.forEach(item => {
                    li = this.createElement('li', ['list-group-item']);
                    li.innerHTML = item;               
                    ul.appendChild(li);
                });
                td.appendChild(ul);
            } else {
                td.innerHTML = value;
            }
            row.appendChild(td);
            this.HTMLTable.appendChild(row);
        }
    }

    public fillPeopleTable = (people: IPeople) => {
        this.fillRow('Name', people.name);
        this.fillRow('Height', people.height);
        this.fillRow('Mass', people.mass);
        this.fillRow('Hair color', people.hair_color);
        this.fillRow('Eye color', people.eye_color);
        this.fillRow('Skin color', people.skin_color);
        this.fillRow('Birth year', people.birth_year);
        this.fillRow('Gender', people.gender);
        this.fillRow('Homeworld', people.homeworld);
        this.fillRow('Films', people.films);
        this.fillRow('Species', people.species);
        this.fillRow('Vehicles', people.vehicles);
        this.fillRow('Starships', people.starships);
        this.fillRow('Created', people.created);
        this.fillRow('Edited', people.edited);
        this.fillRow('Url', people.url);
    }

}