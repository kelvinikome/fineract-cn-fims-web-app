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
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as accountActions from '../account.actions';
import {Router} from '@angular/router';
import { ActionWithPayload } from '../../../../common/store/interface/action-with-payload';

@Injectable()
export class AccountRouteEffects {

  @Effect({ dispatch: false })
  createAccountSuccess$: Observable<ActionWithPayload> = this.actions$
    .ofType(accountActions.CREATE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../../'], { relativeTo: payload.activatedRoute }));

  @Effect({ dispatch: false })
  updateAccountSuccess$: Observable<ActionWithPayload> = this.actions$
    .ofType(accountActions.UPDATE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../'], { relativeTo: payload.activatedRoute }));

  @Effect({ dispatch: false })
  deleteAccountSuccess$: Observable<ActionWithPayload> = this.actions$
    .ofType(accountActions.DELETE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../../../ledgers/detail', payload.resource.ledger], { relativeTo: payload.activatedRoute }));

  constructor(private actions$: Actions, private router: Router) { }
}
