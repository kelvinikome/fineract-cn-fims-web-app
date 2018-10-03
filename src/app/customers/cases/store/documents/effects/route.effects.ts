/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Router} from '@angular/router';
import * as documents from '../document.actions';
import {tap} from 'rxjs/operators';
import {
  CreateDocumentSuccessAction, DeleteDocumentSuccessAction, UpdateDocumentSuccessAction,
  UploadPageSuccessAction
} from '../document.actions';

@Injectable()
export class CaseDocumentRouteEffects {

  @Effect({ dispatch: false })
  createUpdateSuccess$: Observable<Action> = this.actions$
    .pipe(
      ofType(
        documents.CREATE_SUCCESS,
        documents.UPDATE_SUCCESS,
        documents.UPLOAD_PAGE_SUCCESS
      ),
      tap((action: CreateDocumentSuccessAction | UpdateDocumentSuccessAction | UploadPageSuccessAction) =>
        this.router.navigate(['../'], { relativeTo: action.payload.activatedRoute} )
      )
    );

  @Effect({ dispatch: false })
  deleteSuccess$: Observable<Action> = this.actions$
    .pipe(
      ofType(documents.DELETE_SUCCESS),
      tap((action: DeleteDocumentSuccessAction) =>
        this.router.navigate(['../../../../../../../../../../'], { relativeTo: action.payload.activatedRoute} )
      )
    );

  constructor(private actions$: Actions, private router: Router) { }

}
