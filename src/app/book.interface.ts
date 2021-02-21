/**
 * Title: book.interface.ts
 * Author: Sarah Massie
 * Date: 30 January 2021
 * Description: interface for the book list information
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
