var createPersonModule = {
  getObject: function () {
    var addedPersonnel = {
      name: $("#newPersonName").val(),
      phone: $("#newPersonPhone").val(),
      age: Number($("#newPersonAge").val()),
    };
    return { data: addedPersonnel };
  },
  render: function () {
    $(".add-button-container").append(
      `<button id='add-button' class='add-button btn btn-sm btn-success' type="button" data-toggle="modal" data-target="#addPerson">
                    <i class='fa fa-plus fa-xs' aria-hidden='true'></i> Add New Person
                  </button>`
    );
  },
  handleSubmit: function () {
    
  },
  clearInputs: function () {
    $("#newPersonName").val(""), $("#newPersonPhone").val(""), $("#newPersonAge").val("");
  },
  init: function () {
    this.render();
    this.handleSubmit();
  },
};
$("form[name='addPerson']").submit(function(e) { 
  e.preventDefault();
});
$("#save-button").on("click", function (e) {
  e.preventDefault();
  $("form[name='addPerson']").validate();
  if($("form[name='addPerson']").valid()){
    var addedPersonnel = createPersonModule.getObject();
    $.ajax({
      url: `${setting.apiGatewayUrl}/gateway/personnel`,
      type: "POST",
      async: false,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(addedPersonnel.data),
      success: function (response) {
        $("#addPerson").modal("toggle");
        table.row.add(response).draw(false, null);
        createPersonModule.clearInputs();
      },
    });
  }

});
