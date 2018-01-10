/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  // 图片上传预览文字清除
  config.image_previewText = ' ';
  // 图片上传地址
  config.filebrowserImageUploadUrl = ' ';
  // 图片黏贴上传
  // 返回值规范 https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_file_upload
  config.extraPlugins = 'imagepaste';
};
