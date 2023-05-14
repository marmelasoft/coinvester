export type ProfileType = {
  id: number | string;
  avatar: string;
  name: string;
  time: string;
};

export type Likes = {
  like: boolean;
  value: number;
};

export type PostImageType = {
  img: string;
  featured?: boolean;
  title?: string;
};

export type CommentDataType = {
  name?: string;
  comment?: string;
  likes?: Likes;
  video?: string;
  replies?: Reply[];
};

export type Reply = {
  id?: string | number;
  profile?: ProfileType;
  data: CommentDataType;
};

export type Comment = {
  id: string | number;
  profile: ProfileType;
  data?: CommentDataType;
};

export type PostDataType = {
  id?: string | number;
  content: string;
  images: PostImageType[];
  video?: string;
  likes: Likes;
  comments?: Comment[];
};

export type PostType = {
  id?: any;
  profile: ProfileType;
  data: PostDataType;
};
