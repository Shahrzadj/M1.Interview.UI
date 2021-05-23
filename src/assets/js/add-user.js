var addPersonnelModule = {
  getObject: function () {
    var addedPersonnel = {
      name: $("#addName").val(),
      phone: $("#addPhone").val(),
      age: Number($("#addAge").val()),
    };
    return { data: addedPersonnel };
  },
  render: function () {
    $(".add-button-container").append(
      `<button id='add-button' class='add-button btn btn-sm btn-success' type="button" data-toggle="modal" data-target="#addModal">
                    <i class='fa fa-plus fa-xs' aria-hidden='true'></i> Add New Person
                  </button>`
    );
  },
  handleSubmit: function () {
    // let addModule = this;
    // $("#save-button").on("click", function () {
    //   var addedPersonnel = addModule.getObject();
    //   $.ajax({
    //     url: `${config.apiUrl}/gateway/personnel`,
    //     type: "POST",
    //     async: false,
    //     contentType: "application/json; charset=utf-8",
    //     data: JSON.stringify(addedPersonnel.data),
    //     success: function (response) {
    //       $("#addModal").modal("toggle");
    //       console.log(`table`, table);
    //       console.log(`response`, response);
    //       table.row.add(response).draw(false, null);
    //       addModule.clearInputs();
    //     },
    //   });
    // });
  },
  clearInputs: function () {
    $("#addName").val(""), $("#addPhone").val(""), $("#addAge").val("");
  },
  init: function () {
    this.render();
    this.handleSubmit();
  },
};
// $.validator.addMethod('minStrict', function (value, el, param) {
//   return value > param;
// });
$("form[name='addPerson']").submit(function(e) { 
  e.preventDefault();
  // DO WORK
});
$("#save-button").on("click", function (e) {
  e.preventDefault();

  $("form[name='addPerson']").validate();
  console.log( );  // <- T
  if($("form[name='addPerson']").valid()){
    var addedPersonnel = addPersonnelModule.getObject();
    $.ajax({
      url: `${config.apiUrl}/gateway/personnel`,
      type: "POST",
      async: false,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(addedPersonnel.data),
      success: function (response) {
        $("#addModal").modal("toggle");
        console.log(`table`, table);
        console.log(`response`, response);
        table.row.add(response).draw(false, null);
        addPersonnelModule.clearInputs();
      },
    });
  }

});
