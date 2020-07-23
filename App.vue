<script>
	export default {
		onLaunch: function() {
           
		},
		onShow: function() {
            // 监听中间扫码事件
            uni.onTabBarMidButtonTap(function(){
               uni.chooseImage({
                   success(e) {
                       console.log(e)
                   },
                   complete() { 
                       console.log(111)
                       uni.reLaunch({
                           url:"pages/scan/scan",
                           fail(e) {
                               console.log(e)
                           }
                       })
                   }
               }) 
            })
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	@import "components/m-icon/m-icon.css";
    @import "common/mian.css";
	/*每个页面公共css */
    @import  'uview-ui/index.scss';
    @import 'icon/icon.css';
	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 72px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	

	button.primary {
		background-color: #0faeff;
        
	}
</style>
