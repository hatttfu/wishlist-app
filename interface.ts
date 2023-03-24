export interface IWish {
  id: string,
  userId: string,
  title: string,
  likeId?: string,
  pictures?: string[],
  links?: string[],
  description?: string
}

export enum Gender {
  FEMALE,
  MALE
}

export interface IFriend {
  id: string,
  userId: string,
  title: string;
  pictures: string[],
  links: [],
  description: string
}
