interface IPlan {
  _id: string;
  limit: number;
  usage: number;
  validity: string;
  organization: string;
}

interface IOrganization {
  _id: string;
  name: string;
  owner: string;
  plan: IPlan | null;
}

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
  organization: IOrganization;
}

export default IUser;
export type { IOrganization, IPlan };
