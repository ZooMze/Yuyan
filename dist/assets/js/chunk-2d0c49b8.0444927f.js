(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c49b8"],{"3c0b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-container has-foot"},[a("el-breadcrumb",[a("el-breadcrumb-item",[e._v("页面标题")])],1),a("div",{staticClass:"view-header"},[a("el-button",{staticClass:"gradient",attrs:{type:"primary",size:"middle"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 按钮")]),a("div",{staticClass:"search-area"},[a("el-form",{ref:"searchForm",attrs:{model:e.searchForm,inline:!0}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchForm.dateRange,callback:function(t){e.$set(e.searchForm,"dateRange",t)},expression:"searchForm.dateRange"}})],1),a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入关键字搜素"},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}},[a("el-button",{attrs:{slot:"append"},slot:"append"},[a("i",{staticClass:"el-icon-search"}),e._v(" 搜素")])],1)],1)],1)],1)],1),a("div",{staticClass:"view-body"},[a("el-table",{attrs:{data:e.tableData,stripe:"",center:"",border:""}},[a("el-table-column",{attrs:{prop:"data",label:"列名"}}),a("el-table-column",{attrs:{prop:"data",label:"列名2"}}),a("el-table-column",{attrs:{label:"操作",width:"275px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"default",size:"mini"}},[e._v("操作")]),a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("操作")]),a("el-button",{attrs:{type:"warning",size:"mini"}},[e._v("操作")]),a("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("操作")])]}}])})],1)],1),a("div",{staticClass:"view-footer"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[15,30,45,60],"page-size":15,layout:"total, sizes, prev, pager, next, jumper",total:20}})],1)],1)},s=[],l={data:function(){return{searchForm:{dateRange:[],keyword:null},tableData:[{data:1},{data:2},{data:3}]}},mounted:function(){},methods:{}},i=l,n=a("6691"),o=Object(n["a"])(i,r,s,!1,null,null,null);t["default"]=o.exports}}]);