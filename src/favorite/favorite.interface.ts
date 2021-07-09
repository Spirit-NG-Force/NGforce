import {Document} from 'mongoose'

export interface Favorite extends Document{
    idcompany : string;
    iduser : string
    name : string;
    title : string;
    description : string
}