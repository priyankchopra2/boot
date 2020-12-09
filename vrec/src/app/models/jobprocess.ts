import { User } from "./user";

import { JobApplication } from "./JobApplication";

export class Jobprocess {
  jobid: number;
  currentround: number;
  marks: number;
  selected: boolean;
  user = new User();
 resume:String;
  jobApplication = new JobApplication();
  constructor() {}
  //	private CommonsMultipartFile resume;
}
