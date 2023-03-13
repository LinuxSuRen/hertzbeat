"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[7940],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62733:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},i=void 0,l={unversionedId:"help/alert_webhook",id:"version-v1.1.x/help/alert_webhook",title:"Alert WebHook callback notification",description:"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/alert_webhook.md",sourceDirName:"help",slug:"/help/alert_webhook",permalink:"/docs/v1.1.x/help/alert_webhook",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/alert_webhook.md",tags:[],version:"v1.1.x",frontMatter:{id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},sidebar:"docs",previous:{title:"Alert email notification",permalink:"/docs/v1.1.x/help/alert_email"},next:{title:"Alert Discord bot notification",permalink:"/docs/v1.1.x/help/alert_discord"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"WebHook callback POST body BODY content",id:"webhook-callback-post-body-body-content",level:3},{value:"Webhook notification common issues",id:"webhook-notification-common-issues",level:3}],m={toc:s};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.          ")),(0,a.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select WebHook notification method\u3011-> \u3010Set WebHook callback address\u3011 -> \u3010Confirm\u3011")," ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:n(23565).Z,width:"3804",height:"1184"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:n(96862).Z,width:"3756",height:"1288"}),"    "),(0,a.kt)("h3",{id:"webhook-callback-post-body-body-content"},"WebHook callback POST body BODY content"),(0,a.kt)("p",null,"Content format\uff1aJSON  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":76456,\n    "target":"available",\n    "alertDefineId":232,\n    "priority":0,\n    "content":"\u76d1\u63a7\u7d27\u6025\u53ef\u7528\u6027\u544a\u8b66: UN_CONNECTABLE",\n    "tag": {\n      "monitorId": 3543534545,\n      "monitorName":"API_poetry.didi.top"\n    },\n    "status":0,\n    "times":1,\n    "gmtCreate":"2022-02-25T13:32:13",\n    "gmtUpdate":"2022-02-25T13:32:13"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm record entity primary key index ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},"string title: Alert target object: monitor availability-available metrics-app.metrics.field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alertDefineId\tinteger($int64) title: Alarm definition ID associated with the alarm"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"string($byte) title: Alarm level 0: high-emergency-critical alarm-red 1: medium-critical-critical alarm-orange 2: low-warning-warning alarm-yellow")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string title: The actual content of the alarm notification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"string($byte) title: Alarm status: 0-normal alarm (to be processed) 1-threshold triggered but not reached the number of alarms 2-recovered alarm 3-processed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"times"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int32) title: Alarm threshold trigger times")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"firstTriggerTime"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lastTriggerTime"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nextEvalInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm evaluation interval (milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tags"),(0,a.kt)("td",{parentName:"tr",align:null},"example: {key1:value1}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gmtCreate"),(0,a.kt)("td",{parentName:"tr",align:null},"string($date-time) title: Record the latest creation time (timestamp in milliseconds)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gmtUpdate"),(0,a.kt)("td",{parentName:"tr",align:null},"string($date-time)")))),(0,a.kt)("h3",{id:"webhook-notification-common-issues"},"Webhook notification common issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"WebHook callback did not take effect  ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,a.kt)("br",{parentName:"p"}),"\n","Please check whether the configured webhook callback address is correct.")))),(0,a.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}p.isMDXComponent=!0},96862:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},23565:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/alert-notice-5-2a87516f9ad552183d6f7d715e55f4af.png"}}]);