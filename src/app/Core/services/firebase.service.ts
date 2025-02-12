import { inject, Injectable } from '@angular/core';
import { collection, where, collectionData, query, DocumentData, Firestore, WhereFilterOp } from '@angular/fire/firestore';
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

  getDocumentsByCondition(params: IWhere[], collectionName: string): Observable<DocumentData[]> {

    // turn params into an array of where conditions, then expand it
    const _query = query(collection(this.firestore, collectionName),
      ...params.map(n => where(n.fieldPath, n.opStr, n.value))
    );

    return collectionData(_query).pipe(
      first(),
      // ... map
    );
  }
}
