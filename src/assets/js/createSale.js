var createSaleModule = {
    fillInputs: function (id, rowNumber) {
        $("#deleteId").val(id);
        var row = table.data().filter((user) => user.id === id)[0];
        document.getElementById("selectedPersonName").innerHTML = row.name;
    },
    handleSubmit: function () {

    },
    init: function () {
        this.handleSubmit();
    },
};
$("form[name='addSale']").submit(function(e) { 
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