import expect from 'expect';
import { formatDisplayNameAuthor } from './selectors';

describe('Authors Selectors', () => { 
    describe('formatDisplayNameAuthor', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 1, firstName:'Sony', lastName:'Vaio'},
                {id: 2, firstName:'MacBook', lastName:'Pro'}
            ];

            const expected = [
                {value:1, text:'Sony Vaio'},
                {value:2, text:'MacBook Pro'}
            ];

            expect(formatDisplayNameAuthor(authors)).toEqual(expected);
        });
    });
});