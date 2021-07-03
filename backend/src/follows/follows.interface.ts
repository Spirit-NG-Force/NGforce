import {Document} from 'mongoose'

export interface Follows extends Document{
    iduser : string;
    idcompany : string;
}