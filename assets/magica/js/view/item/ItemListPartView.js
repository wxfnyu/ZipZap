define("underscore backbone backboneCommon ajaxControl command js/view/item/ItemSalePopupView".split(" "),function(f,e,b,g,d,c){return e.View.extend({events:function(){var a={};a[b.cgti]=this.itemPop;return a},initialize:function(a,b){this.model=a;this.displayType=b;this.el.className="sticker"!==b?"wrap commonFrame4":"wrap";this.listenTo(this,"removeView",this.removeView);this.listenTo(this.rootView,"removeChildView",this.removeView);this.listenTo(this,"rePopupHandler",this.rePopupHandler)},render:function(){switch(this.displayType){case "item":this.model.dispName=
this.model.item.name;this.model.imagePath=this.model.itemId.toLowerCase();this.el.className+=" item";break;case "gift":this.model.dispName=this.model.gift.name;this.model.imagePath="item_gift_"+this.model.giftId;this.el.className+=" gift";break;case "sticker":this.model.dispName=this.model.item.name;this.model.imagePath=this.model.itemId.toLowerCase();this.el.className+=" sticker";break;case "lbItem":this.model.chara.title&&(this.model.dispTitle=this.model.chara.title);this.model.dispName=this.model.chara.name;
this.model.imagePath="chara_"+this.model.charaId+"_h";this.model.quantity=this.model.lbItemNum;var a=!1;"RANK_4"===this.model.chara.defaultCard.rank&&2<this.model.revision&&2003!==this.model.charaId&&(a=!0);this.el.className=a?this.el.className+" gem crystal":this.el.className+" gem"}this.model.salePrice=2E3;this.$el.html(this.template({model:this.model,type:this.displayType}));return this},itemPop:function(a){a.preventDefault();b.isScrolled()||("sticker"===this.displayType?this.rootView.stickerPop(this.model):
"lbItem"===this.displayType&&("RANK_4"!==this.model.chara.defaultCard.rank?this.popupHandler():2<this.model.revision||2003===this.model.charaId?this.popupHandler():this.cautionPopupHandler()))},popupHandler:function(){c.prototype.parentView=this;this.rootView.popupContainer&&this.rootView.popupContainer.removeHandler();var a=this;this.rootView.popupContainer=new c({model:this.model},function(){a.modelSet()});new b.PopupClass({title:"Exchange Destiny Gems",popupType:"typeE",exClass:"itemSalePop"});
b.doc.getElementById("popupArea").getElementsByClassName("popupTextArea")[0].appendChild(this.rootView.popupContainer.render().el);d.getBaseData(b.getNativeObj())},cautionPopupHandler:function(){var a=this,c=$("#saleCaution").text();new b.PopupClass({title:"Exchange Destiny Gems",popupType:"typeA",content:c,exClass:"saleCautionPop",decideBtnText:"OK",decideBtnEvent:function(){a.popupHandler()},closeBtnText:"Cancel"})},rePopupHandler:function(){c.prototype.parentView=this;this.rootView.popupContainer&&
this.rootView.popupContainer.removeHandler();var a=this;this.rootView.popupContainer=new c({model:this.model},function(){a.modelSet()});new b.PopupClass({title:"Exchange Destiny Gems",popupType:"typeE",exClass:"itemSalePop"});b.doc.getElementById("popupArea").getElementsByClassName("popupTextArea")[0].appendChild(this.rootView.popupContainer.render().el);d.getBaseData(b.getNativeObj())},modelSet:function(){if("lbItem"===this.displayType){var a=b.storage.userCardListEx.findWhere({charaId:this.model.charaId}).toJSON();
console.log("_newModel",a);a.lbItemNum!==this.model.lbItemNum&&(1>a.lbItemNum?(this.removeView(),b.scrollRefresh(null,null,!0),1>b.doc.getElementById("gem").getElementsByClassName("wrap").length&&'\x3cp class\x3d"noItems"\x3eYou have no Destiny Gems.\x3c/p\x3e'!==b.doc.getElementById("gem").innerHTML&&(b.doc.getElementById("gem").innerHTML='\x3cp class\x3d"noItems"\x3eYou have no Destiny Gems.\x3c/p\x3e')):(this.model=a,this.render()))}},removeView:function(){this.off();this.remove();delete this.model.view}})});