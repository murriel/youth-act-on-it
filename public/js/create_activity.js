$(document).ready(function(){
	$("#btnSubmit").click(function(){
		$.ajax("/activity/create",{
			data:{
				title:$("#title").val(),
				description:$("#description").val(),
				activity_date:$("#activity_date").val(),
				activity_location: $("#activity_location").val(),
				longitude: 10,
				latitude: 10,
				status:"APPROVED",
				visual_asset: ""
			},
			type: "POST",
			complete: function(){
				window.location = "/list";
			}
		});
	});
});