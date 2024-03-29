ace.define("ace/theme/space_gray",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-ocean-dark,";
exports.cssText = ".ace-ocean-dark,\
.ace_gutter {\
  color: rgb(118,123,133)\
}\
\
.ace-ocean-dark,\
.ace_print-margin {\
  width: 1px;\
  background: #e8e8e8\
}\
\
.ace-ocean-dark,\
 {\
  background-color: #2b303b;\
  color: #c0c5ce\
}\
\
.ace-ocean-dark,\
.ace_cursor {\
  color: #c0c5ce\
}\
\
.ace-ocean-dark,\
.ace_marker-layer .ace_selection {\
  background: #4f5b66\
}\
\
.ace-ocean-dark,\
.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px #2b303b;\
  border-radius: 2px\
}\
\
.ace-ocean-dark,\
.ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174)\
}\
\
.ace-ocean-dark,\
.ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #65737e\
}\
\
.ace-ocean-dark,\
.ace_marker-layer .ace_active-line {\
  background: #343d46\
}\
\
.ace-ocean-dark,\
.ace_gutter-active-line {\
  background-color: #343d46\
}\
\
.ace-ocean-dark,\
.ace_marker-layer .ace_selected-word {\
  border: 1px solid #4f5b66\
}\
\
.ace-ocean-dark,\
.ace_fold {\
  background-color: #8fa1b3;\
  border-color: #c0c5ce\
}\
\
.ace-ocean-dark,\
.ace_keyword {\
  color: #b48ead\
}\
\
.ace-ocean-dark,\
.ace_keyword.ace_operator {\
  color: #c0c5ce\
}\
\
.ace-ocean-dark,\
.ace_keyword.ace_other.ace_unit {\
  color: #d08770\
}\
\
.ace-ocean-dark,\
.ace_constant {\
  color: #d08770\
}\
\
.ace-ocean-dark,\
.ace_constant.ace_numeric {\
  color: #d08770\
}\
\
.ace-ocean-dark,\
.ace_constant.ace_character.ace_escape {\
  color: #96b5b4\
}\
\
.ace-ocean-dark,\
.ace_support.ace_function {\
  color: #96b5b4\
}\
\
.ace-ocean-dark,\
.ace_support.ace_class {\
  color: #ebcb8b\
}\
\
.ace-ocean-dark,\
.ace_storage {\
  color: #b48ead\
}\
\
.ace-ocean-dark,\
.ace_invalid.ace_illegal {\
  color: #2b303b;\
  background-color: #bf616a\
}\
\
.ace-ocean-dark,\
.ace_string {\
  color: #a3be8c\
}\
\
.ace-ocean-dark,\
.ace_string.ace_regexp {\
  color: #96b5b4\
}\
\
.ace-ocean-dark,\
.ace_comment {\
  color: #65737e\
}\
\
.ace-ocean-dark,\
.ace_variable {\
  color: #bf616a\
}\
\
.ace-ocean-dark,\
.ace_meta.ace_selector {\
  color: #b48ead\
}\
\
.ace-ocean-dark,\
.ace_entity.ace_other.ace_attribute-name {\
  color: #d08770\
}\
\
.ace-ocean-dark,\
.ace_entity.ace_name.ace_function {\
  color: #8fa1b3\
}\
\
.ace-ocean-dark,\
.ace_entity.ace_name.ace_tag {\
  color: #bf616a\
}\
\
.ace-ocean-dark,\
.ace_markup.ace_list {\
  color: #bf616a\
}\
.ace-ocean-dark,\
.ace_heading {\
  color: #CD9136\
}\
"


var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
