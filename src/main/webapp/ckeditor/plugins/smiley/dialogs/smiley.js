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

CKEDITOR.dialog.add('smiley',function(a){var b=a.config,c=a.lang.smiley,d=b.smiley_images,e=8,f,g,h=function(m){var n=m.data.getTarget(),o=n.getName();if(o=='td')n=n.getChild([0,0]);else if(o=='a')n=n.getChild(0);else if(o!='img')return;var p=n.getAttribute('cke_src'),q=n.getAttribute('title'),r=a.document.createElement('img',{attributes:{src:p,_cke_saved_src:p,title:q,alt:q}});a.insertElement(r);g.hide();m.data.preventDefault();},i=CKEDITOR.tools.addFunction(function(m,n){m=new CKEDITOR.dom.event(m);n=new CKEDITOR.dom.element(n);var o,p,q=m.getKeystroke(),r=a.lang.dir=='rtl';switch(q){case 38:if(o=n.getParent().getParent().getPrevious()){p=o.getChild([n.getParent().getIndex(),0]);p.focus();}m.preventDefault();break;case 40:if(o=n.getParent().getParent().getNext()){p=o.getChild([n.getParent().getIndex(),0]);if(p)p.focus();}m.preventDefault();break;case 32:h({data:m});m.preventDefault();break;case r?37:39:case 9:if(o=n.getParent().getNext()){p=o.getChild(0);p.focus();m.preventDefault(true);}else if(o=n.getParent().getParent().getNext()){p=o.getChild([0,0]);if(p)p.focus();m.preventDefault(true);}break;case r?39:37:case CKEDITOR.SHIFT+9:if(o=n.getParent().getPrevious()){p=o.getChild(0);p.focus();m.preventDefault(true);}else if(o=n.getParent().getParent().getPrevious()){p=o.getLast().getChild(0);p.focus();m.preventDefault(true);}break;default:return;}}),j=['<div><span id="smiley_emtions_label" class="cke_voice_label">'+c.options+'</span>','<table role="listbox" aria-labelledby="smiley_emtions_label" style="width:100%;height:100%" cellspacing="2" cellpadding="2"',CKEDITOR.env.ie&&CKEDITOR.env.quirks?' style="position:absolute;"':'','><tbody>'],k=d.length;for(f=0;f<k;f++){if(f%e===0)j.push('<tr>');j.push('<td class="cke_dark_background cke_hand cke_centered" style="vertical-align: middle;"><a href="javascript:void(0)" role="option"',' aria-posinset="'+(f+1)+'"',' aria-setsize="'+k+'"',' aria-labelledby="cke_smile_label_'+f+'"',' class="cke_smile" tabindex="-1" onkeydown="CKEDITOR.tools.callFunction( ',i,', event, this );">','<img class="hand" title="',b.smiley_descriptions[f],'" cke_src="',CKEDITOR.tools.htmlEncode(b.smiley_path+d[f]),'" alt="',b.smiley_descriptions[f],'"',' src="',CKEDITOR.tools.htmlEncode(b.smiley_path+d[f]),'"',CKEDITOR.env.ie?" onload=\"this.setAttribute('width', 2); this.removeAttribute('width');\" ":'','><span id="cke_smile_label_'+f+'" class="cke_voice_label">'+b.smiley_descriptions[f]+'</span>'+'</a>','</td>');if(f%e==e-1)j.push('</tr>');
}if(f<e-1){for(;f<e-1;f++)j.push('<td></td>');j.push('</tr>');}j.push('</tbody></table></div>');var l={type:'html',html:j.join(''),onLoad:function(m){g=m.sender;},focus:function(){var m=this.getElement().getElementsByTag('a').getItem(0);m.focus();},onClick:h,style:'width: 100%; border-collapse: separate;'};return{title:a.lang.smiley.title,minWidth:270,minHeight:120,contents:[{id:'tab1',label:'',title:'',expand:true,padding:0,elements:[l]}],buttons:[CKEDITOR.dialog.cancelButton]};});
