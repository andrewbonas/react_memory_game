(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{12:function(e,a,r){},13:function(e,a,r){},15:function(e,a,r){"use strict";r.r(a);var t=r(1),o=r.n(t),i=r(7),c=r.n(i),l=(r(12),r(6)),n=r(4),s=(r(13),[{id:1,name:1,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=BeardMagestic&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light",clicked:!1},{id:2,name:2,image:"https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Round&hatColor=Gray01&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Cry&eyebrowType=DefaultNatural&mouthType=Tongue&skinColor=Yellow",clicked:!1},{id:3,name:3,image:"https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Wayfarers&hatColor=Red&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Hearts&eyebrowType=UpDown&mouthType=Tongue&skinColor=Yellow",clicked:!1},{id:4,name:4,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription01&hairColor=Brown&facialHairType=Blank&facialHairColor=Red&clotheType=Hoodie&clotheColor=Blue03&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Pale",clicked:!1},{id:5,name:5,image:"https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Prescription02&hatColor=Blue03&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Resist&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Yellow",clicked:!1},{id:6,name:6,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Round&hatColor=Red&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Heather&graphicType=SkullOutline&eyeType=Wink&eyebrowType=FlatNatural&mouthType=Grimace&skinColor=Pale",clicked:!1},{id:7,name:7,image:"https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=PastelOrange&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Pizza&eyeType=Happy&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Yellow",clicked:!1},{id:8,name:8,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Pale",clicked:!1},{id:9,name:9,image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Pale",clicked:!1},{id:10,name:10,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Black&graphicType=Skull&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Yellow",clicked:!1},{id:11,name:11,image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=Grimace&skinColor=Yellow",clicked:!1},{id:12,name:12,image:"https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=Red&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=White&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Pale",clicked:!1}]),p=r(0),y=function(){var e=Object(t.useState)(s),a=Object(n.a)(e,2),r=a[0],o=a[1],i=Object(t.useState)(0),c=Object(n.a)(i,2),y=c[0],d=c[1],h=Object(t.useState)(0),T=Object(n.a)(h,2),u=T[0],m=T[1],k=Object(t.useRef)(),C=Object(t.useRef)();C.current=u,k.current=y,Object(t.useEffect)((function(){var e=function(e){console.log(e.target.dataset);var a=parseInt(e.target.dataset.id);!0===r[a-1].clicked?S():f(a)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var f=function(e){var a=Object(l.a)(r);o(a.map((function(a){return a.name===e&&(a.clicked=!0),a}))),g(!0),v(a)},v=function(e){o(e.sort((function(){return.5-Math.random()})))},S=function(){g(!1);var e=Object(l.a)(r);o(e.map((function(e){return e.clicked=!1,e})))},g=function(e){!1===e?(C.current<k.current&&j(k.current),H()):!0===e&&b()},b=function(){d((function(e){return e+1}))},H=function(){d(0)},j=function(e){m(e)};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"React Memory Game "}),Object(p.jsxs)("div",{className:"score-board",children:[Object(p.jsxs)("div",{children:["Score: ",y]}),Object(p.jsxs)("div",{children:["Max Score: ",u]})]})]}),Object(p.jsx)("div",{className:"avatar-ctn",children:r.map((function(e){return Object(p.jsx)("div",{className:"avatars","data-id":e.name,"data-clicked":e.clicked,children:Object(p.jsx)("img",{"data-id":e.name,"data-clicked":e.clicked,src:e.image,alt:"Avatar"})},e.id)}))})]})},d=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(y,{})})};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.38302898.chunk.js.map