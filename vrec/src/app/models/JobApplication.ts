import { Interviewer } from './Interviewer';
import { JobAppCategory } from './JobAppCategory';
import { JobAppPositionType } from './JobAppPositionType';


export class JobApplication{
    
    jid:number;
    title:string;
    category:JobAppCategory;
    positionType:JobAppPositionType;
    jobDescription:string;
    rounds:number;
    interviewer:Interviewer;
}

