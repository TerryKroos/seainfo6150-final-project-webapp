(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={flexcontainer:"Subscribe_flexcontainer__1aN2n",container:"Subscribe_container__6edVR",buttondiv:"Subscribe_buttondiv__2ALdB",numberandemail:"Subscribe_numberandemail__1vfCw",radio:"Subscribe_radio__T6mD3",radiocontainer:"Subscribe_radiocontainer__H9hta",select:"Subscribe_select__3IkeW",textInput:"Subscribe_textInput__34YRp",error:"Subscribe_error__SCosO"}},,,,,,,,,function(e,t,a){e.exports={link:"NavBar_link__2HxCv"}},function(e,t,a){e.exports={container:"Article_container__30XWU",articlecontainer:"Article_articlecontainer__3VRrA",header:"Article_header__2N3gg",sidediv:"Article_sidediv__i-OvN",image:"Article_image__1-8Mg"}},function(e,t,a){e.exports={container:"ArticleItemOther_container__3jKgi",imagediv:"ArticleItemOther_imagediv__22BJ_",image:"ArticleItemOther_image__2nUA4",articletext:"ArticleItemOther_articletext__hSjkk",link:"ArticleItemOther_link__10_yz"}},,,function(e,t,a){e.exports={container:"SideArticleItem_container__qWRWv",img:"SideArticleItem_img___Av7j",articletext:"SideArticleItem_articletext__26FV6",link:"SideArticleItem_link__17XBD"}},,function(e,t,a){e.exports={link:"footer_link__1Mn44"}},function(e,t,a){e.exports={container:"ArticleItem_container__3wqKN",articletext:"ArticleItem_articletext__1DoTh",link:"ArticleItem_link__1V5cg"}},function(e,t,a){e.exports={container:"AboutItem_container__1EAZV",abouttext:"AboutItem_abouttext__2pdNQ",paragraph:"AboutItem_paragraph__LhXia"}},,,,,function(e,t,a){e.exports={container:"About_container__XcZ0V",paragraph:"About_paragraph__1X5xh"}},function(e,t,a){e.exports={container:"ArticleListOther_container__2NKT9",articles:"ArticleListOther_articles__2bmIJ"}},function(e,t,a){e.exports={container:"PrivacyPage_container__NXbed",flexcontainer:"PrivacyPage_flexcontainer__39fcD"}},function(e,t,a){e.exports={container:"Error_container__2RlQq",link:"Error_link__2-0kI"}},,,,,,function(e,t,a){e.exports={container:"ArticleList_container__3WfvS"}},function(e,t,a){e.exports={container:"Home_container__26Iuu"}},function(e,t,a){e.exports=a.p+"static/media/ronaldo.f09668f0.jpg"},function(e,t,a){e.exports={container:"AboutImage_container__16FKp"}},function(e,t,a){e.exports={container:"SideArticleList_container__35Akz",header:"SideArticleList_header__2IajK"}},function(e,t,a){e.exports=a(51)},,,,,,,function(e,t,a){e.exports=a.p+"static/media/treefrog.52b16bf8.jpg"},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),o=a.n(l),i=a(1),c=a(15),s=a.n(c),m=a(22),u=a(8),d=a(17),h=a(3),p=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,a?r.a.createElement("div",null,"Your form entry was ",a.get("myText")," and ",a.get("myDropdown")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);l(t)}},r.a.createElement("label",{htmlFor:"myTextId"},"Input"),r.a.createElement("input",{type:"text",name:"myText",id:"myTextId"}),r.a.createElement("label",{htmlFor:"myDropdownId"},"Input"),r.a.createElement("select",{name:"myDropdown",id:"myDropdownId"},r.a.createElement("option",{value:"foo"},"Foo"),r.a.createElement("option",{value:"bar"},"Bar"),r.a.createElement("option",{value:"baz"},"Baz")),r.a.createElement("input",{type:"submit",value:"Send it"})))},f=(a(46),a(11)),b=a.n(f),g=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,"The Sports Blog"),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/nba"},"NBA")),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/nfl"},"NFL")),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/nhl"},"NHL")),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/mbl"},"MBL")),r.a.createElement("li",null,r.a.createElement(i.b,{className:b.a.link,to:"/soccer"},"SOCCER"))))},E=a(18),y=a.n(E),v=function(){return r.a.createElement("footer",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about",className:y.a.link},"About")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/subscribe",className:y.a.link},"Subscribe")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/privacy",className:y.a.link},"Privacy"))))},_=a(19),w=a.n(_),N=function(e){var t=Object(h.f)();return r.a.createElement("div",{className:w.a.container,onClick:function(){t.push("/article",{params:e.article})}},r.a.createElement("img",{src:e.article.image,alt:"article img"}),r.a.createElement("div",{className:w.a.articletext},r.a.createElement("time",{datetime:"2018-11-22"},e.article.date),r.a.createElement(i.b,{className:w.a.link},e.article.heading)))},x=a(34),k=a.n(x),I=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:k.a.container},e.articles.map(function(e){return r.a.createElement(N,{article:e,key:e.slug})})))},A=a(35),O=a.n(A),S=function(e){return r.a.createElement("div",{className:O.a.container},r.a.createElement(g,null),r.a.createElement(I,{articles:e.articles}),r.a.createElement(v,null))},j=function(){return r.a.createElement("div",null,"The foo page")},W=a(20),C=a.n(W),P=a(36),T=a.n(P),B=function(e){return r.a.createElement("div",{className:C.a.container},r.a.createElement("img",{src:T.a,alt:"ronaldopic"}),r.a.createElement("div",{className:C.a.abouttext},r.a.createElement("h4",null,e.name),r.a.createElement("p",{className:C.a.paragraph},e.role)))},F=a(37),M=a.n(F),z=function(){return r.a.createElement("div",{className:M.a.container},r.a.createElement("h1",null,"About Us"))},D=a(25),q=a.n(D),L=[{name:"Terence Nwachi",role:"Software Engineer",slug:1},{name:"Tony Stark",role:"Iron Man",slug:2},{name:"Steve Rodgers",role:"Captain America",slug:3},{name:"Bruce Banner",role:"The Hulk",slug:4},{name:"Peter Parker",role:"Spiderman",slug:5},{name:"Danny Rand",role:"Iron Fist",slug:6}],R=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(z,null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:q.a.paragraph},'Chattanooga has been called the "Dynamo of Dixie" and has a rich history of entrepreneurship and philanthropy. Chattanooga is on a roll with the recent string of billion dollar investments in the area by multi-national companies such as Alstom, Volkswagen, Wacker and Amazon. Coupled with the rich technological environment including the computational Simulation Center at UTC and the EPB powered citywide gigabit fiber network, Chattanooga is poised for growth. The only missing piece was a formalized network of capital and mentors to encourage, support and sustain the next wave of entrepreneurs. The Chattanooga Renaissance Fund seeks to fill that need. Each member of CRF brings a level of expertise and experience invaluable to the longevity and growth of the fund.'),r.a.createElement("ul",{className:q.a.container},L.map(function(e){return r.a.createElement(B,{name:e.name,role:e.role,key:e.slug})})))),r.a.createElement(v,null))},X=a(9),H=a(2),J=a.n(H),U=function(){var e,t,a=Object(n.useState)({firstName:"",middleName:"",lastName:"",email:"",telephone:"",gender:"",favSport:"",country:""}),l=Object(u.a)(a,2),o=l[0],i=l[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),m=s[0],d=s[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),f=p[0],b=p[1],E=function(e){e.persist(),i(function(t){return Object(X.a)({},t,{gender:e.target.value})})},y=function(e){e.preventDefault(),o.firstName&&o.lastName&&o.email&&d(!0),b(!0)},_=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},w=function(e){return/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)};return m?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:J.a.container},r.a.createElement("p",null,"Thank you ",o.firstName," ",o.lastName," for your subscription. Please check your email ",o.email," for next steps.")),r.a.createElement(v,null)):r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:J.a.flexcontainer},r.a.createElement("div",{className:J.a.numberandemail},r.a.createElement("h1",null,"Subscribe To Our NewsLetter"),r.a.createElement("p",null,r.a.createElement("strong",null,"Call: "),"+1 333 333 333"),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: "),"sportsblog@something.com")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:y},r.a.createElement("input",{className:J.a.textInput,type:"text",name:"firstName",placeholder:"First Name",value:o.firstName,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{firstName:e.target.value})})},required:!0}),f&&!o.firstName&&r.a.createElement("span",{className:J.a.error},"Please enter a first name"),r.a.createElement("input",{className:J.a.textInput,type:"text",name:"middleName",placeholder:"Middle Name",value:o.middleName,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{middleName:e.target.value})})}}),r.a.createElement("input",{className:J.a.textInput,type:"text",name:"lastName",placeholder:"Last Name",value:o.lastName,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{lastName:e.target.value})})},required:!0}),f&&!o.lastName&&r.a.createElement("span",{className:J.a.error},"Please enter a last name"),r.a.createElement("input",{className:J.a.textInput,type:"email",name:"email",placeholder:"E-mail",value:o.email,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{email:e.target.value})})},pattern:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/",required:!0}),f&&!_(o.email)&&r.a.createElement("span",{className:J.a.error},(t=o.email)?_(t)?void 0:"Please enter a valid email address":"Please enter an email address"),r.a.createElement("input",{className:J.a.textInput,type:"tel",id:"phone",name:"phone",placeholder:"Telephone Number",value:o.telephone,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{telephone:e.target.value})})}}),f&&!w(o.phone)&&r.a.createElement("span",{className:J.a.error},(e=o.phone)?w(e)?void 0:"Please enter a valid phone number":"Please enter a phone number"),r.a.createElement("div",null,r.a.createElement("label",{className:J.a.genderlabel},"Gender"),r.a.createElement("div",{className:J.a.radiocontainer},r.a.createElement("label",{for:"Male"},r.a.createElement("input",{className:J.a.radio,type:"radio",name:"gender",value:"Male",checked:"Male"===o.gender,onChange:E}),"Male"),r.a.createElement("label",{for:"Female"},r.a.createElement("input",{className:J.a.radio,type:"radio",name:"gender",value:"Female",checked:"Female"===o.gender,onChange:E}),"Female"),r.a.createElement("label",{for:"Other"},r.a.createElement("input",{className:J.a.radio,type:"radio",name:"gender",value:"Other",checked:"Other"===o.gender,onChange:E}),"Other")),f&&!o.gender&&r.a.createElement("p",{className:J.a.error},"Please choose a gender")),r.a.createElement("select",{name:"country",className:J.a.select,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{country:e.target.value})})},value:o.Country},r.a.createElement("option",null,"Country:"),r.a.createElement("option",{name:"country",value:"Australia"},"Australia"),r.a.createElement("option",{name:"country",value:"Canada"},"Canada"),r.a.createElement("option",{name:"country",value:"USA"},"USA")),f&&!o.country&&r.a.createElement("p",{className:J.a.error},"Please choose a country"),r.a.createElement("select",{name:"favSport",className:J.a.select,onChange:function(e){e.persist(),i(function(t){return Object(X.a)({},t,{favSport:e.target.value})})},value:o.favSport},r.a.createElement("option",{name:"favSport",value:"0"},"Favorite Sport:"),r.a.createElement("option",{name:"favSport",value:"BasketBall"},"BasketBall"),r.a.createElement("option",{name:"favSport",value:"Football"},"Football"),r.a.createElement("option",{name:"favSport",value:"Hockey"},"Hockey"),r.a.createElement("option",{name:"favSport",value:"Baseball"},"Baseball"),r.a.createElement("option",{name:"favSport",value:"Soccer"},"Soccer")),f&&!o.favSport&&r.a.createElement("p",{className:J.a.error},"Please choose a sport"),r.a.createElement("div",{className:J.a.buttondiv},r.a.createElement("button",{onClick:y},"SUBMIT"))))),r.a.createElement(v,null))},V=a(13),Z=a.n(V),K=function(e){var t=Object(h.f)();return r.a.createElement("div",{className:Z.a.container,onClick:function(){t.push("/article",{params:e.article})}},r.a.createElement("div",{className:Z.a.imagediv},r.a.createElement("img",{className:Z.a.image,src:e.article.image,alt:"article img"})),r.a.createElement("div",{className:Z.a.articletext},r.a.createElement(i.b,{className:Z.a.link},e.article.heading),r.a.createElement("time",{datetime:"2018-11-22"},e.article.date)))},$=a(26),Q=a.n($),Y=function(e){return r.a.createElement("div",{className:Q.a.container},r.a.createElement("ul",{className:Q.a.articles},e.articles.map(function(e){return r.a.createElement(K,{article:e,key:e.slug})})))},G=function(e){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(Y,{articles:e.articles}),r.a.createElement(v,null))},ee=a(12),te=a.n(ee),ae=a(16),ne=a.n(ae),re=function(e){var t=Object(h.f)();return r.a.createElement("div",{className:ne.a.container,onClick:function(){t.push("/article",{params:e.article})}},r.a.createElement("img",{className:ne.a.img,src:e.article.image,alt:"article img"}),r.a.createElement("div",{className:ne.a.articletext},r.a.createElement(i.b,{className:ne.a.link},e.article.heading)))},le=a(38),oe=a.n(le),ie=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:oe.a.container},e.articles.map(function(e){return r.a.createElement(re,{article:e,key:e.slug})})))},ce="Of the problems Juventus have had to work through in this early phase of the season, one of the more serious ones has been an inability to break down an opponent that has sat back to defend. Tuesday\u2019s game against Ferencvaros was a prime example of these struggles, and, in Juve\u2019s first league game since last weekend\u2019s commanding performance against Cagliari, Juve again struggled to break down a determined defense \u2014 this time newly-promoted Benevento \u2014 despite having the vast majority of the possession. After breaking ahead after 20 minutes on a brilliantly worked goal, Juve gave up an equalizing goal with the last kick of the first half, then completely lost the plot in the second, producing next to nothing despite largely hemming Benevento back. Unlike midweek, when Andrea Pirlo\u2019s changes made enough of a difference to eventually provide a last-second winner, this time the players who came off the bench couldn\u2019t make much of an impact. That was exacerbated by the decision \u2014 which, to be fair, was a valid one at the time it was made \u2014 to leave Cristiano Ronaldo at home for rest. The result was a maddening progression of unthreatening passes made over and over as the clock ticked down, and this time there wasn\u2019t a stoppage time hero to salvage the points. The 1-1 draw was a microcosm of all of Juve\u2019s troubles: the inability to break down opponents, the inability to get results away from home, and the inability to take advantage of an opportunity to draw closer to the teams ahead of them in the standings.",se=function(e){var t=Object(h.g)().state.params;return r.a.createElement("div",{className:te.a.container},r.a.createElement(g,null),r.a.createElement("div",{className:te.a.articlecontainer},r.a.createElement("div",{className:te.a.article},r.a.createElement("h1",{className:te.a.header},t.heading),r.a.createElement("img",{className:te.a.image,alt:"article img",src:t.image,text:t.heading}),r.a.createElement("p",null,"By ",r.a.createElement("strong",null,t.author)," |",r.a.createElement("date",null,t.date)),r.a.createElement("p",null,ce),r.a.createElement("p",null,ce),r.a.createElement("p",null,ce)),r.a.createElement("div",{className:te.a.sidediv},r.a.createElement(ie,{articles:e.articles.slice(0,3)}))),r.a.createElement(v,null))},me=a(27),ue=a.n(me),de=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:ue.a.container},r.a.createElement("div",{className:ue.a.flexcontainer},r.a.createElement("h1",null,"Privacy Policy"),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."),r.a.createElement("h3",null,"What information do we collect?"),r.a.createElement("p",null,"When you register as a user of this site, we may collect your email address, name and address, telephone number, and payment information (e.g., credit card number and billing address). Additionally, when you visit this site, we automatically collect some non-personally identifiable computer information, such as the type of computer operating system (such as Windows XP or Mac OS) and web browser (such as Chrome or Internet Explorer) you are using, information regarding your Internet service provider, and the frequency with which you visit various parts of this site. We use this information to manage the Website and make it more interesting and useful to you. We may offer public commenting through this site. If you use our commenting system and disclose personally identifiable information, you should be aware that such information could be read, collected or used by other users. We are not responsible for the personally identifiable information you choose to submit through public forums."))),r.a.createElement(v,null))},he=function(e){return r.a.createElement("div",null,"The bar page with categoryId of ",e.categoryId," and productId of ",e.productId)},pe=function(e){return r.a.createElement("div",null,"The baz page",r.a.createElement("article",null,r.a.createElement("h1",null,e.content.title),r.a.createElement("address",null,"Author: ",e.content.author),r.a.createElement("p",null,e.content.text)))},fe=a(28),be=a.n(fe),ge=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:be.a.container},r.a.createElement("h1",null,"That page doesn't exist!"),r.a.createElement("p",null,"Sorry, the page you were looking for could not be found. Return to Home Page",r.a.createElement(i.b,{className:be.a.link,to:"/"},"here"))),r.a.createElement(v,null))},Ee={id:"article-1",title:"An Article",author:"April Bingham",text:"Some text in the article"};var ye=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({}),i=Object(u.a)(o,2),c=i[0],f=i[1];return Object(n.useEffect)(function(){var e=function(){var e=Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://terrykroos.mockable.io/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(d.isEmpty)(a)&&e()},[a]),Object(n.useEffect)(function(){var e=function(){var e=Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo2455048.mockable.io/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,f(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(d.isEmpty)(c)&&e()},[c]),Object(d.isEmpty)(a||c)?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,render:function(){return r.a.createElement(S,{articles:Object.values(a)})}})," />",r.a.createElement(h.a,{path:"/article",exact:!0,render:function(){return r.a.createElement(se,{articles:Object.values(a)})}})," />",r.a.createElement(h.a,{path:"/nba",exact:!0,render:function(){return r.a.createElement(G,{articles:Object.values(c).splice(9,18)})}})," />",r.a.createElement(h.a,{path:"/soccer",exact:!0,render:function(){return r.a.createElement(G,{articles:Object.values(c).splice(0,9)})}})," />",r.a.createElement(h.a,{path:"/nhl",exact:!0,render:function(){return r.a.createElement(G,{articles:Object.values(a)})}})," />",r.a.createElement(h.a,{path:"/nfl",exact:!0,render:function(){return r.a.createElement(G,{articles:Object.values(c).splice(9,18)})}})," />",r.a.createElement(h.a,{path:"/mbl",exact:!0,render:function(){return r.a.createElement(G,{articles:Object.values(c).splice(9,18)})}})," />",r.a.createElement(h.a,{path:"/foo",exact:!0,component:j}),r.a.createElement(h.a,{path:"/about",exact:!0,component:R}),r.a.createElement(h.a,{path:"/subscribe",exact:!0,component:U}),r.a.createElement(h.a,{path:"/form",exact:!0,component:p}),r.a.createElement(h.a,{path:"/privacy",exact:!0,component:de}),r.a.createElement(h.a,{path:"/bar/:categoryId/:productId",exact:!0,render:function(e){var t=e.match;return r.a.createElement(he,{categoryId:t.params.categoryId,productId:t.params.productId})}}),r.a.createElement(h.a,{path:"/baz",exact:!0,render:function(){return r.a.createElement(pe,{content:Ee})}}),r.a.createElement(h.a,{component:ge})))};o.a.render(r.a.createElement(i.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},r.a.createElement(ye,null)),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.dae88d6a.chunk.js.map