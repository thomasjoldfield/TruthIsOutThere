var $tbody = document.querySelector("tbody");
var $button = document.querySelector("#btnWhen");
var $input = document.querySelector("#inputWhen");

var UFOData = dataSet

function renderTable() {
    $tbody.innerHTML - "";

    for (var i =0; i < UFOData.length; i++){
        var $row = $tbody.insertRow(i)

        $cell = $row.insertCell(0);
        $cell.innerText = UFOData[i].datetime;
        $cell = $row.insertCell(1);
        $cell.innerText = UFOData[i].city;
        $cell = $row.insertCell(2);
        $cell.innerText = UFOData[i].state;
        $cell = $row.insertCell(3);
        $cell.innerText = UFOData[i].country;
        $cell = $row.insertCell(4);
        $cell.innerText = UFOData[i].shape;
        $cell = $row.insertCell(5);
        $cell.innerText = UFOData[i].durationMinutes;     
        $cell = $row.insertCell(6);
        $cell.innerText = UFOData[i].comment;       
    }
}

$button.addEventListener("click", handleSearchButtonClick);

function handleSearchButtonClick(){
    var filterDate = $input.value;

    UFOData = data.filter(function(observation){
        var originalDate = dataSet.datetime;
        return originalDate === filterDate;
    });
    renderTable();
};

renderTable();