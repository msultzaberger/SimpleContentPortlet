/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('form',function(a){var b={action:1,id:1,method:1,enctype:1,target:1};return{title:a.lang.form.title,minWidth:350,minHeight:200,onShow:function(){var e=this;delete e.form;var c=e.getParentEditor().getSelection().getStartElement(),d=c&&c.getAscendant('form',true);if(d){e.form=d;e.setupContent(d);}},onOk:function(){var c,d=this.form,e=!d;if(e){c=this.getParentEditor();d=c.document.createElement('form');d.append(c.document.createElement('br'));}if(e)c.insertElement(d);this.commitContent(d);},onLoad:function(){function c(e){this.setValue(e.getAttribute(this.id)||'');};function d(e){var f=this;if(f.getValue())e.setAttribute(f.id,f.getValue());else e.removeAttribute(f.id);};this.foreach(function(e){if(b[e.id]){e.setup=c;e.commit=d;}});},contents:[{id:'info',label:a.lang.form.title,title:a.lang.form.title,elements:[{id:'txtName',type:'text',label:a.lang.common.name,'default':'',accessKey:'N',setup:function(c){this.setValue(c.getAttribute('_cke_saved_name')||c.getAttribute('name')||'');},commit:function(c){if(this.getValue())c.setAttribute('_cke_saved_name',this.getValue());else{c.removeAttribute('_cke_saved_name');c.removeAttribute('name');}}},{id:'action',type:'text',label:a.lang.form.action,'default':'',accessKey:'A'},{type:'hbox',widths:['45%','55%'],children:[{id:'id',type:'text',label:a.lang.common.id,'default':'',accessKey:'I'},{id:'enctype',type:'select',label:a.lang.form.encoding,style:'width:100%',accessKey:'E','default':'',items:[[''],['text/plain'],['multipart/form-data'],['application/x-www-form-urlencoded']]}]},{type:'hbox',widths:['45%','55%'],children:[{id:'target',type:'select',label:a.lang.common.target,style:'width:100%',accessKey:'M','default':'',items:[[a.lang.common.notSet,''],[a.lang.common.targetNew,'_blank'],[a.lang.common.targetTop,'_top'],[a.lang.common.targetSelf,'_self'],[a.lang.common.targetParent,'_parent']]},{id:'method',type:'select',label:a.lang.form.method,accessKey:'M','default':'GET',items:[['GET','get'],['POST','post']]}]}]}]};});
