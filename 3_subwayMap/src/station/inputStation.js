import errorStationName from "./errorStationName.js";
import printStationList from "./printStationList.js";
import deleteStationName from "./deleteStationName.js";

function addStationName($stationNames, $stationName) {
  if ($stationNames === null) {
    $stationNames = [];
  }
  $stationNames.push($stationName);
  localStorage.setItem('station', JSON.stringify($stationNames));
}

export default function inputStationName() {
  const $stationNameInput = document.querySelector('#station-name-input');
  const $stationAddBtn = document.querySelector('#station-add-button');
  
  $stationAddBtn.addEventListener('click', () => {
    let $stationNames = JSON.parse(localStorage.getItem('station'));
    let $stationName = $stationNameInput.value;

    if(!(errorStationName($stationNames, $stationName))) {
      addStationName($stationNames, $stationName);
      // localStorage.clear();
    }
    printStationList();
    deleteStationName();
  })
}
