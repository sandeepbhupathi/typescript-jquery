import msg from './message'
import * as $ from 'jquery'

$(function(){
	$("#showBtn").on("click",function(){
		var o = new msg();
		o.show();
	});
}
);