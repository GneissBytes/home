import sampleData from "../assets/data/sampledata.json";

interface Action {
  type: string;
  payload: any;
}

export interface Home {
  name: string;
  description: string;
  occupation: string;
}

export interface About {
  bio: string;
  name: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  phone?: string;
  email: string;
  profile_pic: string;
  resume_link?: string;
}

export interface EducationItem {
  university: string;
  faculty: string;
  degree: string;
  graduated: string;
  description?: string;
  thesis?: string;
}

export interface ExperienceItem {
  organization: string;
  totaltime?: string;
  roles: Array<{ roletitle: string; dates: string; description: string }>;
}

export interface SkillsItem {
  title: string;
  subtitle?: string;
  level: number;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  dates: string;
  credentialId?: string;
  credentialsLink?: string;
}

export interface WorksItem {
  title: string;
  description: string;
  imageName: string;
  imageAlt: string;
  links: {
    github?: string;
    own?: string;
    expo?: string;
  };
}

export interface Data {
  home: Home;
  about: About;
  education: Array<EducationItem>;
  experience: Array<ExperienceItem>;
  skills: Array<SkillsItem>;
  certifications: Array<CertificationItem>;
  works: Array<WorksItem>;
}

const dataReducer = (data: Data = sampleData, action: Action) => {
  switch (action.type) {
    default:
      return data;
  }
};

export default dataReducer;
