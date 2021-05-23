
$(function() {
  var table = $("#showPersonnelTable").DataTable(tableSetting.options());

  LoadCRUDModules();
  $("input").attr("autocomplete", "off");
  $("#loading").fadeOut(1000);
  document.title = setting.pageTitle;
});
function LoadCRUDModules(){
  createPersonModule.init();
  editPersonModule.init();
  deletePersonModule.init();
  showChartModule.init();
};
