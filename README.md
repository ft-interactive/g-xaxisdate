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
![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/default.png)

Set the <b>.range()</b> and the <b>.height()</b> to the dimensions of the <b>.plot()</b> object to correctly position the axis
```
myXAxis
    .height(currentFrame.dimension().height)
    .range([0,currentFrame.dimension().width])

    currentFrame.plot()
        .call(myXAxis);
```
![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/defined.png)

## API reference

#myAxis<b>.domain([Array])</b> defines the axis domain in the same way as you would when creating a normal d3.scaleTime(). If no <b>.domain()</b> is defined the default is [Jan 01 1970,Jun 01 2017]

#myAxis<b>.range([Array])</b> defines the axis  range in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.range()</b> is defined the default is [0,220])

#myAxis<b>.height([Number])</b> Defines the distance the x-axis is positioned from the top of its container

#myAxis<b>.interval([String])</b> Defines the tick interval on the axis. By default this is set to "lustrum" meaning every five years. It can be set to:
 * "decade" -- every ten years
 * "lustrum" -- every five years
 * "years" -- every year
 * "quarters" -- every 3 months (Not the label is the month name not Q1, Q2, Q3 etc)
 * "months" -- every month
 * "weeks" -- every week
 * "days" -- every day
