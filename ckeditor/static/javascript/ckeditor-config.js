CKEDITOR.editorConfig = function( config ) {
    config.toolbar = [
			['Format', 'Bold', 'Italic', 'Underline', 'Strikethrough', '-', 'Subscript', 'Superscript', '-', 'TextColor'],
			['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['NumberedList', 'BulletedList', '-', 'Blockquote'],
            ['Link', 'Unlink'],
            ['Table', '-', 'Image'],
            ['ShowBlocks', 'Source']
		];

	config.removeButtons = 'Underline,Subscript,Superscript';

	config.format_tags = 'p;h1;h2;h3;pre';

	config.removeDialogTabs = 'image:advanced;link:advanced';
};
