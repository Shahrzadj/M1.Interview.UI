var myChart;
var personName;
var showChartModule = {
  fillInputs: function (id, rowNumber) {
    $("#deleteId").val(id);
  },
  handleSubmit: function () {
    $(".showChart-button").on("click", function () {
      $("#askForChartInfo").modal("toggle");
    });
  },
  init: function () {
    this.handleSubmit();
  },
  fillInputs: function (id) {
    var row = table.data().filter((item) => item.id === id)[0];
    $("#currentId").val(row.id);
    personName = row.name;
    document.getElementById("PersonNameForshowChart").innerHTML = row.name;
    document.getElementById("PersonNameForInfo").innerHTML = row.name;

  },
};
$("form[name='getInfo']").submit(function (e) {
  e.preventDefault();
});
$("#showChartWithInfo").on("click", function (e) {
  e.preventDefault();
  $("form[name='getInfo']").validate();
  if ($("form[name='getInfo']").valid()) {
    document.getElementById("loadingMessage").innerHTML = "Loading Data...Please Wait!";
    $('#loadingMessage').show();
    $("#showChartWithInfo").prop('disabled', true);
    $("#myChart").remove(); // this is  <canvas> element
    $("#canvasContainer").append('<canvas id="myChart"><canvas>');
    canvas = document.querySelector("#myChart");
    ctx = canvas.getContext("2d");
    ctx.canvas.width = 400; // resize to parent width
    ctx.canvas.height = 400; // resize to parent height
    var id = $("#currentId").val();
    var month = $("#selectedMonth").val();
    var year = $("#selectedYear").val();

    $.ajax({
      url: `${setting.apiGatewayUrl}/gateway/sales`,
      type: "GET",
      data: {
        id: id,
        month: month,
        year: year
      },
      async: false,
      contentType: "application/json; charset=utf-8",
      success: function (response) {
        $('#loadingMessage').fadeOut("slow");
        $("#showChartWithInfo").prop('disabled', false);
        $("#showChartModal").modal("toggle");
        $("#askForChartInfo").modal("toggle");
        $("#selectedMonth").val("");
        $("#selectedYear").val("");
        document.getElementById("monthForshowChart").innerHTML = response.monthName;
        var ctx = document.getElementById("myChart").getContext("2d");
        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: response.labelset,
            datasets: [
              {
                label: "Sale Amount",
                data: response.dataset,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(a1c181, 0.5)",
                  "rgba(255, 182, 0, 0.5)",
                  "rgba(130, 47, 175, 0.5)",
                  "rgba(42, 157, 143, 0.5)",
                  "rgba(230, 57, 70, 0.5)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 182, 0, 1)",
                  "rgba(130, 47, 175, 1)",
                  "rgba(42, 157, 143, 1)",
                  "rgba(230, 57, 70, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },

            },
            animations: {
              y: {
                easing: 'easeInOutElastic',
                from: (ctx) => {
                  if (ctx.type === 'data') {
                    if (ctx.mode === 'default' && !ctx.dropped) {
                      ctx.dropped = true;
                      return 0;
                    }
                  }
                }
              }
            },
            plugins: {
              legend: {

                labels: {
                  usePointStyle: true,
                },
                tooltip: {
                  usePointStyle: true,
                }
              }
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Days Of The month',
                  font: {
                    family: 'Comic Sans MS',
                    size: 15,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Sales Amount',
                  font: {
                    family: 'Comic Sans MS',
                    size: 15,
                    weight: 'bold',
                    lineHeight: 1.2,
                  },
                }
              }
            }
          },
        });
      },
    });
  }

});
