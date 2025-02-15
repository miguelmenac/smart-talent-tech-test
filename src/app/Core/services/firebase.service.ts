import { inject, Injectable } from '@angular/core';
import { collection, where, collectionData, query, DocumentData, Firestore, WhereFilterOp, setDoc, doc, addDoc, DocumentReference } from '@angular/fire/firestore';
import { getDoc, updateDoc } from 'firebase/firestore';
import { first, Observable } from 'rxjs';


export interface IWhere {
  fieldPath: string;
  opStr: WhereFilterOp;
  value?: any;
}

@Injectable(
  { providedIn: 'root' }
)

export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getDocuments(collectionName: string): Observable<DocumentData> {
    const coll = collection(this.firestore, collectionName);
    return collectionData(coll, {
      idField: 'id'
    })
  }

  async getDocument(collectionName: string, id: string): Promise<DocumentData> {
    const docRef = doc(this.firestore, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error();
    }
  }

  getDocumentsByCondition(params: IWhere[], collectionName: string): Observable<DocumentData[]> {
    const _query = query(collection(this.firestore, collectionName),
      ...params.map(n => where(n.fieldPath, n.opStr, n.value))
    );

    return collectionData(_query).pipe(
      first(),
    );
  }

  async createDocument(collectionName: string, data: any): Promise<DocumentReference> {
    return await addDoc(collection(this.firestore, collectionName), data);
  }

  async updateDocument(collectionName: string, data: any, id: string): Promise<void> {
    const ref = doc(this.firestore, collectionName, id);
    return await updateDoc(ref, data);
  }
}
