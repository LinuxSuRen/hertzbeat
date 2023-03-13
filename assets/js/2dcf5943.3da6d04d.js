"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9988],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=i.createContext({}),p=function(t){var e=i.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return i.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(a),f=n,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||r;return a?i.createElement(h,o(o({ref:e},s),{},{components:a})):i.createElement(h,o({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18435:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},o=void 0,l={unversionedId:"start/ssl-cert-practice",id:"start/ssl-cert-practice",title:"SSL Certificate Monitor Practice",description:"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired.",source:"@site/docs/start/sslcert-practice.md",sourceDirName:"start",slug:"/start/ssl-cert-practice",permalink:"/docs/start/ssl-cert-practice",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/sslcert-practice.md",tags:[],version:"current",frontMatter:{id:"ssl-cert-practice",title:"SSL Certificate Monitor Practice",sidebar_label:"Practice Example"},sidebar:"docs",previous:{title:"Advanced Params Config",permalink:"/docs/start/custom-config"},next:{title:"Custom Monitoring",permalink:"/docs/advanced/extend-point"}},c={},p=[{value:"What is HertzBeat",id:"what-is-hertzbeat",level:4},{value:"Install HertzBeat",id:"install-hertzbeat",level:4},{value:"Monitoring SSL certificates",id:"monitoring-ssl-certificates",level:4},{value:"Finish!",id:"finish",level:4}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Most websites now support HTTPS by default. The certificate we apply for is usually 3 months or 1 year. It is easy to expire the SSL certificate over time, but we did not find it the first time, or did not update the certificate in time before it expired."),(0,n.kt)("p",null,"This article introduces how to use the hertzbeat monitoring tool to detect the validity period of our website's SSL certificate, and send us a warning message when the certificate expires or a few days before the certificate expires."),(0,n.kt)("h4",{id:"what-is-hertzbeat"},"What is HertzBeat"),(0,n.kt)("p",null,"HertzBeat is a real-time monitoring tool with powerful custom monitoring capabilities without Agent. Website monitoring, PING connectivity, port availability, database, operating system, middleware, API monitoring, threshold alarms, alarm notification (email, WeChat, Ding Ding Feishu)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Official website: ",(0,n.kt)("a",{parentName:"strong",href:"https://hertzbeat.com"},"https://hertzbeat.com")," | ",(0,n.kt)("a",{parentName:"strong",href:"https://tancloud.cn"},"https://tancloud.cn"))),(0,n.kt)("p",null,"github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"),"\ngitee: ",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat")),(0,n.kt)("h4",{id:"install-hertzbeat"},"Install HertzBeat"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you don't want to install, you can use the cloud service directly ",(0,n.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"TanCloud exploration cloud console.tancloud.cn"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docker")," environment can be installed with just one command"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"After the installation is successful, the browser can access ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:1157")," to start, the default account password is ",(0,n.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,n.kt)("h4",{id:"monitoring-ssl-certificates"},"Monitoring SSL certificates"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click Add SSL Certificate Monitor")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"System Page -> Monitor Menu -> SSL Certificate -> Add SSL Certificate")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd53f343a5b54feab62e71458d076441~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Configure the monitoring website")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Here we take the example of monitoring Baidu website, configure monitoring host domain name, name, collection interval, etc.\nClick OK Note \u26a0\ufe0fBefore adding, it will test the connectivity of the website by default, and the connection will be successful before adding. Of course, you can also gray out the ",(0,n.kt)("strong",{parentName:"p"},"Test or not")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad1154670648413bb82c8bdeb5b13609~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"View the detection index data")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the monitoring list, you can view the monitoring status, and in the monitoring details, you can view the indicator data chart, etc.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f874b45e909c4bb0acdd28b3fb034a61~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef5d7443f8c04818ae5aa28d421203be~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Set the threshold (triggered when the certificate expires)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"System Page -> Alarms -> Alarm Thresholds -> New Thresholds")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d6205172d43463aa34e534477f132f1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Configure the threshold, select the SSL certificate indicator object, configure the alarm expression-triggered when the indicator ",(0,n.kt)("inlineCode",{parentName:"p"},"expired")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", that is, ",(0,n.kt)("inlineCode",{parentName:"p"},'equals(expired,"true")'),", set the alarm level notification template information, etc.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83d17b381d994f26a6240e01915b2001~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Associating thresholds with monitoring, in the threshold list, set which monitoring this threshold applies to.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b9063d7bcf9454387be0491fc382bd1~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Set the threshold (triggered one week before the certificate expires)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the same way, add a new configuration threshold and configure an alarm expression - when the indicator expires timestamp ",(0,n.kt)("inlineCode",{parentName:"p"},"end_timestamp"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"now()")," function is the current timestamp, if the configuration triggers an alarm one week in advance: ",(0,n.kt)("inlineCode",{parentName:"p"},"end_timestamp <= (now( ) + 604800000)")," , where ",(0,n.kt)("inlineCode",{parentName:"p"},"604800000")," is the 7-day total time difference in milliseconds.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d6f837f57c247e09f668f60eff4a0ff~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Finally, you can see the triggered alarm in the alarm center.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a61b23127524976b2c209ce0ca6a339~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Alarm notification (in time notification via Dingding WeChat Feishu, etc.)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Monitoring Tool -> Alarm Notification -> New Receiver")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f36956060ef410a82bbecafcbb2957f~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("p",null,"For token configuration such as Dingding WeChat Feishu, please refer to the help document"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://tancloud.cn/docs/help/alert_dingtalk"},"https://tancloud.cn/docs/help/alert_dingtalk")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Alarm Notification -> New Alarm Notification Policy -> Enable Notification for the Recipient Just Configured")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d976343e81f843138344a039f3aff8a3~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"OK When the threshold is triggered, we can receive the corresponding alarm message. If there is no notification, you can also view the alarm information in the alarm center.")),(0,n.kt)("hr",null),(0,n.kt)("h4",{id:"finish"},"Finish!"),(0,n.kt)("p",null,"The practice of monitoring SSL certificates is here. Of course, for hertzbeat, this function is just the tip of the iceberg. If you think hertzbeat is a good open source project, please give us a Gitee star on GitHub, thank you very much. Thank you for your support. Refill!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"github: ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"gitee: ",(0,n.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}m.isMDXComponent=!0}}]);