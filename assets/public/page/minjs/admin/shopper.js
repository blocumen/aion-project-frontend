function addModel(){
	$('#dataModel').modal('show');
}

function submitData() {
// Front End Validation Start
	var isValid = true;
	$('#formId input[type="text"]').each(function() {

		if ($.trim($(this).val()) == '') {
			// if($(this).attr('name') === 'email'){
			// 	return;
			// }
			isValid = false;
			$(this).addClass('validError');
		} else {
			$(this).removeClass('validError');
		}
	});
	if(isValid === false) {

		Notify("All Fields are Required", null, null, 'danger');
		return false;
	}
	// Front End Validation End

		if($('#email').val()===""){
			Notify("Email is Required.", null, null, 'danger');
		}
       
		if($('#password').val().length < 6){
			Notify("Password length should be greater then 6",null,null,'danger');
			return false;
		}
	$('#loading').show();
	var shopperData = $('#formId').serialize();

	//Calling Ajax
	$.ajax({
		'url'  :'/admin/shopper/create', 
		'type' :'post',
		'dataType' : 'json',
		'data' : shopperData,
		success : function(response)
		{
		$('#loading').hide();
			if(response.status === true)
			{

				$('#dataModel').modal('hide');
				setTimeout(function(){
					getAllData();
				},1000);
				swal({
					title: 'Done!',
					text: 'Shopper Added Successfully',
					type: 'success',
					timer: 2000,
					showCancelButton: false,
					showConfirmButton: false,
				}).then(
					function () {},
					// handling the promise rejection
					function (dismiss) {
						if (dismiss === 'timer') {
							console.log('I was closed by the timer');
						}
					}
				);

			} else {

				for(var errors=0;response.message.length>0;errors++)
				{
					Notify(response.message[errors].msg, null, null, 'danger');
				}
			}
		},
		error : function(response)
		{
			console.log(response);
		}
	});

}

function updateData() {


	// Front End Validation Start
	var isValid = true;
	$('#formId input[type="text"]').each(function() {

		if ($.trim($(this).val()) == '') {
			isValid = false;
			$(this).addClass('validError');
		} else {
			$(this).removeClass('validError');
		}
	});
	// if(isValid === false) {

	// 	Notify("All Fields are Required", null, null, 'danger');
	// 	return false;
	// }


	$('#mobile').attr('disabled',false);
	$('#email').attr('disabled',false);
		// if($('#email').val()===""){
		// 	$('#email').val('no@email.com');
		// }
	//$('#password').attr('disabled',false);
	

	// if($('#mobile').val() === ""){
	// 	Notify("Mobile Number is Required.", null, null, 'danger');
	// 	return false;
	// }
	// if($('#mobile').val().length != 10){
	// 	Notify("Please enter 10 digit mobile number", null, null, 'danger');
	// 	return false;
	// }
	// if($('#password').val().length < 6){
	// 	Notify("Password length should be greater then 6",null,null,'danger');
	// 	return false;
	// }
	// Front End Validation End
	$('#loading').show();
	
	
	var shopperData = $('#formId').serialize();
    var id = $('#id').val();
	//Calling Ajax
	$.ajax({
		'url'  :'/admin/shopper/update',
		'type' :'post',
		'dataType' : 'json',
		'data' : shopperData+"&id="+id,
		success : function(response)
		{
			$('#loading').hide();
			if(response.status === true)
			{

				$('#dataModel').modal('hide');
				setTimeout(function(){
					getAllData();
				},1000);
				swal({
					title: 'Done!',
					text: 'Shopper Updated Successfully',
					type: 'success',
					timer: 2000,
					showCancelButton: false,
					showConfirmButton: false,
				}).then(
					function () {},
					// handling the promise rejection
					function (dismiss) {
						if (dismiss === 'timer') {
							console.log('I was closed by the timer');
						}
					}
				);

			} else {

				for(var errors=0;response.message.length>0;errors++)
				{
					Notify(response.message[errors].msg, null, null, 'danger');
				}
			}
		},
		error : function(response)
		{

		}
	});

}

