HanulBlog.View = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';
		
		var
		// wrapper
		wrapper = DIV().appendTo(HanulBlog.Layout.getContent());
		
		inner.on('paramsChange', function(params) {
			
			var
			// id
			id = params.id;
			
			HanulBlog.ArticleModel.get(id, function(articleData) {
				
				wrapper.empty();
				
				wrapper.append(UUI.BUTTON({
					style : {
						marginLeft : 10,
						marginTop : 10,
						flt : 'left',
						color : '#4183c4'
					},
					title : '뒤로가기',
					on : {
						tap : function(e) {
							history.back();
						}
					}
				}));
				
				wrapper.append(CLEAR_BOTH());
				
				wrapper.append(HanulBlog.ArticleDom({
					articleData : articleData,
					isViewMode : true
				}).getPanel());
				
				TITLE(CONFIG.title + ' :: ' + articleData.title);
			});
		});

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
