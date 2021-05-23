var deletePersonModule = {
  fillInputs: function (id, rowNumber) {
    $("#deleteId").val(id);
    var row = table.data().filter((user) => user.id === id)[0];
    document.getElementById("selectedPersonName").innerHTML = row.name;
    console.log(row);
  },
  handleSubmit: function () {
    $("#delete-button").on("click", function () {
      var id = $("#deleteId").val();
      var btn = $("tr").find(`button.delete-button[data-id='${id}']`)[0];
      var tr = $(btn).closest("tr");
      $.ajax({
        url: `${setting.apiGatewayUrl}/gateway/personnel/${id}`,
        type: "DELETE",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (response) {
          $("#deletePersonModal").modal("toggle");
          table.row(tr).remove().draw(false, null);
        },
      });
    });
  },
  init: function () {
    this.handleSubmit();
  },
};