getAllData();
function getAllData() {
	//Calling Ajax

	var htm = '';
	$("#example").dataTable().fnDestroy();
	$('#example tbody').html('<tr><td colspan="3" style="margin-left:10px;"><span style="float:right">Please Wait ...</span><img src="/public/img/download.gif" id="loader" style="float:right"></td></tr>');
	$.ajax({
		'url'  :'/admin/shopper/list',
		'type' :'get',
		'dataType' :'json',
		success : function(response)
		{
			for(shopperData=0; shopperData < response.message.length;shopperData++)
			{
				var name = response.message[shopperData].firstName + ' ' + response.message[shopperData].lastName;
				var avat = name.charAt(0);
				var mobile;
				if(response.message[shopperData].mobile == 0){
					mobile = "N.A"
				}else{
					mobile = response.message[shopperData].mobile;
				}

				htm +='<tr>';
				htm +='<td><a class="avatar">'+avat+'</a><h2>'+name+'<span></span></h2></td>';
				htm +='<td>'+response.message[shopperData].email+'</td>';
				htm +='<td>'+mobile+'</td>';
				
				var registerOn = new Date(Date.parse(response.message[shopperData].createdAt))
				var date = new Date(registerOn);
				var day = date.getDate();
				var month = date.getMonth();
				var year = date.getFullYear();
				var newDate = year + '-' +(month+1) + '-'+ day;
				htm +='<td>'+newDate+'</td>';
                htm +='<td class="text-right"><div class="dropdown"><a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><ul class="dropdown-menu pull-right"><li><a onclick="openShopperEditModel('+response.message[shopperData].id+');" title="Edit" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a></li><li><a onclick="deleteData('+response.message[shopperData].id+');" title="Delete" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-trash m-r-5"></i> Delete</a></li></ul></div></td>';
				htm+='</tr>';
			}
			$('#example tbody').html(htm);
		//	$('#example').addClass('datatable');
		//	$('#example').DataTable('destroy');
			//$('#example').DataTable();
			$('#example').DataTable({
				dom: 'Bfrtip',
				buttons: [{
						"extend": 'excel',
						"text": '<span class="glyphicon glyphicon-download">Export To Excel</span>',
						"className": 'btn btn-default btn-xs',
						"filename": 'shopper'
					}


				]
			});
			$('.buttons-excel').addClass('btn-primary');
			$('.buttons-excel').css('float', 'right');
			$('.buttons-excel').css('margin-top', '20px');
			$('.buttons-excel').css('margin-left', '101px');


		},
		error : function(response)
		{
			console.log(response);
		}
	});
}

function openShopperEditModel(id){

			//Calling Ajax
			$.ajax({
				'url'  :'/admin/shopper/detailById',
				'type' :'post',
				'dataType' : 'json',
				'data' : {'id':id},
				success : function(response)
				{

					var mobile;
					if(response.message.mobile == 0){
						mobile = "N.A"
					}else{
						mobile = response.message.mobile;
					}
					        console.log("Success")
							console.log(response);
							$('#firstName').val(response.message.firstName);
							$('#lastName').val(response.message.lastName);
							$('#mobile').val(mobile);
							$('#email').val(response.message.email);
							//$('#oldpassword').val(response.message.password);
							//$('#password').val(response.message.password)
							$("#add_update").html('Update');
							$("#add_update").attr("onclick","updateData()");
							$('h4').text("Update Shopper");

							$('#dataModel').modal('show');
							//$('#mobile').attr('disabled','disabled');
							//$('#password').attr('disabled','disabled');
							// $('#email').attr('disabled','disabled');
							$('#id').val(id);
							console.log("Success")

				},
				error : function(response)
				{

				}
			});
}



function deleteData(id){
		swal({
			title: "Are you sure?",
			text: "You want to Delete the Shopper",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "Yes, Delete it!",
			cancelButtonText: "No, cancel!",
			closeOnConfirm: false,
			closeOnCancel: false
		},
		function(isConfirm) {
			if (isConfirm) {
				$.ajax({
					url:'/admin/shopper/delete',
					type: 'DELETE',
					data: {'id':id},
					dataType :'json',
					success : function(data)
					{
						setTimeout(function(){
							getAllData();
						},3000);
						swal({
							title: 'Deleted!',
							type: 'success',
							timer: 2000,
							showCancelButton: false,
							showConfirmButton: false
						}).then(
							function () {},
							function (dismiss) {
								if (dismiss === 'timer') {
								}
							}
						)


					}
				});
			} else {
				swal({
					title: 'Cancelled!',
					type: 'error',
					timer: 2000,
					showCancelButton: false,
					showConfirmButton: false
				}).then(
					function () {},
					function (dismiss) {
						if (dismiss === 'timer') {
						}
					}
				)
			}

		});
}

// //Clear Model After close
$('#dataModel').on('hide.bs.modal', function(){

	$(this)
	.find("input,textarea")
	.val('')
	.end()
	.find("input[type=checkbox], input[type=radio]")
	.prop("checked", "")
	.end();
	$(".form-group-password").show();

	$("#add_update").html('Save');
	$("#add_update").attr("onclick","submitData()");
	$('h4').text("Add Shopper");

	$('#mobile').attr('disabled',false);
	$('#email').attr('disabled',false);

	$('#formId input[type="text"]').each(function() {

		if ($.trim($(this).val()) == "") {
			$(this).removeClass('validError');
		}
	});

});


