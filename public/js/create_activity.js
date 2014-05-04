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
				visual_asset: $("#show-picture").prop("src")
			},
			type: "POST",
			complete: function(){
				window.location = "/list";
			}
		});
	});

    $("#getLocation").click(function(){
        navigator.geolocation.getCurrentPosition(function(pos){
            $("#activity_location").val(pos.coords.latitude + ',' + pos.coords.longitude);
        },
        function(){
            $("#activity_location").val("Location cannot be found");
        });
    });

    var takePicture = document.querySelector("#take-picture"),
        showPicture = document.querySelector("#show-picture");

    if (takePicture && showPicture) {
        // Set events
        takePicture.onchange = function (event) {
            // Get a reference to the taken picture or chosen file
            var files = event.target.files,
                file;
            if (files && files.length > 0) {
                file = files[0];
                try {
                    // Fallback if createObjectURL is not supported
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        showPicture.src = event.target.result;
                        showPicture.hidden = false;
                    };
                    fileReader.readAsDataURL(file);
                }
                catch (e) {
                    //
                    var error = document.querySelector("#error");
                    if (error) {
                        error.innerHTML = "Neither createObjectURL or FileReader are supported";
                    }
                }
            }
        };
    }
});


