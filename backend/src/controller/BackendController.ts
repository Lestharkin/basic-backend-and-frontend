import { Request, Response } from "express";
import BackendModel from "../model/BackendModel";

class BackendController {

    private model: BackendModel;

    constructor() {
        this.model = new BackendModel();
    }

    public index = (req: Request, res: Response) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });
    
    public getPeople = (req: Request, res: Response) => {
        const { id } = req.params;
        const people = this.model.getPeopleByID(parseInt(id));
        if (people) {
            return res.send(people);
        }
        return res.json({ 'error': 1, 'msg': 'API: id no found' });
    }

    public insertPeople = (req: Request, res: Response) => { 
        this.model.insertPeople(req.body);
        return res.json({ 'error': 0, 'msg': 'API: insert' });
    }

    public updatePeople = (req: Request, res: Response) => { 
        this.model.updatePeople(req.body);
        return res.json({ 'error': 0, 'msg': 'API: update' });
    }

    public deletePeople = (req: Request, res: Response) => {
        const { id } = req.body;
        this.model.deletePeople(parseInt(id));
        return res.json({ 'error': 0, 'msg': `API: delete id: ${id}` });
     }

}

export default BackendController;