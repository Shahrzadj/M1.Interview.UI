let tableSetting = {
  columns: [
    { data: "id", autoWidth: true },
    { data: "name", autoWidth: true },
    { data: "phone", autoWidth: true },
    { data: "age", autoWidth: true },
    {
      data: null,
      render: function (data, meta) {
        return `
            <button  class="btn btn-sm btn-warning edit-button" title="Edit" data-id="${data.id}" data-row=${meta.row} onclick="editPersonModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#editpersonModal">
            <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
            </button>
            <button class="btn btn-sm btn-danger delete-button" title="Delete" data-id="${data.id}" data-row=${meta.row} onclick="deletePersonModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#deletePersonModal">
            <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
            </button>   
            |
            <button class="btn btn-sm btn-success createSale-button" title="Add New Sale" data-id="${data.id}" data-row=${meta.row} onclick="createSaleModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#addSaleModal">
            <i class=" fa fa-plus-square fa-lg" aria-hidden="true"></i>
            </button>  
            <button class="btn btn-sm btn-info showChart-button" title="Show Sales Chart" data-id="${data.id}" data-row=${meta.row} onclick="showChartModule.fillInputs(${data.id},${meta.row})" type="button" data-toggle="modal" data-target="#askForChartInfo">
            <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>
            </button>    
           `;
      },
    },
  ],
  options: function () {
    this.makeTableResponsive();
    return {
      data: this.getPersonnel(),
      aoColumns: this.columns,
      responsive: true,
      autoWidth: true,
      fixedHeader: true,
      oLanguage: {
        sSearchPlaceholder: "Search...",
      },
      lengthMenu: [5, 10, 15],
      buttons: ["copy", "csv", "excel"],
      dom:
        "<'row'<'col-sm-12 col-md-2 add-button-container'><'col-sm-12 col-md-8'f><'col-sm-12 col-md-2'l>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      order: [[0, "desc"]],
    };
  },
  getPersonnel: function () {
    var peronnelList = [];
    $.ajax({
      url: `${setting.apiGatewayUrl}/gateway/personnel`,
      type: "GET",
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        peronnelList = response;
      },
    });
    return peronnelList;
  },
  makeTableResponsive: function () {
    if ($(window).width() > 500) {
      $("#table").addClass("display");
    }
  },
};
