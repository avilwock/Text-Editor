//imports openDB from idb
import { openDB } from 'idb';

//sets up a variable, initdb, to open the database. It sets it so that if the database exists
//then it opens, if not then it creates the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// this creates the edit command for the database content
export const putDb = async (content) => {
  //it awaits opendb of the first version of jate
  const db = await openDB('jate', 1);
  //it creates a transaction or readwrite so that changes can be made to the text
  const tx = db.transaction('jate', 'readwrite');
  //stores the transaction in the object store as jate
  const store =tx.objectStore('jate');
  //putdates the content of the program
  const request = store.put({ content });
  const result = await request;
};
// This creates a get request for the database
export const getDb = async () => {
  //this awaits the data from the first version of jate
  const db = await openDB('jate', 1);
  //this one does a get request, read only
  const tx = db.transaction('jate', 'readonly');
  //this one accesses the objectStore of jate
  const store = tx.objectStore('jate');
  //this one pulls all of the data stored in the first version
  const request = store.get(1);
  //this provides results after a request is made
  const result = await request;
  console.log('result.value', result);
  //this returns the results
  return result?.value;
};

//calls the function
initdb();