define(["underscore","backbone","backboneCommon","ajaxControl","command"],function(f,g,b,h,d,k,l){g.Model.extend({});return g.View.extend({className:function(){var a="gachaBtn TE se_decide";!1===this.model.toJSON().enable&&(a+=" off");return a},events:function(){var a={};a[b.cgti]=this.gachaPopup;return a},initialize:function(a){this.drawFlg=!1;this.listenTo(this.parentView,"removeBtnView",this.removeView)},render:function(){var a=this.model.toJSON();"NORMAL10"===a.beanKind&&this.checkFreeGacha()&&
(this.btnBadge="badge_free",this.free=!0);0===a.needQuantity&&(this.free=!0);!0===a.enable&&a.enableImagePath?this.btnBadge=a.enableImagePath:!1===a.enable&&a.disableImagePath&&(this.btnBadge=a.disableImagePath);this.$el.html(this.template({model:this.model.toJSON()}));this.free&&"NORMAL10"!==a.beanKind&&b.addClass(this.el,"freeBtn");return this},gachaPopup:function(a){a.preventDefault();if(!(b.isScrolled()||(a=this.model.toJSON(),this.checkCapacity()||"NORMAL10"===a.beanKind&&this.checkFreeGacha(!0)||
!a.userUseItem.subItemFlag&&this.checkGachaPoint()))){var c=f.template($("#GachaStartPop").text())({model:a});-1!==(this.parentView.model.toJSON?this.parentView.model.toJSON():this.parentView.model.playedGacha).gachaType.indexOf("SELECTABLE")&&(c="You currently have \x3cspan class\x3d'c_pink'\x3e"+b.selectableCharaData.cardName+"\x3c/span\x3e selected.\x3c/br\x3e"+c);new b.PopupClass({title:a.name,content:c,decideBtnText:"Draw",decideBtnEvent:function(a){a.preventDefault();b.isScrolled()||(b.g_popup_instance.popupView.close(),
this.gachaStart())}.bind(this),closeBtnText:"Cancel",exClass:"gachaPop"})}},checkCapacity:function(){var a=b.storage.userPieceList.toJSON().length;if(0>=b.storage.gameUser.get("cardCapacity")-a)return new b.PopupClass({title:this.model.toJSON().name,content:"You cannot carry any more Memoria.\x3cbr\x3ePlease make more space in your inventory.",decideBtnText:"OK",decideBtnLink:"#/MemoriaTop",closeBtnText:"Cancel",exClass:"gachaPop"}),!0},checkFreeGacha:function(a){var c=h.getPageJson(),e=b.storage.gameUser.get("freeGachaAt")?
b.storage.gameUser.get("freeGachaAt"):"";if(""===e||e.substr(0,10)!==c.currentTime.substr(0,10))return a&&new b.PopupClass({title:this.model.toJSON().name,content:"Do you wish to draw the daily free 10x Support Point Fate Weave?",decideBtnText:"Draw",decideBtnEvent:function(a){a.preventDefault();b.isScrolled()||(b.g_popup_instance.popupView.close(),this.gachaStart())}.bind(this),closeBtnText:"Cancel"}),!0},checkGachaPoint:function(){var a=f.clone(this.model.toJSON());console.log("checkGachaPoint",
a);if(!a.userUseItem.subItemFlag){if("MONEY"===a.userUseItem.item.itemCode||"PURCHASED_MONEY"===a.userUseItem.item.itemCode){var c=b.getTotalStone();"MONEY"===a.userUseItem.item.itemCode&&(a.userUseItem.quantity=c.totalMoney);"PURCHASED_MONEY"===a.userUseItem.item.itemCode&&(a.userUseItem.quantity=c.userMoney);a.userUseItem.moneyObj=c;this.model.set(a,{silent:!0})}if(a.userUseItem.quantity<a.needQuantity)return c=f.template($("#GachaConfPop").text())({model:a,needPoint:a.needQuantity-a.userUseItem.quantity}),
c={title:this.model.toJSON().name,content:c,exClass:"gachaPop",closeBtnText:"Cancel"},"MONEY"===a.userUseItem.item.itemCode||"PURCHASED_MONEY"===a.userUseItem.item.itemCode?(c.decideBtnText="Purchase Magia Stones",c.decideBtnEvent=function(a){a.preventDefault();b.isScrolled()||b.globalMenuView.moneyPopup(a)}):"YELL"!==a.userUseItem.item.itemCode&&(c.decideBtnText="Shop",c.decideBtnEvent=function(a){a.preventDefault();b.isScrolled()||(location.href="#/ShopTop")}),new b.PopupClass(c),!0}},gachaStart:function(a){if(!this.drawFlg){this.drawFlg=
b.androidKeyStop=!0;b.playedGachaPrm=null;b.playedGachaType=null;b.gachaDisp=null;var c={gachaBeanKind:this.model.toJSON().beanKind,gachaScheduleId:this.model.toJSON().gachaScheduleId};"SELECTABLE_TUTORIAL"===c.gachaBeanKind&&b.selectableChara&&(c.cardId=b.selectableChara.cardId);var e=this.parentView.model.toJSON?this.parentView.model.toJSON():this.parentView.model.playedGacha;$("#popupArea").on(b.cgti,"#resultCodeError .popupCloseBtn",function(a){a.preventDefault();b.isScrolled()||($("#popupArea").off(),
d.nativeReload("#/GachaTop"))});d.stopNormalGachaMemoria();d.hideMiniChara();h.ajaxPost(b.linkList.gachaResult,c,function(a){b.responseSetStorage(a);$(b.ready.target).on("webkitAnimationEnd",function(){$(b.ready.target).off("webkitAnimationEnd");$(b.ready.target).on("webkitAnimationEnd",function(a){"readyFadeOut"==a.originalEvent.animationName&&(b.ready.target.className="")});d.changeBg("web_black.jpg");d.stopNormalGachaMemoria();d.hideMiniChara();b.gachaResultJson=a;b.playedGachaPrm=c;b.gachaDisp=
e.id;b.playedGachaType=e.gachaType;b.globalMenuView.removeView();b.globalMenuView=null;setTimeout(function(){if(b.tutorialId)b.tutorialUtil[b.tutorialId]();else location.href="#/GachaAnimation"},500)});b.addClass(b.ready.target,"preNativeFadeIn")})}},removeView:function(){console.log("btnRemove");this.off();this.remove()}})});