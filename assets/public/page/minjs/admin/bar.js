function addModel() {
    $('#dataModel').modal('show');
}

function submitData() {
    console.log("Submit bar data")
        // Front End Validation Start
    var isValid = true;
    $('#formId input[type="text"]').each(function() {

        if ($.trim($(this).val()) == '') {
            // if($(this).attr('name') === 'email' ){
            // 	return;
            // }
            isValid = false;
            $(this).addClass('validError');
        } else {
            $(this).removeClass('validError');
        }
    });
    if (isValid === false) {

        Notify("All Fields are Required", null, null, 'danger');
        return false;
    }
    if ($('#email').val() === "") {
        Notify("Email is Required.", null, null, 'danger');
    }

    if ($('#password').val().length < 6) {
        Notify("Password length should be greater then 6", null, null, 'danger');
        return false;
    }
    // Front End Validation End




    $('#loading').show();
    var barData = $('#formId').serialize();

    //Calling Ajax
    $.ajax({
        'url': '/admin/bar/create',
        'type': 'post',
        'dataType': 'json',
        'data': barData,
        success: function(response) {
            $('#loading').hide();
            if (response.status === true) {

                $('#dataModel').modal('hide');
                setTimeout(function() {
                    getAllData();
                }, 1000);
                swal({
                    title: 'Done!',
                    text: 'Bar Added Successfully',
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
    // Front End Validation End
    $('#loading').show();
    $('#mobile').attr('disabled', false);
    $('#email').attr('disabled', false);
    // if($('#email').val()===""){
    // 	$('#email').val('no@email.com');
    // }

    var barData = $('#formId').serialize();
    var barId = $('#barId').val();
    //Calling Ajax
    $.ajax({
        'url': '/admin/bar/update',
        'type': 'post',
        'dataType': 'json',
        'data': barData + "&barId=" + barId,
        success: function(response) {
            $('#loading').hide();
            if (response.status === true) {

                $('#dataModel').modal('hide');
                setTimeout(function() {
                    getAllData();
                }, 1000);
                swal({
                    title: 'Done!',
                    text: 'Bar Updated Successfully',
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

getAllData();

function getAllData() {


    //Calling Ajax

    var htm = '';
    $("#example").dataTable().fnDestroy();
    $('#example tbody').html('<tr><td colspan="3" style="margin-left:10px;"><span style="float:right">Please Wait ...</span><img src="/public/img/download.gif" id="loader" style="float:right"></td></tr>');
    $.ajax({
        'url': '/admin/bar/list',
        'type': 'get',
        'dataType': 'json',
        success: function(response) {
            console.log(response);
            for (barData = 0; barData < response.message.length; barData++) {
                //var name = response.message[barData].firstName + ' ' + response.message[barData].lastName;

                var avat = name.charAt(0);
                var mobile
                console.log(name)

                htm += '<tr>';
                htm += '<td><a class="avatar">' + avat + '</a><h2>' + response.message[barData].barName + '<span></span></h2></td>';
                htm += '<td>' + response.message[barData].email + '</td>';
                if (response.message[barData].mobile == 0) {
                    mobile = "N.A"
                } else {
                    mobile = response.message[barData].mobile
                }
                htm += '<td>' + mobile + '</td>';

                var registerOn = new Date(Date.parse(response.message[barData].createdAt))
                var date = new Date(registerOn);
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                var newDate = year + '-' + (month + 1) + '-' + day;
                htm += '<td>' + newDate + '</td>';
                var averageScore = 0;
                if (!response.message[barData].averageScore) {
                    averageScore = 0
                } else {
                    averageScore = response.message[barData].averageScore
                }

                htm += '<td>' + averageScore + '</td>';
                htm += '<td class="text-right"><div class="dropdown"><a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a><ul class="dropdown-menu pull-right"><li><a onclick="openAddImagesModelMain(' + response.message[barData].barId + ');" title="Edit" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Add Images</a></li><li><a onclick="openBarEditModel(' + response.message[barData].barId + ');" title="Edit" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-pencil m-r-5"></i> Edit</a></li><li><a href="/admin/bar/viewScore/' + response.message[barData].barId + '/' + response.message[barData].barName + '"><i class="fa fa-eye m-r-5"></i> View Score</a></li><li><a onclick="deleteData(' + response.message[barData].barId + ');" title="Delete" data-toggle="modal" data-target="#edit_leave"><i class="fa fa-trash m-r-5"></i> Delete</a></li></ul></div></td>';
                htm += '</tr>';
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
                        "filename": 'bar'
                    }


                ]
            });
            $('.buttons-excel').addClass('btn-primary');
            $('.buttons-excel').css('float', 'right');
            $('.buttons-excel').css('margin-top', '20px');
            $('.buttons-excel').css('margin-left', '101px');


        },
        error: function(response) {
            console.log(response);
        }
    });
}

function showProductImagePreview(input) {
    if (input.files && input.files[0]) {
        var filerdr = new FileReader();
        filerdr.onload = function(e) {
            $('#productLogo').attr('src', e.target.result);
            $('#baseImage').val(e.target.result);
        }
        filerdr.readAsDataURL(input.files[0]);
    }
}

function updateImageData() {

    // Front End Validation Start
    var isValid = true;
    $('#loading').show();
    var baseImage = $('#baseImage').val();

    var barId = $('#barId').val();
    var fData = $('#formIDS').serialize()

    //Calling Ajax
    $.ajax({
        'url': '/admin/bar/updateImage',
        'type': 'post',
        'dataType': 'json',
        'data': fData + "&barId=" + barId + "&logo=" + encodeURIComponent(baseImage),

        success: function(response) {

            $('#loading').hide();
            if (response.status === true) {
                // $('#dataModel1').modal('hide');
                setTimeout(function() {
                    openAddImagesModel(barId);
                }, 1000);
                swal({
                    title: 'Done!',
                    text: 'Image Updated Successfully',
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

function showImages(data) {
    var imageData = data.message;
    var htm = '';
    imageData.forEach(element => {
        htm += '<div class="col-lg-3 col-md-4 col-sm-6">'
        htm += '<button type="button" id="close" aria-label="Close" onClick="deleteImage(' + element.imageId + ');" <span aria-hidden="true">&times;</span> </button>'
        htm += '<div class="card-box">'
        htm += '<img src="/public/img/' + element.imageName + '" class="img-fluid img-responsive max-h" width="200px" height="200px">'
        htm += '</div>'
        htm += '</div>'
    });
    $("#imagesAll").html(htm);;

}

function openAddImagesModelMain(barId) {
    $('#dataModel1').modal('show');
    openAddImagesModel(barId);

}

function openAddImagesModel(barId) {
    $.ajax({
        'url': '/admin/bar/images',
        'type': 'post',
        'dataType': 'json',
        'data': { 'barId': barId },
        success: function(response) {
            console.log("12345")
            $("#add_update2").html('Update Images');
            $("#add_update2").attr("onclick", "updateImageData()");
            $('#barId').val(barId);
            console.log("Success")
            console.log(response)
            showImages(response);
        },
        error: function(error) {


        }
    })
}

function openBarEditModel(barId) {

    //Calling Ajax
    $.ajax({
        'url': '/admin/bar/detailById',
        'type': 'post',
        'dataType': 'json',
        'data': { 'barId': barId },
        success: function(response) {
            console.log(response)
            var mobile;
            if (response.message.mobile == 0) {
                mobile = "N.A"
            } else {
                mobile = response.message.mobile
            }

            $('#barName').val(response.message.barName);
            $('#mobile').val(mobile);
            $('#email').val(response.message.email);
            $('#oldemail').val(response.message.email);
            $('#address').val(response.message.address);
            //$('#password').val(response.user.password);
            $("#add_update").html('Update');
            $("#add_update").attr("onclick", "updateData()");
            $('h4').text("Update Bar");
            $('#dataModel').modal('show');
            //$('#mobile').attr('disabled','disabled');
            // $('#email').attr('disabled','disabled');
            $('#barId').val(barId);
            console.log("Success")

        },
        error: function(response) {

        }
    });
}

function deleteImage(imageId) {
    swal({
            title: "Are you sure?",
            text: "You want to Delete the Bar",
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
                    url: '/admin/image/delete',
                    type: 'DELETE',
                    data: { 'imageId': imageId },
                    dataType: 'json',
                    success: function(data) {
                        var barId = $('#barId').val();
                        console.log(barId)
                        setTimeout(function() {

                            openAddImagesModel(barId)
                        }, 3000);
                        swal({
                            title: 'Deleted!',
                            type: 'success',
                            timer: 2000,
                            showCancelButton: false,
                            showConfirmButton: false
                        }).then(
                            function() {},
                            function(dismiss) {
                                if (dismiss === 'timer') {}
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
                    function() {},
                    function(dismiss) {
                        if (dismiss === 'timer') {}
                    }
                )
            }

        });
}

function deleteData(barId) {
    swal({
            title: "Are you sure?",
            text: "You want to Delete the Bar",
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
                    url: '/admin/bar/delete',
                    type: 'DELETE',
                    data: { 'barId': barId },
                    dataType: 'json',
                    success: function(data) {
                        setTimeout(function() {
                            getAllData();
                        }, 3000);
                        swal({
                            title: 'Deleted!',
                            type: 'success',
                            timer: 2000,
                            showCancelButton: false,
                            showConfirmButton: false
                        }).then(
                            function() {},
                            function(dismiss) {
                                if (dismiss === 'timer') {}
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
                    function() {},
                    function(dismiss) {
                        if (dismiss === 'timer') {}
                    }
                )
            }

        });
}

// //Clear Model After close
$('#dataModel').on('hide.bs.modal', function() {

    $(this)
        .find("input,textarea")
        .val('')
        .end()
        .find("input[type=checkbox], input[type=radio]")
        .prop("checked", "")
        .end();
    $(".form-group-password").show();

    $("#add_update").html('Save');
    $("#add_update").attr("onclick", "submitData()");
    $('h4').text("Add Bar");

    $('#mobile').attr('disabled', false);
    $('#email').attr('disabled', false);

    $('#formId input[type="text"]').each(function() {

        if ($.trim($(this).val()) == "") {
            $(this).removeClass('validError');
        }
    });

});