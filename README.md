# xaxisDate

Pre styled and positioned date x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a date x-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard x-axis.

Will also work with other builds where the axis is called into an svg.


### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="https://rawgit.com/ft-interactive/g-xaxisdate/master/build/g-xaxisdate.js"> </script>

```
### NPM install
Not yet deployed

## Getting started

<b>Note</b> The <b>.range()</b> of the x-axis is determind in part by the <b>.labelWidth()</b> of the y-axis, so it is advisable to ad your y-axis first. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).

Add the following code to your index.js to append a default y-axis to the .plot object (grey here but is not normally visible)

```
let myAxis = gAxis.yaxisLinear;
currentFrame.plot()
	.call(myYAxis);
```
![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/default.png)
