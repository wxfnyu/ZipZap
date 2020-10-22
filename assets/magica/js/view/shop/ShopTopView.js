define("underscore backbone backboneCommon ajaxControl command text!template/shop/ShopTop.html js/view/shop/ShopTopPartsView js/view/shop/ShopPopupView cardUtil memoriaUtil".split(" "),function(f,r,b,t,l,u,n,p,v,w){var h,g,m=0,x=function(){l.endL2d();var a={id:"101799",x:150};a.y=Math.floor(b.doc.getElementsByTagName("body")[0].offsetHeight/2);a.type=0;var e=["01","02","03","04"],c=Number(h.currentTime.split(" ")[1].split(":")[0]),d=Number(h.currentTime.split(" ")[1].split(":")[1]);6<=c&&9>=c&&!(9==
c&&0<d)?e.push("08"):11<=c&&13>=c&&!(13==c&&0<d)?e.push("09"):17<=c&&19>=c&&!(19==c&&0<d)?e.push("10"):22<=c||0===c&&!(0===c&&0<d)?e.push("11"):e.push("12");c=m;m++;m>=e.length&&(m=0);a.key="vo_game_0002_"+e[c];a.textFieldSizeX=500;a.textFieldSizeY=200;a.txtAdjustY=100;a.fontSize=18;l.startL2d(a)};return r.View.extend({events:function(){var a={};a[b.cgti]=this.touch;a[b.cgti+" .shopBtn"]=this.toggleDisp;return a},initialize:function(a){this.listenTo(this,"remove",this.removeView);this.listenTo(b.storage.gameUser,
"change",this.amountCheck);this.listenTo(b.storage.userItemList,"change",this.amountCheck);this.firstView=a.firstView;h=t.getPageJson();this.template=f.template(u);this.popupView=p;this.cardUtil=v;this.memoriaUtil=w;this.conditionCheckItemIds=[];this.scrollObj=[];this.createDom()},render:function(){this.$el.html(this.template(h));return this},createDom:function(){b.content.append(this.render().el);n.prototype.rootView=this;n.prototype.template=f.template($("#shopParts").text());p.prototype.rootView=
this;this.popupTemplate=f.template($("#shopPopupTempCard").text());var a=h.shopList,a=f.sortBy(a,"sortkey"),e=this,c=b.doc.createDocumentFragment();f.each(a,function(a,d){var k=e.makeTabBtnAndBaseDom(a,d),g=b.doc.createDocumentFragment();if(0<a.shopItemList.length){var q=0;d=f.sortBy(a.shopItemList,"sortkey");f.each(d,function(a){if("GEM"===a.shopItemType){if(!b.storage.userCharaList.findWhere({charaId:Number(a.genericId)}))return}else"LIVE2D"===a.shopItemType&&b.storage.userLive2dList?b.storage.userLive2dList.findWhere({charaId:a.live2d.charaId,
live2dId:a.live2d.live2dId})&&(a.alreadyGet=!0):"ITEM"===a.shopItemType&&"BACKGROUND"===a.item.itemType&&b.storage.userItemList.findWhere({itemId:a.item.itemCode})&&(a.alreadyGet=!0);if(h.currentTime>=a.startAt&&h.currentTime<a.endAt||!a.endAt&&h.currentTime>=a.startAt||!a.startAt&&!a.endAt){var c=new n;c.model=a;f.findWhere(h.userShopItemList,{shopItemId:a.id})&&(c.userShopModel=f.findWhere(h.userShopItemList,{shopItemId:a.id}));g.appendChild(c.render().el);a.recommend&&b.addClass(k,"recommend");
if(a.openConditionIdList)for(c=0;c<a.openConditionIdList.length;c++)e.conditionCheckItemIds.push(a.openConditionIdList[c]);q++}});1>q&&(d=b.doc.createElement("p"),d.innerText="No Items available for purchase.",d.className="noItem",g.appendChild(d))}else d=b.doc.createElement("p"),d.innerText="There are no Items that can be purchased..",d.className="noItem",g.appendChild(d);c.appendChild(k);b.doc.getElementById(a.shopId).appendChild(g);e.scrollObj.push("type"+a.shopId)});b.doc.getElementById("btnWrap").getElementsByClassName("btnScrollInner")[0].appendChild(c);
b.scrollSetX("btnWrap","btnScrollInner");for(var d in this.scrollObj)b.scrollSet("lists",this.scrollObj[d]);c=null;b.setGlobalView();x();l.getBaseData(b.getNativeObj());f.findWhere(h.shopList,{shopId:Number(g)});b.storage.userItemList.toJSON();this.amountCheck();this.shopLimitCounter=Date.parse(new Date)/1E3|0;null!==this.firstView&&(f.findWhere(h.shopList,{shopId:Number(this.firstView)})?(this.toggleDisp(null,this.firstView),b.forceScrollXPreset("btnWrap","btnScrollInner","#/btn"+this.firstView,
!0)):new b.PopupClass({title:"Not in Session",content:"This Shop is unavailable at this time.",closeBtnText:"OK",popupType:"typeC"}));for(var k in this.scrollObj)b.scrollRefresh("lists",this.scrollObj[k],!0);0<document.getElementsByClassName("shopItemWrap commonFrame4 off off9991").length&&$(".tabs9991").remove();b.ready.hide()},makeTabBtnAndBaseDom:function(a,e){var c=b.doc.createElement("li");0<e?c.className="shopBtn TE se_tabs tabs"+a.shopId:(g=Number(a.shopId),c.className="shopBtn TE se_tabs tabs"+
a.shopId+" current",b.doc.getElementById("listTitle").innerHTML=a.name.replace(/＠/g,""));if("SPECIAL"===a.shopType||"CAMPAIGN"===a.shopType||"MONEY"===a.shopType)c.className+=" specialBtn";c.innerHTML="\x3cspan\x3e"+a.name.replace(/＠/g,"\x3cbr\x3e")+"\x3cdiv class\x3d'recommendMark'\x3e\x3c/div\x3e\x3c/span\x3e";c.dataset.shoptype=a.shopId;c.dataset.scrollHash="#/btn"+a.shopId;var d;switch(a.itemId){case "MONEY":d="icon_money_f.png";break;case "RICHE":d="icon_cursechip_f.png";break;default:d=(-1<
a.itemId.indexOf("EVENT_")?"event/":-1<a.itemId.indexOf("CAMPAIGN_")?"campaign/":"")+"icon_"+a.itemId.toLowerCase()+"_f.png"}var k=b.doc.createElement("img");k.src="/magica/resource/image_web/common/icon/"+d;k.className="tabItemIcon";c.appendChild(k);"MONEY"===a.shopType&&(k=b.doc.createElement("img"),k.src="/magica/resource/image_web/common/icon/icon_purchased.png",k.className="tabPurchasedIcon",c.appendChild(k));d=b.doc.createDocumentFragment();k=b.doc.createElement("div");k.id=a.shopId;k.className=
0<e?"listWrap noDisp type"+a.shopId:"listWrap type"+a.shopId;d.appendChild(k);b.doc.getElementById("lists").appendChild(d);return c},touch:function(a){a.preventDefault();a.target.dataset.touchwrap&&!b.isScrolled()&&(a=a.originalEvent.changedTouches[0],l.motionL2d({x:a.pageX,y:a.pageY}))},toggleDisp:function(a,e){if(a&&(a.preventDefault(),b.isScrolled()||g===a.target.dataset.shoptype))return;a=e?Number(e):Number(a.target.dataset.shoptype);b.addClass(b.doc.getElementById(g),"noDisp");b.removeClass(b.doc.getElementById(a),
"noDisp");b.removeClass(b.doc.getElementById("btnWrap").getElementsByClassName("current")[0],"current");b.addClass(b.doc.getElementById("btnWrap").getElementsByClassName("tabs"+a)[0],"current");for(var c in this.scrollObj)b.scrollRefresh("lists",this.scrollObj[c],!0);g=a;c=f.findWhere(h.shopList,{shopId:Number(g)});var d=b.storage.userItemList.toJSON();a=0;switch(c.itemId){case "MONEY":a="MONEY"!==c.shopType?b.getTotalStone().totalMoney:b.getTotalStone().userMoney;d="icon_money_f.png";break;case "RICHE":a=
b.sotrage.gameUser.get("riche");d="icon_cursechip_f.png";break;default:if(d=f.findWhere(d,{itemId:c.itemId}))a=d.quantity;d=(-1<c.itemId.indexOf("EVENT_")?"event/":-1<c.itemId.indexOf("CAMPAIGN_")?"campaign/":"")+"icon_"+c.itemId.toLowerCase()+"_f.png"}"MONEY"!==c.shopType?b.removeClass(b.doc.getElementById("hasItems").getElementsByClassName("purchasedIcon")[0],"on"):b.addClass(b.doc.getElementById("hasItems").getElementsByClassName("purchasedIcon")[0],"on");b.doc.getElementById("hasItems").getElementsByClassName("costIcon")[0].src=
"/magica/resource/image_web/common/icon/"+d;b.doc.getElementById("hasItems").getElementsByClassName("pointFrame")[0].innerText=a;b.doc.getElementById("listTitle").innerText=c.name.replace(/＠/g,"");e||this.trigger("haveNumberAllCheck")},amountCheck:function(){var a=f.findWhere(h.shopList,{shopId:Number(g)}),e=b.storage.userItemList.toJSON(),c=0;switch(a.itemId){case "MONEY":c="MONEY"!==a.shopType?b.getTotalStone().totalMoney:b.getTotalStone().userMoney;e="icon_money_f.png";break;case "RICHE":c=b.sotrage.gameUser.get("riche");
e="icon_cursechip_f.png";break;default:if(e=f.findWhere(e,{itemId:a.itemId}))c=e.quantity;e=(-1<a.itemId.indexOf("EVENT_")?"event/":-1<a.itemId.indexOf("CAMPAIGN_")?"campaign/":"")+"icon_"+a.itemId.toLowerCase()+"_f.png"}"MONEY"!==a.shopType?b.removeClass(b.doc.getElementById("hasItems").getElementsByClassName("purchasedIcon")[0],"on"):b.addClass(b.doc.getElementById("hasItems").getElementsByClassName("purchasedIcon")[0],"on");b.doc.getElementById("hasItems").getElementsByClassName("costIcon")[0].src=
"/magica/resource/image_web/common/icon/"+e;b.doc.getElementById("hasItems").getElementsByClassName("pointFrame")[0].innerText=c},conditionCheck:function(a){if(-1!==this.conditionCheckItemIds.indexOf(a|0)){this.trigger("conditionChecks",a|0);for(var e in this.scrollObj)b.scrollRefresh("lists",this.scrollObj[e])}},conditionFlag:function(a,b){var c=!0;a=f.findWhere(h.shopList,{shopId:a});for(var d=b.length,e=0;e<d;e++){var g=b[e]|0,l=f.findWhere(a.shopItemList,{id:g}),g=f.findWhere(h.userShopItemList,
{shopItemId:g});l&&g&&l.limitedNumber?0<l.limitedNumber-g.num&&(c=!1):c=!1;c||(e=d)}return c},removeView:function(){this.trigger("removeView");this.off();this.remove()}})});