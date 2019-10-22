export class User {
  id: number;
  name: string;
  likes: Likes;
  dislikes: Dislikes;
  comments: MyComment;
}

export class Likes {
  public lartid: number;
}

export class Dislikes {
  public dartid: number;
}

export class MyComment {
  public comid: number;
}

export class ComArtiTemp {
  dtp: Date;
  com: string;
  arti: string;
}
