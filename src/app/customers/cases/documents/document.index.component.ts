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
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {CasesStore} from '../store';
import {SelectAction} from '../store/documents/document.actions';

@Component({
  templateUrl: './document.index.component.html'
})
export class CaseDocumentIndexComponent implements OnInit, OnDestroy {

  private actionsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private casesStore: CasesStore) {}

  ngOnInit(): void {
    this.actionsSubscription = this.route.params
      .map(params => new SelectAction(params['documentId']))
      .subscribe(this.casesStore);
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }

}
