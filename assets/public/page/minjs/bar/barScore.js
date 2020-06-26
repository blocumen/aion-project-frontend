getAllData();
function getAllData() {
	//Calling Ajax

	var htm = '';
	$("#example").dataTable().fnDestroy();
	$('#example tbody').html('<tr><td colspan="3" style="margin-left:10px;"><span style="float:right">Please Wait ...</span><img src="/public/img/download.gif" id="loader" style="float:right"></td></tr>');
	$.ajax({
		'url'  :'/bar/barScore/list',
		'type' :'get',
		'dataType' :'json',
		success : function(response)
		{
            console.log(response)
			for(shopperData=0; shopperData < response.message.length;shopperData++)
			{
                htm +='<tr>';
				htm +='<td>'+response.message[shopperData].param1+'</td>';
				htm +='<td>'+response.message[shopperData].param2+'</td>';
				htm +='<td>'+response.message[shopperData].param3+'</td>';
				htm +='<td>'+response.message[shopperData].param4+'</td>';
				response.message[shopperData].param5 +=response.message[shopperData].param6+response.message[shopperData].param7+response.message[shopperData].param8+response.message[shopperData].param9
				htm +='<td>'+response.message[shopperData].param5+'</td>';
				htm +='<td>'+response.message[shopperData].averageScore+'</td>';
                htm +='<td>'+moment(response.message[shopperData].createdAt).format( 'YYYY-MM-DD')+'</td>';
				htm +='<td>'+moment(response.message[shopperData].updatedAt).format( 'YYYY-MM-DD')+'</td>';
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
						"filename": 'score'
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