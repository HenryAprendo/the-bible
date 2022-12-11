export interface Books {
    abbreviation: string;
    bibleId: string;
    id: string;
    name: string;
    nameLong: string;
}

export interface Chapters extends Omit<Books, 'abbreviation' | 'name' | 'nameLong'> {
    bookId: string;
    number:string;
    reference: string;
}

