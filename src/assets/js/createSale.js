var createSaleModule = {
    fillInputs: function (id, rowNumber) {
        $("#deleteId").val(id);

        var row = table.data().filter((user) => user.id === id)[0];
        document.getElementById("selectedPersonName").innerHTML = row.name;
        $("#newSalePersonId").val(id);
    },
    handleSubmit: function () {

    },
    init: function () {
        this.handleSubmit();
    }, clearInputs: function () {
        $("#newSalePersonId").val(""), $("#newSaleAmount").val(""), $("#newSaleYear").val("");
        $("#newSaleMonth").val("");
        $("#newSaleDay").val("");
    },
    getObject: function () {
        var addedSale = {
            personnelId: Number($("#newSalePersonId").val()),
            salesAmount: Number($("#newSaleAmount").val()),
            year: $("#newSaleYear").val(),
            month: $("#newSaleMonth").val(),
            day: $("#newSaleDay").val()
        };
        return { data: addedSale };
    },
};
$("form[name='addSale']").submit(function (e) {
    e.preventDefault();
});
$("#save-sale-button").on("click", function (e) {
    e.preventDefault();
    $("form[name='addSale']").validate();
    if ($("form[name='addSale']").valid()) {
        var addedSale = createSaleModule.getObject();
        console.log(addedSale.data);
        $.ajax({
            url: `${setting.apiGatewayUrl}/gateway/sales`,
            type: "POST",
            async: false,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(addedSale.data),
            success: function (response) {
                $("#addSaleModal").modal("toggle");
                createSaleModule.clearInputs();
            },
        });
    }

});