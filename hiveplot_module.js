// JavaScript source code
var data = [
    { axis1: "from", axis1NodeLabel: "Augsburg", axis2: "to", axis2NodeLabel: "Bremen", value: 5 },
    { axis1: "from", axis1NodeLabel: "Augsburg", axis2: "to", axis2NodeLabel: "Chemnitz", value: 6 },
    { axis1: "from", axis1NodeLabel: "Bremen", axis2: "to", axis2NodeLabel: "Augsburg", value: 2 },
    { axis1: "from", axis1NodeLabel: "Bremen", axis2: "to", axis2NodeLabel: "Hamburg", value: 1 },
    { axis1: "from", axis1NodeLabel: "Chemnitz", axis2: "to", axis2NodeLabel: "Bremen", value: 1 },
    { axis1: "from", axis1NodeLabel: "München", axis2: "to", axis2NodeLabel: "Augsburg", value: 1 },
    { axis1: "to", axis1NodeLabel: "Augsburg", axis2: "time", axis2NodeLabel: "Monday", value: 1 },
    { axis1: "to", axis1NodeLabel: "München", axis2: "time", axis2NodeLabel: "Monday", value: 5 },
    { axis1: "to", axis1NodeLabel: "Hamburg", axis2: "time", axis2NodeLabel: "Wednesday", value: 1 },
    { axis1: "to", axis1NodeLabel: "Hamburg", axis2: "time", axis2NodeLabel: "Friday", value: 1 },
    { axis1: "from", axis1NodeLabel: "Augsburg", axis2: "time", axis2NodeLabel: "Wednesday", value: 3 }
];

var elem = "c1",
    tooltipElem = "tooltipDIV",
    colors = null,
    colorcode = 'black-white',    //has to be flexible scope.panel.colorcode
    sortingTooltip = 'data',
    sortingOrderTooltip = true,
    tooltipSetting = 'none',
    tooltipOrientation = 'horizontal',
    axisConfig = [
        { 'axis': 'from', 'sort': 'value', 'order': true},   //possible values for sort [label, value, numberOfLinks]
        { 'axis': 'to', 'sort': 'value', 'order': true },     //possible values for order [true, false] true means ascending, false means descending
        { 'axis': 'time', 'sort': 'value', 'order': true }
    ];

function getValues() {
    colorcode = document.getElementById('colorcode').options[document.getElementById('colorcode').selectedIndex].value,
    sortingTooltip = document.getElementById('sortingTooltip').options[document.getElementById('sortingTooltip').selectedIndex].value,
    sortingOrderTooltip = JSON.parse(document.getElementById('sortingOrderTooltip').options[document.getElementById('sortingOrderTooltip').selectedIndex].value),
    tooltipSetting = document.getElementById('tooltipSetting').options[document.getElementById('tooltipSetting').selectedIndex].value,
    tooltipOrientation = document.getElementById('tooltipOrientation').options[document.getElementById('tooltipOrientation').selectedIndex].value;

    var axis1Sort = document.getElementById('axis1Sort').options[document.getElementById('axis1Sort').selectedIndex].value,
        axis1Order = JSON.parse(document.getElementById('axis1Order').options[document.getElementById('axis1Order').selectedIndex].value),
        axis2Sort = document.getElementById('axis2Sort').options[document.getElementById('axis2Sort').selectedIndex].value,
        axis2Order = JSON.parse(document.getElementById('axis2Order').options[document.getElementById('axis2Order').selectedIndex].value),
        axis3Sort = document.getElementById('axis3Sort').options[document.getElementById('axis3Sort').selectedIndex].value,
        axis3Order = JSON.parse(document.getElementById('axis3Order').options[document.getElementById('axis3Order').selectedIndex].value);
        
    axisConfig = [
        { 'axis': 'from', 'sort': axis1Sort, 'order': axis1Order },   //possible values for sort [label, value, numberOfLinks]
        { 'axis': 'to', 'sort': axis2Sort, 'order': axis2Order },     //possible values for order [true, false] true means ascending, false means descending
        { 'axis': 'time', 'sort': axis3Sort, 'order': axis3Order }
    ];
    draw();
}

function draw() {
    document.getElementById('c1').innerHTML = '';

    new Hiveplot.Chart({
        //Mandatory
        "plotElem": elem,
        "data": data,
        //Optional
        "tooltipElem": tooltipElem,
        "colorcode": colorcode,
        "nodesColorSchema": "red",
        "linksColorSchema": ["#FFD700", "#FF0000", 10],
        "axisConfig": axisConfig,
        "nodes": null,
        "sortingTooltip": sortingTooltip,
        "sortingOrderTooltip": sortingOrderTooltip,
        "tooltipSetting": tooltipSetting,
        "tooltipOrientation": tooltipOrientation,
        "onClickNode": null,
        "onClickLink": null
    });
}
getValues();