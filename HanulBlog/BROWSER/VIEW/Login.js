HanulBlog.Login = CLASS({

	preset : function() {
		'use strict';

		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// password store
		passwordStore = HanulBlog.STORE('passwordStore'),
		
		// auth room
		authRoom = HanulBlog.ROOM('authRoom'),
		
		// wrapper
		wrapper = DIV({
			style : {
				padding : 10
			},
			c : UUI.VALID_FORM({
				c : [UUI.FULL_INPUT({
					style : {
						border : '1px solid #999'
					},
					placeholder : '비밀번호',
					name : 'password',
					type : 'password'
				}), UUI.FULL_CHECKBOX({
					style : {
						marginTop : 10
					},
					label : '로그인을 유지하시겠습니까?',
					name : 'isRememberMe'
				}), UUI.FULL_SUBMIT({
					style : {
						marginTop : 10,
						backgroundColor : BROWSER_CONFIG.HanulBlog.baseColor,
						color : '#fff',
						fontWeight : 'bold'
					},
					value : '로그인'
				})],
				on : {
					submit : function(e, form) {
						
						var
						// data
						data = form.getData();
						
						authRoom.send({
							methodName : 'auth',
							data : data.password
						}, function(isAuthed) {
							
							if (isAuthed === true) {
								
								passwordStore.save({
									name : 'password',
									value : data.password,
									isToSession : data.isRememberMe !== true
								});
								
								HanulBlog.REFRESH('');
								
							} else {
								UUI.MODAL({
									style : {
										padding : '20px 30px',
										backgroundColor : BROWSER_CONFIG.HanulBlog.baseColor,
										color : '#fff'
									},
									c : '비밀번호가 다릅니다.'
								});
							}
						});
					}
				}
			})
		}).appendTo(HanulBlog.Layout.getContent());
		
		TITLE(CONFIG.title + ' :: 로그인');

		inner.on('close', function() {
			
			authRoom.exit();
			
			wrapper.remove();
		});
	}
});
