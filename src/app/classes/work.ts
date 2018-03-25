import { Skill } from "./skill";

export class Work {
  name: string;
  work_class: string;
  desc: string;
  cover:string;
  bg:string;
  skills: string[] | Skill[];
  images: Object;
  links?: Object;
  url:String;
}
