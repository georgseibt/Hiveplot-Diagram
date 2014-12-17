Hiveplot-Diagram
================
# Getting started
Before getting started the following libraries and documents have to be included on your website:
* D3.min.js
* jquery-1.11.1.js
* colorGenerator.js
* hiveplot.js
* hiveplot.css

# Your First Chart
First of all you add a `<div>` tag with an ID to your website. The `<div>`is the place where the graphic will be placed. The ID will be given to the hiveplot library, so it knows where to draw the chart.
You can also add a second `<div>`tag for the tooltip. The second `<div>` tag is optional but if you want to show the tooltips as static text it is required.
In the next step you add the following javascript code in your website. You can do that directly in the html page by writing the code between two `<script>` tags  or you write an own .js file 
and include this file on the website.

The code should contain the following lines of code:

```javascript
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
var axis_config = [
    { 'axis': 'from', 'sort': axis1Sort, 'order': axis1Order },
    { 'axis': 'to', 'sort': axis2Sort, 'order': axis2Order },
    { 'axis': 'time', 'sort': axis3Sort, 'order': axis3Order }
];
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
```

## Mandatory Attributes
<table>
	<tr>
		<th>Attribute</th>
		<th>Description></th>
	</tr>
	<tr>
		<td>data</td>
		<td> contains all connections which should be displayed in the hive plot. The structure of data is an array with several objects as the following:
			<br />{
			<br />axis1: name of the first axis (if the links are directed, the axis where the links start)
			<br />axis1NodeLabel: name of the node which lies on the first axis
			<br />axis2: name of the second axis (if the links are directed, the axis where the links end)
			<br />axis2NodeLabel: name of the node which lies on the second axis
			<br />value: strength of the link
			<br />}
			<br /><br />possible values: any in the above described format
		</td>
	</tr>
		<tr>
		<td>elem</td>
		<td> is the id of a 'div' tag in which the hive plot should be drawn
			<br /><br />possible values: any valid id of a 'div' tag
		</td>
	</tr>
</table>

## Optional Attributes
<table>
	<tr>
		<th>Attribute</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>tooltipElem</td>
		<td>is the id of a 'div' where the tooltip should appear. If the tooltip should be movable or no tooltip should be shown, the element can remain empty
			<br /><br />default: null
			<br />possible values: any valid id of a 'div' or null
		</td>
	</tr>
	<tr>
		<td>colorcode</td>
		<td>defines if the nodes should be drawn in black-white or with colors
			<br /><br />default: 'black-white'
			<br />possible values: ['black-white', 'colored']
		</td>
	</tr>
	<tr>
		<td>nodesColorSchema</td>
		<td>is a color which is used to generate a colorgradient based on this color
			<br /><br />default: 'blue'
			<br />possible values: any valid color
		</td>
	</tr>
	<tr>
		<td>linksColorSchema</td>
		<td>is an array of information about the colors which should be used to draw the links. The intensity of the links should change depending on the strength of the link. The array has the format [startColor, endColor, numberOfNuances]
			<br /><br />default: ['#FF0000', '#FFD700', 10]
			<br />possible values: any valid color and any valid number
		</td>
	</tr>
	<tr>
		<td>axisConfig</td>
		<td>is an array of objects. Each object defines how the nodes on the axis should be sorted. Each object has the following structure:
			<br />{   
			<br />	  axis:   name of the axis
			<br />    sort:   defines according to which criteria the nodes should be sorted.
			<br />    order:  defines if the nodes should be ordered ascending or descending
			<br />}
			<br /><br />default: if no axisConfig is passed, all nodes on each axis are sorted by the label in ascending order
			<br />possible values:    for axis: any axis which is also listed in data 
			<br />                    for sort: ['label', 'value', 'numberOfLinks']
			<br />                    for order: [true, false] true means ascending, false means descending
		</td>
	</tr>
	<tr>
		<td>nodes</td>
		<td>defines a list of all nodes. If a list with nodes is passed it has to have the following structure:
			<br />{   
			<br />	  axis:   name of the axis on which the node lies
			<br />    label:  name of the node
			<br />}
			<br /><br />default: null
			<br />possible values: any list of object with the above described structure
		</td>
	</tr>
	<tr>
		<td>linkMin</td>
		<td>the links are colored between a color spectrum (linkColorSchema). linkMin defines the lower boundary of this spectrum. It is usually calculated in the library with the given data, but if you wish to define the lower limit manually, you can do so here.
			<br /><br />default: value is calculated in the library from the given data
            <br />possible values: any number
		</td>
	</tr>
	<tr>
		<td>linkMax</td>
		<td>the links are colored between a color spectrum (linkColorSchema). linkMax defines the upper boundary of this spectrum. It is usually calculated in the library with the given data, but if you wish to define the upper limit manually, you can do so here.
			<br /><br />default: value is calculated in the library from the given data
            <br />possible values: any number
		</td>
	</tr>
	<tr>
		<td>tooltipSetting</td>
		<td>defines if tooltips should be shown in case of a mouseoverevent
			<br /><br />default: 'static'
			<br />possible values: ['none', 'movable', 'static']
		</td>
	</tr>
	<tr>
		<td>sortingTooltip</td>
		<td>defines by which criteria the connections in the tooltip should be sorted
			<br /><br />default: 'source'
			<br />possible values: ['label', 'data']
		</td>
	</tr>
	<tr>
		<td>sortingOrderTooltip</td>
		<td>defines if the nodes should be ordered ascending or descending
			<br /><br />default: true
			<br />possible values [true, false] true means ascending, false means descending
		</td>
	</tr>
	<tr>
		<td>tooltipOrientation</td>
		<td>defines if the text in the tooltip should be horizontal or vertical
			<br /><br />default: 'horizontal'
			<br />possible values: ['horizontal', 'vertical']
		</td>
	</tr>
	<tr>
		<td>onClickNode</td>
		<td>defines a function which should be executed on a click event on a node
			<br /><br />default: null
			<br />possible values: any function
		</td>
	</tr>
	<tr>
		<td>onClickLink</td>
		<td>defines a function which should be executed on a click event on a link
			<br /><br />default: null
			<br />possible values: any function
		</td>
	</tr>
</table>
