define(function(){function a(a,c){return void 0===c?b(a)+"/"+o:b(a)+"/"+o+"/"+c}function b(a){return void 0===a?l+p:l+p+"/"+a}function c(a){return void 0===a?l+n:l+n+"/"+a}function d(a){return c(a)}function e(a,b){return""+c(a)+"/cubes/"+b}function f(a){return c(a)}function g(a){return c(a)}function h(a,b){var d=c(a);return d=void 0===b?d+"/extend_area":d+"/extend_area/"+b}function i(a,b,c){var d=e(a,b);return d=void 0===c?d+"/dim_groups":d+"/dim_groups/"+c}function j(a){return c(a)}function k(a){return c(a)}var l,m={},n="reports",o="datasources",p="dsgroup";return m.getWebRoot=function(){return l},m.setWebRoot=function(a){l=""===a?a:a+"/"},m.loadDsgroupList=function(){return b()},m.deleteDataSources=function(b,c){return a(b,c)},m.getCurrentDataSourceInfo=function(b,c){return a(b,c)},m.submitDataSourceInfoAdd=function(b){return a(b)},m.submitDataSourceInfoUpdate=function(b,c){return a(b,c)},m.loadTables=function(b,c){return a(b,c)+"/tables"},m.addDsGroup=function(){return b()},m.editDsGroup=function(a){return b(a)},m.changeDsActive=function(b,c){return a(b,c)+"/changeActive"},m.loadDsGroupActive=function(){return b("active")},m.loadReportList=function(){return c()},m.showReport=function(a){return c(a)+"/preview_info"},m.deleteReport=function(a){return c(a)},m.addReport=function(){return c()},m.copyReport=function(a){return c(a)+"/duplicate"},m.getDimSetList=function(a){return c(a)+"/dim_config"},m.getDimDateRelationTableList=function(a,b){return""+c(a)+"/tables/"+b},m.submitDimSetInfo=function(a){return c(a)+"/dim_config"},m.loadSelectedDataSources=function(a){return c(a)+"/ds_id"},m.loadReportFactTableList=function(a){return c(a)+"/cube_tables"},m.submitCubeSetInfo=function(a){return c(a)+"/star_models"},m.getRuntimeId=function(a){return c(a)+"/runtime_model"},m.loadCubeList=function(a){return c(a)+"/cubes"},m.loadIndList=function(a,b){return e(a,b)+"/inds"},m.loadDimList=function(a,b){return e(a,b)+"/dims"},m.initJson=function(a){return c(a)+"/json"},m.initVm=function(a){return c(a)+"/vm"},m.addComp=function(a){return c(a)+"/extend_area"},m.deleteComp=function(a,b){return h(a,b)},m.saveReport=function(a){return c(a)},m.saveJsonVm=function(a){return c(a)+"/json_vm"},m.publishReport=function(a){return c(a)+"/publish"},m.previewReport=function(a){return c(a)+"/preview"},m.getPublishInfo=function(a){return c(a)+"/publish_info"},m.getCompAxis=function(a,b){return h(a,b)},m.addCompAxis=function(a,b){return h(a,b)+"/item"},m.deleteCompAxis=function(a,b,c,d){return""+h(a,b)+"/item/"+c+"/type/"+d},m.changeCompItemChartType=function(a,b,c,d){return""+h(a,b)+"/item/"+c+"/chart/"+d},m.sortingCompDataItem=function(a,b){return""+h(a,b)+"/item_sorting"},m.indDimSwitch=function(a,b,c,d,f){return""+e(a,b)+"/"+c+"-to-"+d+"/"+f},m.dimToGroup=function(a,b,c){return i(a,b,c)+"/dims"},m.sortSubDim=function(a,b,c){return""+i(a,b,c)+"/dim_sorting"},m.loadShowData=function(a,b){return e(a,b)+"show-config"},m.submitSowData=function(a,b){return e(a,b)+"show-config"},m.putAggregator=function(a,b,c){return""+e(a,b)+"/inds/"+c},m.putName=function(a,b,c,d){return""+e(a,b)+"/"+c+"s/"+d},m.deleteSubDim=function(a,b,c,d){return""+i(a,b,c)+"/level/"+d},m.deleteDimGroup=function(a,b,c){return i(a,b,c)},m.createDimGroup=function(a,b){return i(a,b)},m.submitDeriveIndsInfo=function(a,b){return e(a,b)+"/extend_measures"},m.deleteInd=function(a,b,c){return e(a,b)+"/extend_measures"+"/"+c},m.getDataFormatList=function(a,b){return h(a,b)+"/dataformat"},m.getTopnList=function(a,b){return h(a,b)+"/topn"},m.getIndColorList=function(a,b){return h(a,b)+"/colorformat"},m.getTextAlignList=function(a,b){return h(a,b)+"/textAlign"},m.getColumnLinkPlaneList=function(a,b){return h(a,b)+"/link"},m.getParamSetList=function(a,b){return h(a,b)+"/param"},m.getFieldFilterInfo=function(a,b,c){return h(a,b)+"/item/"+c+"/condition"},m.getAxisList=function(a,b){return h(a,b)+"/position"},m.getAxisList=function(a,b){return h(a,b)+"/position"},m.getNormInfoDepict=function(a,b){return h(a,b)+"/tooltips"},m.getFilterBlankLine=function(a,b){return h(a,b)+"/othersetting"},m.getParameterDim=function(a){return g(a)+"/params"},m.getParameterDimData=function(a){return f(a)+"/params"},m.getSkinType=function(a,b){return d(a)+"/theme/"+b},m.editReportName=function(a){return j(a)+"/name/"},m.saveEditReportName=function(a,b){return k(a)+"/name/"+b},m});