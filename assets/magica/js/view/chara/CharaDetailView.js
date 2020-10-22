define("underscore backbone backboneCommon ajaxControl command cardUtil text!template/chara/CharaDetail.html".split(" "),function(h,m,a,k,f,l,n){return m.View.extend({id:"cardDetail",events:function(){var b={};b[a.cgti+" #detailCardImage .cardImg"]=this.cardZoom;b[a.cgti+" #detailCardImage .zoomImg img"]=this.cardZoom;b[a.cgti+" #detailCardImage .zoomImg .textToggleBtn"]=this.zoomProfileToggle;b[a.cgti+" #detailTab li"]=this.tabChange;b[a.cgti+" .collectionBack"]=this.detailClose;b[a.cgti+" .cardIllustWrap .mb_pink"]=
this.visualChangeCard;b[a.cgti+" .miniCharaBtn .mb_pink"]=this.visualChangeCommand;b[a.cgti+" .voicePlayBtn"]=this.playVoice;b[a.cgti+" .moviePlayBtn"]=this.charaMoviewPlay;b[a.cgti+" .live2dChangeBtn"]=this.live2dChange;return b},initialize:function(a){this.template=h.template(n);this.live2dId=this.model.get("live2dId");this.visualSetFlag=this.live2dSetFlag=!1;this.displayCardId=this.model.get("displayCardId");this.commandVisualType=this.model.get("commandVisualType");this.commandVisualId=this.model.get("commandVisualId")},
render:function(){this.$el.html(this.template({model:this.model.toJSON()}));if(this.model.toJSON().supportFlag||this.model.toJSON().isShop)a.addClass(this.el.querySelector('[data-type\x3d"setting"]'),"off"),this.el.querySelector(".composeLinks").style.display="none";if(this.model.toJSON().initTabType){var b='[data-type\x3d"'+this.model.toJSON().initTabType+'"]';this.el.querySelector("#cardDetailWrap").className=this.model.toJSON().initTabType;a.removeClass(this.el.querySelector("#detailTab .current"),
"current");a.addClass(this.el.querySelector(b),"current")}return this},cardZoom:function(b){b.preventDefault();a.isScrolled()||a.doc.querySelector("#detailCardImage").classList.toggle("zoom")},zoomProfileToggle:function(b){b.preventDefault();a.isScrolled()||(a.doc.querySelector(".zoomProfile").classList.toggle("show"),-1!==a.doc.querySelector(".textToggleBtn").textContent.indexOf("OFF")?a.doc.querySelector(".textToggleBtn").textContent="Show Profile":a.doc.querySelector(".textToggleBtn").textContent=
"Hide Profile")},tabChange:function(b){a.doc.querySelector("#cardDetailWrap").className=b.currentTarget.dataset.type;a.removeClass(b.currentTarget.parentNode.querySelector(".current"),"current");a.addClass(b.currentTarget,"current");a.scrollRefresh(null,null,!0)},detailClose:function(b){if(b&&(b.preventDefault(),a.isScrolled()))return;f.stopVoice();this.live2dSetFlag&&this.live2dSet();this.visualSetFlag?this.visualSet(this.model.toJSON().closeEvent):this.model.toJSON().closeEvent&&this.model.toJSON().closeEvent();
this.remove();h.each(a.doc.querySelector("#baseContainer").children,function(b){a.removeClass(b,"hide")});a.androidKeyStop=!1;a.detailView=null},visualChangeCard:function(b){b.preventDefault();if(!a.isScrolled()&&(b=b.currentTarget,!b.classList.contains("off")&&!b.classList.contains("selected"))){a.removeClass(a.doc.querySelector(".cardIllustWrap .selected"),"selected");a.addClass(b,"selected");this.visualSetFlag||(this.visualSetFlag=!0);b=this.model.get("cardArr")[b.dataset.cardarrindex];var c=a.doc.querySelector("#detailCardImage .cardImg"),
g=a.doc.querySelector("#detailCardImage .zoomImg img");c.dataset.nativeimgkey="card_"+b.cardId+"_c";c.dataset.src="resource/image_native/card/image/card_"+b.cardId+"_c.png";g.dataset.nativeimgkey="card_"+b.cardId+"_c";g.dataset.src="resource/image_native/card/image/card_"+b.cardId+"_c.png";f.getBaseData(a.getNativeObj());this.displayCardId=b.cardId}},visualChangeCommand:function(b){var c,g,e;b.preventDefault();if(!a.isScrolled()&&(e=b.currentTarget,!e.classList.contains("off")&&!e.classList.contains("selected"))){a.removeClass(a.doc.querySelector(".miniCharaBtn .selected"),
"selected");a.addClass(e,"selected");this.visualSetFlag||(this.visualSetFlag=!0);"chara"==e.dataset.commandtype?(b="CHARA",c="mini/image/",g="mini_"+this.model.toJSON().card.miniCharaNo+"_d",e=Number(this.model.toJSON().card.miniCharaNo)):(b="CARD",c="card/image/",g="card_"+this.model.get("cardArr")[e.dataset.cardarrindex].cardId+"_d",e=Number(this.model.get("cardArr")[e.dataset.cardarrindex].cardId));var d=a.doc.querySelectorAll(".discPreview .discWrap img");h.each(d,function(a){a.dataset.nativeimgkey=
g;a.dataset.src="resource/image_native/"+c+g+".png"});f.getBaseData(a.getNativeObj());this.commandVisualType=b;this.commandVisualId=e}},visualSet:function(b){var c=!1,g=this.model.toJSON(),e=function(d){a.responseSetStorage(d);var c=d.userCardList?d.userCardList[0]:a.storage.userCardList.findWhere({id:g.userCardId}).toJSON();d=d.userCharaList?d.userCharaList[0]:a.storage.userCharaList.findWhere({charaId:g.charaId}).toJSON();c=l.addExStatus($.extend(c,d));a.storage.userCardListEx&&(d=a.storage.userCardListEx.findWhere({id:g.id}))&&
(d.clear({silent:!0}),d.set(c));b&&b();a.pageObj&&a.pageObj.charaDetailClose&&a.pageObj.charaDetailClose()},d={};d.charaId=this.model.get("charaId");d.commandVisualType=this.commandVisualType;d.commandVisualId=this.commandVisualId;d.displayCardId=this.displayCardId;this.model.get("commandVisualType")!==this.commandVisualType&&(c=!0);this.model.get("commandVisualId")!==this.commandVisualId&&(c=!0);this.model.get("displayCardId")!==this.displayCardId&&(c=!0);c?k.ajaxPost(a.linkList.userCharaVisualize,
d,e):b&&b()},live2dSet:function(){var b=!1,c=this.model.toJSON(),g=function(b){a.responseSetStorage(b);var d=b.userCardList?b.userCardList[0]:a.storage.userCardList.findWhere({id:c.userCardId}).toJSON();b=b.userCharaList?b.userCharaList[0]:a.storage.userCharaList.findWhere({charaId:c.charaId}).toJSON();d=l.addExStatus($.extend(d,b));b=a.storage.userCardListEx.findWhere({id:c.id});b.clear({silent:!0});b.set(d)},e={};e.charaId=this.model.get("charaId");e.live2dId=this.live2dId;this.model.get("live2dId")!==
this.live2dId&&(b=!0);b&&k.ajaxPost(a.linkList.live2dSet,e,g)},charaMoviewPlay:function(b){b.preventDefault();if(!a.isScrolled()){f.stopVoice();a.androidKeyStop=!0;var c=this.model.toJSON().charaId;$(a.ready.target).on("webkitAnimationEnd",function(){f.changeBg("web_black.jpg");$(a.ready.target).off();a.pageObj&&a.pageObj.beforeMovieStart&&a.pageObj.beforeMovieStart();$(a.ready.target).on("webkitAnimationEnd",function(b){"readyFadeOut"==b.originalEvent.animationName&&(a.ready.target.className="")});
$("#commandDiv").on("nativeCallback",function(b,c){a.androidKeyStop=!1;a.ready.target.className="nativeFadeOut";f.startBgm(a.bgm);f.changeBg(a.background);f.setWebView();$("#commandDiv").off();a.pageObj&&a.pageObj.afterMovieEnd&&a.pageObj.afterMovieEnd()});setTimeout(function(){f.setWebView(!1);f.stopBgm();f.playCharaMovie(c)},500)});a.addClass(a.ready.target,"preNativeFadeIn")}},playVoice:function(b){b.preventDefault();a.isScrolled()||(f.stopVoice(),b="vo_char_"+this.model.toJSON().charaId+"_00_01",
f.startVoice(b))},live2dChange:function(b){b.preventDefault();a.isScrolled()||(this.live2dSetFlag=!0,a.removeClass(a.doc.querySelector(".live2dBtns .current"),"current"),a.addClass(b.currentTarget,"current"),this.live2dId=b.currentTarget.dataset.live2did)}})});