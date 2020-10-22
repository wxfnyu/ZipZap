define("underscore backbone backboneCommon ajaxControl command text!template/gacha/GachaProbabilityPop.html".split(" "),function(b,A,a,B,C,D,F){var k,f,v=["LIMITED"],m={LIMITED:"limited"},y=function(){f=new (A.View.extend({events:function(){var b={};b[a.cgti+" #menuPanel .btn"]=this.tabBtn;return b},initialize:function(){this.model=k;this.template=b.template(D);this.createDom()},render:function(){this.$el.html(this.template({model:this.model,nowList:a.gachaProbabilityList[this.model.gachaType],probText:this.probText}));
this.el.style.height="100%";this.el.style.width="100%";return this},createDom:function(){new a.PopupClass({title:"Details",content:"",exClass:"gachaProbabilityPop",popupType:"typeB"},null,null,this.removeHandler);var E=a.doc.getElementById("popupArea");this.probText="";switch(this.model.gachaType){case "RARE":case "PICKUP":case "ATTRIBUTE":case "SELECTABLE_PICKUP":this.probText="※In a 10x Fate Weave, 1 card will be a Magical Girl.\x3cbr\x3e※In a 10x Fate Weave, 1 card will be ★3 or up.\x3cbr\x3e※The remaining 8 cards from a 10x Fate Weave (excluding the Magical Girl and ★3 or higher card) are drawn at regular probability rates.\x3cbr\x3e※99 Fate Weave draws in a row without a ★4 Magical Girl guarantees a ★4 Magical Girl in the 100th draw.\x3cbr\x3e\x3cbr\x3e※Duplicates (Magical Girl/Memoria) may be drawn.\x3cbr\x3e※If a duplicate Magical Girl is drawn, 1 Destiny Gem for that Magical Girl will replace it.\x3cbr\x3e\x3cbr\x3e※Probabilities for specific Magical Girl or Memoria are rounded down to the 6th decimal place: the sum probability may not total 100%.";
break;case "SPECIAL":this.probText="※Obtaining a Magical Girl that you already have will yield 1 Destiny Gem of that same Magical Girl."}E.getElementsByClassName("popupTextArea")[0].appendChild(this.render().el);this.displayType="probability";1>b.size(a.gachaProbabilityList[this.model.gachaType].gachaDrawList.piece)?a.doc.querySelector("#menuPanel .memoria").style.display="none":a.doc.querySelector("#menuPanel .memoria").style.display="";C.getBaseData(a.getNativeObj());a.scrollSet("scrollInner","scrollInnerWrap")},
tabBtn:function(b){b.preventDefault();a.isScrolled()||b.currentTarget.dataset.gachaType===this.displayType||(a.removeClass(a.doc.getElementById("menuPanel").getElementsByClassName(this.displayType)[0],"current"),a.addClass(b.currentTarget,"current"),this.displayType=b.currentTarget.dataset.gachaType,a.doc.getElementById("GachaProbability").className=this.displayType,a.scrollRefresh(null,null,!0))},removeHandler:function(){f&&f.remove()}}))};return{init:function(f,l,c,q){k={};k.id=l;k.gachaType=c;
k.gachaSchedule=q;a.gachaProbabilityList||(a.gachaProbabilityList={});var h=b.findWhere(q,{id:l});f={gachaScheduleId:h.id};l=function(e){var f,k,l,r;f=[];k=[];l=[];r={};b.each(e.gachaProbabilityList,function(d,a){var t={};t.displayName=d.displayName;t.lotteryMap=d.lotteryMap;f.push(t);var t=b.reduce(d.lotteryMap,function(d,a){return d+a},0),n;for(n in d.lotteryMap)r[n]||(r[n]={}),0<d.lotteryMap[n]&&(r[n][a]=1E3*d.lotteryMap[n]/t*100/1E3+"%");var c=[];b.each(d.cardProbabilityList,function(d,a){a={};
a.cardId=d.gachaResult.cardId;a.probability=d.probability;c.push(a)});var e=[];b.each(d.pieceProbabilityList,function(d,a){a={};a.pieceId=d.gachaResult.pieceId;a.probability=d.probability;e.push(a)});k.push(c);l.push(e)});var q=[];b.each(e.gachaDrawList,function(d,a){d.probability={};"CARD"===d.type?b.each(k,function(a,c){a=b.findWhere(a,{cardId:d.cardId});d.probability[c]=0<Number(a.probability)?a.probability:null}):b.each(l,function(a,c){a=b.findWhere(a,{pieceId:d.pieceId});d.probability[c]=0<Number(a.probability)?
a.probability:null});q.push(d)});a.gachaProbabilityList[c]={};a.gachaProbabilityList[c].id=h.id;a.gachaProbabilityList[c].gachaType=c;a.gachaProbabilityList[c].probabilityBase=f;a.gachaProbabilityList[c].probMap=r;a.gachaProbabilityList[c].gachaProbability=e.gachaProbability;var u=b.sortBy(q,function(a){return-Number(a.rarity.substr(-1))}),g=b.groupBy(u,"type");e=b.groupBy(g.CARD,"rarity");g=b.groupBy(g.PIECE,"rarity");a.gachaProbabilityList[c].gachaDrawList={card:e,piece:g};console.log("nowGacha:",
h);g=null;if(-1<c.indexOf("SELECTABLE")&&a.selectableCharaData){console.log("common.selectableCharaData",a.selectableCharaData);var g=a.selectableCharaData,p=[];e={};var g=b.findWhere(u,{type:"CARD",charaId:g.charaNo}),z="";if(g.genericValue){var w=g.genericValue.split(","),w=w.concat();b.each(v,function(a,b){-1<w.indexOf(a)&&m[a]&&(z+=" "+m[a])})}e.card=g;e.addClass=z;p.push(e);a.gachaProbabilityList[c].pickUpCard=p}h.bonusCardList&&0<h.bonusCardList.length&&(p=[],e=b.sortBy(h.bonusCardList,function(a){return-1*
Number(a.rank.substr(-1))}),b.each(e,function(a,c){c={};a=b.findWhere(u,{type:"CARD",charaId:a.charaNo});a.rarity.substr(-1);var d="";if(a.genericValue){var e=a.genericValue.split(","),e=e.concat();b.each(v,function(a,b){-1<e.indexOf(a)&&m[a]&&(d+=" "+m[a])})}c.card=a;c.addClass=d;p.push(c)}),0<p.length&&(a.gachaProbabilityList[c].pickUpCard=p));if(h.bonusPieceList&&0<h.bonusPieceList.length){var x=[];e=b.sortBy(h.bonusPieceList,function(a){return-1*Number(a.rank.substr(-1))});b.each(e,function(a,
c){c={};a=b.findWhere(u,{type:"PIECE",pieceId:a.pieceId});a.rarity.substr(-1);var d="";if(a.genericValue){var e=a.genericValue.split(","),e=e.concat();b.each(v,function(a,b){-1<e.indexOf(a)&&m[a]&&(d+=" "+m[a])})}c.memoria=a;c.addClass=d;x.push(c)});0<x.length&&(a.gachaProbabilityList[c].pickUpMemoria=x)}y()};console.log(c);a.gachaProbabilityList[c]&&a.gachaProbabilityList[c].id===h.id&&"SELECTABLE_PICKUP"!==c?y():B.ajaxPost(a.linkList.gachaProbability,f,l)},removeHandler:function(){f&&f.removeHandler()}}});