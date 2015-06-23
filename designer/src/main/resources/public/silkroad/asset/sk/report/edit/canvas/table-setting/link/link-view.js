define(["dialog","report/edit/canvas/table-setting/link/link-model","report/edit/canvas/table-setting/link/link-template","report/edit/canvas/table-setting/link/link-param-template","report/edit/canvas/table-setting/link/link-param-add-template"],function(a,b,c,d,e){var f=Backbone.View.extend({events:{"click .j-set-link":"dialogLinkSetting"},initialize:function(a){var c=this;c.model=new b({canvasModel:a.canvasView.model,reportId:a.reportId}),this.model.set("compId",this.$el.find(".j-comp-setting").attr("data-comp-id"))},dialogLinkSetting:function(){var a=this;a.model.getColumnLinkPlaneList(function(b){a._openColumnLinkPlaneDialog(b),a.bindEvents()})},bindEvents:function(){var a=this,b=$(".j-table-link-set-column-table .j-next"),c=$(".j-table-link-set-param-table .j-back"),d=$(".j-table-link-set-param-table .j-ok");b.unbind(),c.unbind(),d.unbind(),b.bind("click",function(){a.saveColumnTableRelation()}),c.bind("click",function(){$(".j-table-link-set-column-table").show(),$(".j-table-link-set-param-table").hide()})},showParamSetting:function(){var a=this;a.model.getParamSetList(function(a){$(".j-table-link-set-param-items").html(d.render(a)),$(".j-param-set-add").unbind(),$(".j-param-set-add").bind("click",function(){$(this).before(e.render(a))})})},saveColumnTableRelation:function(){var a=this,b=$(".j-table-link-set-column-table .table-link-set-item"),c=[];b.each(function(){var a=$(this),b=a.find("label").attr("data-value"),d=a.find("select").val();c.push({id:b,selectedTable:d})}),a.model.saveColumnTableRelation(c,function(){$(".j-table-link-set-column-table").hide(),$(".j-table-link-set-param-table").show(),a.showParamSetting()})},saveParamRelation:function(){var a=this,b=$(".j-table-link-set-param-table .table-link-set-item"),c=[];b.each(function(){var a=$(this),b=a.find("select"),d=b[0].val(),e=b[1].val();c.push({id:d,selectedTable:e})}),a.model.saveParamRelation(c,function(){a.$dialog.close()})},destroy:function(){this.stopListening(),this.model.clear({silent:!0}),delete this.model,this.$el.unbind()},_openColumnLinkPlaneDialog:function(b){var d,e=this;return $.isEmptyObject(b.columnDefine)?(a.alert("没有指标"),void 0):(d=c.render(b),e.$dialog=a.showDialog({title:"跳转设置",content:d,dialog:{width:440,height:400,resizable:!1}}),void 0)}});return f});