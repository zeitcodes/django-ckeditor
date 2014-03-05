CKEDITOR.editorConfig = function( config ) {
    config.toolbar = [
        ['Format', 'Bold', 'Italic', 'Underline', 'Strikethrough', '-', 'Subscript', 'Superscript', '-', 'TextColor'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['NumberedList', 'BulletedList', '-', 'Blockquote'],
        ['Link', 'Unlink'],
        ['Table', '-', 'Image'],
        ['ShowBlocks', 'Source']
    ];
    config.toolbarCanCollapse = true;
	config.format_tags = 'p;h2;h3;h4;h5';
    config.coreStyles_strike = {element: 'del', overrides: 'strike'};
    config.coreStyles_underline = {element: 'ins', overrides: 'u'};
    config.scayt_autoStartup = false;
    config.disableNativeSpellChecker = false;
    config.filebrowserUploadUrl = '/ckeditor/upload/';
    config.filebrowserBrowseUrl = '/ckeditor/browse/';
};
