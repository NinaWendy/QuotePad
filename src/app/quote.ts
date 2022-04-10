export class Quote {

    constructor
    (
     public id:number,  
     public author:string,
     public text:string, 
     public writer:string,
     public publicationDate:Date,
     public upVote: number,
     public downVote:number,
     public visible:boolean
     )
    {
        this.id= id;
        this.author=author;
        this.text=text;
        this.writer=writer;
        this.publicationDate=publicationDate;
        this.upVote=upVote;
        this.downVote=downVote;
        this.visible=visible;

    }
}
