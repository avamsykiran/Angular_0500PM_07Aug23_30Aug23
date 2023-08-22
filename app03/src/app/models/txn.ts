export interface Txn {
    id:number;
    dot:string;
    header:string;
    amount:number;
    type:string;
    cid:number;
    isEditing?:boolean;
}
