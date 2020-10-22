define("underscore backbone backboneCommon ajaxControl command text!template/mission/DoppelMissionTop.html text!css/mission/DoppelMissionTop.css".split(" "),function(d,k,a,l,e,n,p){var q=k.Model.extend(),f,g,t=k.View.extend({events:function(){var b={};b[a.cgti+" .hoge"]=this.hoge;return b},initialize:function(b){this.clearMissionCnt=this.receiveCnt=0;this.missionList=d.sortBy(a.doppelMissionList,function(a){if(a.clearedCount>=a.challenge.count)return a.isClear=!0,this.clearMissionCnt++,a.receivedAt&&
this.receiveCnt++,-999+a.challenge.sortKey;a.isClear=!1;return a.challenge.sortKey}.bind(this));this.missionLength=this.missionList.length;this.progressPer=this.receiveCnt/this.missionLength*100;this.template=d.template(n);m.prototype.parentView=this;this.createDom()},render:function(){this.$el.html(this.template({model:{charaId:g,missionLength:this.missionLength,receiveCnt:this.receiveCnt,progress:this.progressPer}}));return this},createDom:function(){a.setGlobalView();r();a.content.append(this.render().el);
var b=a.doc.createDocumentFragment();d.each(this.missionList,function(a,v){a.receivedAt||(a=new m({model:new q(a)}),b.appendChild(a.render().el))},this);a.doc.querySelector("#scrollWrap .scrollInner").appendChild(b);e.getBaseData(a.getNativeObj());a.scrollSet("scrollWrap","scrollInner");a.ready.hide()}}),c=!1,m=k.View.extend({className:"challenge",events:function(){var b={};b[a.cgti+" .receiveBtn"]=this.receive;return b},initialize:function(a){this.template=d.template($("#missionParts").text());this.listenTo(this.parentView,
"removeView",this.removeView)},render:function(){var a=this.model.toJSON();a.challenge.displayName=a.challenge.displayName.replace(/＠/g,"\x3cbr\x3e");this.$el.html(this.template({model:a}));return this},receive:function(b){b.preventDefault();if(!a.isScrolled()&&!c){c=!0;var h=function(){this.parentView.receiveCnt++;this.parentView.progressPer=this.parentView.receiveCnt/this.parentView.missionLength*100;a.doc.querySelector("#receiveCnt").textContent=this.parentView.receiveCnt;a.doc.querySelector("#doppelMissionGaugeInner").style.width=
this.parentView.progressPer+"%";e.startSe(1007);this.parentView.receiveCnt==this.parentView.missionLength&&(u(),a.doc.querySelector("#scrollWrap .scrollInner").innerHTML='\x3cp class\x3d"noMission"\x3eThere are no available Missions\x3c/p\x3e');this.removeView();a.scrollRefresh()}.bind(this);b={challengeId:this.model.toJSON().challengeId};l.ajaxPost(a.linkList.userDoppelChallengeReceive,b,function(b){a.responseSetStorage(b);c=!1;new a.PopupClass({content:"Mission Reward(s) Received\x3cbr\x3e\x3cbr\x3e※The Item can be found in your inventory.",
closeBtnText:"OK",popupType:"typeC",exClass:"missionPop"},null,null,h)})}},removeView:function(){this.off();this.remove()}}),r=function(){var a=["anim_title.png","anim_complete.png","anim_doppel_mark.png"],h=function(){var b=a[0],c=new Image;c.src="/magica/resource/image_web/page/mission/doppelMission/common/"+b;c.onload=function(){a.shift();0<a.length&&h()}};h()},u=function(b){a.androidKeyStop=!0;a.tapBlock(!0);var c=$("#doppelMissionAnimTemp").text();a.doc.getElementById("overlapContainer").innerHTML+=
c;$("#missionClearMaskBg").on("webkitAnimationEnd",function(){$("#missionClearMaskBg").off();e.startSe(1603)});$(".animMark").on("webkitAnimationEnd",function(){$(".animMark").off();a.tapBlock(!1);$(".doppelMissionAnimationDom").on(a.cgti,function(c){c.preventDefault();a.isScrolled()||(a.tapBlock(!0),a.androidKeyStop=!0,$(".doppelMissionAnimationDom").off(),a.addClass(a.doc.getElementById("overlapContainer").getElementsByClassName("doppelMissionAnimationDom")[0],"allAnimationFadeOut"),$(".animDoms").on("webkitAnimationEnd",
function(){$(".animDoms").off();a.androidKeyStop=!1;a.tapBlock(!0);a.doc.getElementById("overlapContainer").innerHTML='\x3cdiv id\x3d"curtain"\x3e\x3c/div\x3e';b?b():(a.androidKeyStop=!1,a.tapBlock(!1))}))})})};return{needModelIdObj:[{id:"user"},{id:"gameUser"},{id:"userItemList"},{id:"userStatusList"}],fetch:function(b){b&&a.doppelMissionList?(g=b,l.pageModelGet(this.needModelIdObj)):location.href="#/MissionTop"},init:function(){a.historyArr=["MyPage","MissionTop"];c=!1;a.setStyle(p);l.getPageJson();
f=new t},startCommand:function(){e.changeBg("bg_"+g+"_01.png")},remove:function(b){c=!1;g=null;a.doppelMissionList=null;f&&(f.trigger("removeView"),f.remove());b()}}});