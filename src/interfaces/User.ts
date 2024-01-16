interface IOrganization {
  _id: string;
  name: string;
  owner: string;
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
