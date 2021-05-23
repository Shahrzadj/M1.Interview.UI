var editPersonModule = {
  getObject: function () {
    var editedUser = {
      id: Number($("#editId").val()),
      name: $("#editedpersonName").val(),
      phone: $("#editedpersonPhone").val(),
      age: Number($("#editedpersonAge").val()),
    };
    return { data: editedUser };
  },
  fillInputs: function (id) {
    var row = table.data().filter((user) => user.id === id)[0];
    $("#editId").val(row.id);
    $("#editedpersonName").val(row.name);
    $("#editedpersonPhone").val(row.phone);
    $("#editedpersonAge").val(row.age);
  },
  handleSubmit: function () {
  },
  init: function () {
    this.handleSubmit();
  },
};
$("form[name='addPerson']").submit(function(e) { 
  e.preventDefault();
});
$("#update-button").on("click", function (e) {
  e.preventDefault();
  $("form[name='editPerson']").validate();
  if($("form[name='editPerson']").valid()){
    var editedUser = editPersonModule.getObject();
    var id = $(`#editId`).val();
    var btn = $("tr").find(`button.edit-button[data-id='${id}']`)[0];
    var tr = $(btn).closest("tr");
    $.ajax({
      url: `${setting.apiGatewayUrl}/gateway/personnel`,
      type: "PUT",
      async: false,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(editedUser.data),
      success: function (response) {
        table.row(tr).data(response).draw(false, null);
        $("#editpersonModal").modal("toggle");
      },
    });
  }

});