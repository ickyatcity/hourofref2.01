
var endpoint = '/api/charts/data/'
var defaultData = []
var labels = [];



//function testsing(){
//var x = document.getElementById("candidateId").firstChild;
//
//console.log(' I am here', x.nodeValue )
//
//
//}


$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
        labels = data.labels
        defaultData = data.default
        setChart()

    },
    error: function(error_data){
        console.log("error")
        console.log(error_data)
    }
})

    function setChart(){
        var ctx = document.getElementById("myChart");
        var ctx2 = document.getElementById("myChart2");

        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: defaultData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        var myChart = new Chart(ctx2, {
            type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: defaultData,

                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
        });
}
