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


var date = new Date()
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate())

$('.datep').datepicker({
    todayBtn: 'linked',
    dateFormat: 'yy-mm-dd',
    autoclose: true,
});
$('#max').datepicker('setDate', today);
date.setDate(date.getDate() + 7);

$('body').on('click', '#submitDateBetween', function() {
    var minD = $('#min').val()
    var maxD = $('#max').val()
    var barId = $('#barId').val()
    console.log(minD, " ", maxD, " ", barId)
    var htm = '';
    $("#example").dataTable().fnDestroy();

    $('#example tbody').html('<tr><td colspan="3" style="margin-left:10px;"><span style="float:right">Please Wait ...</span><img src="/public/img/download.gif" id="loader" style="float:right"></td></tr>');
    if (minD == '' || maxD == '') {
        alert('Please select both dates.')
    } else {
        $.ajax({
            'url': '/admin/scoreManagement/ajax',
            'type': 'get',
            'data': { minD: minD, maxD: maxD },
            'dataType': 'json',
            success: function(response) {
                for (barData = 0; barData < response.message.length; barData++) {
                    htm += '<tr>';
                    htm += '<td>' + response.message[barData].barName + '</td>';
                    htm += '<td>' + response.message[barData].firstName + '" "' + response.message[barData].lastName + '</td>';
                    htm += '<td>' + response.message[barData].param1 + '</td>';
                    htm += '<td>' + response.message[barData].param2 + '</td>';
                    htm += '<td>' + response.message[barData].param3 + '</td>';
                    htm += '<td>' + response.message[barData].param4 + '</td>';
                    response.message[barData].param5 += response.message[barData].param6 + response.message[barData].param7 + response.message[barData].param8 + response.message[barData].param9
                    htm += '<td>' + response.message[barData].param5 + '</td>';

                    htm += '<td>' + response.message[barData].averageScore + '</td>';
                    htm += '<td>' + moment(response.message[barData].createdAt).format('YYYY-MM-DD') + '</td>';
                    htm += '<td>' + moment(response.message[barData].updatedAt).format('YYYY-MM-DD') + '</td>';

                    htm += '<td class="text-right"><div class="dropdown"><a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><ul class="dropdown-menu pull-right"> <li><a onclick="openViewScoreEditModel(' + response.message[barData].scoreId + ');" title="Edit" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit Score</a></li></ul></div></td>';
                    htm += '</tr>';
                }

                $('#example tbody').html(htm);

                //$("#example").dataTable();
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
            error: function(response) {

            }

        })

    }

    return false
})




function openViewScoreEditModel(scoreId) {
    $.ajax({
        'url': '/admin/bar/score/detailById',
        'type': 'post',
        'dataType': 'json',
        'data': { 'scoreId': scoreId },

        success: function(response) {
            $('#param1').val(response.message.param1);
            $('#param2').val(response.message.param2);
            $('#param3').val(response.message.param3);
            $('#param4').val(response.message.param4);
            $('#param5').val(response.message.param5);
            $('#param6').val(response.message.param6);
            $('#param7').val(response.message.param7);
            $('#param8').val(response.message.param8);
            $('#param9').val(response.message.param9);
            $('#comments').val(response.message.comments);

            $("#add_update").html('Update');
            var scoreId = response.message.scoreId;
            var barId = response.message.barId;
            $("#add_update").attr("onclick", "updateScoreData(" + scoreId + "," + barId + ")");
            $('h4').text("Bar Score");

            $('#dataModel').modal('show');

            console.log("Success")

        },
        error: function(response) {

        }
    })
}

function updateScoreData(scoreId, barId) {



    var scoreData = $('#formId').serialize();
    if ($(".parameter").each(function() {
            if ($(this).val() === "") {
                $(this).val("0")
            }
        }))
        if ($('#param1').val() < 0 || $('#param1').val() > 5000) {
            Notify("Values should be in range", null, null, 'danger');
            return false;
        }
    if ($('#param2').val() < 0 || $('#param2').val() > 50) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    if ($('#param3').val() < 0 || $('#param3').val() > 100) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    if ($('#param4').val() < 0 || $('#param4').val() > 100) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    if ($('#param5').val() < 0 || $('#param5').val() > 100) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    if ($('#param8').val() < 0 || $('#param8').val() > 50) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    if ($('#param9').val() < 0 || $('#param9').val() > 50) {
        Notify("Values should be in range", null, null, 'danger');
        return false;
    }
    //  $('#loading').show();

    //Calling Ajax
    $.ajax({
        'url': '/admin/scoreUpdate',
        'type': 'post',
        'dataType': 'json',
        'data': scoreData + "&scoreId=" + scoreId,
        success: function(response) {
            $('#loading').hide();
            if (response.status === true) {

                $('#dataModel').modal('hide');
                setTimeout(function() {
                    window.location.href = "/admin/scores";

                }, 1000);
                swal({
                    title: 'Done!',
                    text: 'Score Updated Successfully',
                    type: 'success',
                    timer: 2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                }).then(
                    function() {},
                    // handling the promise rejection
                    function(dismiss) {
                        if (dismiss === 'timer') {
                            console.log('I was closed by the timer');
                        }
                    }
                );

            } else {

                for (var errors = 0; response.message.length > 0; errors++) {
                    Notify(response.message[errors].msg, null, null, 'danger');
                }
            }
        },
        error: function(response) {

        }
    });


}