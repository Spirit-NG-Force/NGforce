import {Document} from 'mongoose'

export interface Calendar extends Document{
  id: string;
  title: string;
  start: string;
  end:string;
  color : string;
}
