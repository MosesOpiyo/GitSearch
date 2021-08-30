export class User {
    public showRepo:boolean;
    public showFollowing:boolean;
    public showFollowers:boolean;

    constructor(public userName:string, public bio:string, public repoNumber:number, public followers:number, public following:number,public avatar: string){
        this.showRepo =true;
        this.showFollowing = false;
        this.showFollowers = false;
    }
}
