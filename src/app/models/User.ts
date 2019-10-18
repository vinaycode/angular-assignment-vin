export class User {
  id: number;
  name: string;
  likes: Likes;
  dislikes: Dislikes;
  comments: MyComment;
}

export class Likes {
  lartid: number;
}

export class Dislikes {
  dartid: number;
}

export class MyComment {
  comid: number;
}