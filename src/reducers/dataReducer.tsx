import sampleData from "../data/sampledata.json";

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
  street: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
  email: string;
  profile_pic: string;
  resume_link: string;
}

export interface Data {
  home: Home;
  about: About;
}

const dataReducer = (data: Data = sampleData, action: Action) => {
  switch (action.type) {
    default:
      return data;
  }
};

export default dataReducer;
