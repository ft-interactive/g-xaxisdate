# xaxisDate

Pre styled and positioned date x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a date x-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard x-axis.

Will also work with other builds where the axis is called into an svg.


### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Before starting

<b>Note</b> The <b>.range()</b> of the x-axis should be determind in part by the <b>.labelWidth()</b> of the y-axis, so it is advisable to ad your y-axis first. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).

## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="https://rawgit.com/ft-interactive/g-xaxisdate/master/build/g-xaxisdate.js"> </script>

```
### NPM install
Not yet deployed

## Getting started

<b>Note</b> All examples shown are from the web frame style

Add the following code to your index.js to append a default y-axis to the .plot object (grey here but is not normally visible). <b>Note</b> that <b>.rem()</b> is included and although not vital to create the axis is important for the size of the tick (see nots in API)

```
let myAxis = gAxis.yaxisLinear;
currentFrame.plot()
	.rem(currentFrame.rem())
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

#myAxis<b>.interval([String])</b> Defines the tick interval on the axis (see examples). By default this is set to "lustrum" meaning every five years. It can be set to:
 * "decade" -- every ten years
 * "lustrum" -- every five years
 * "years" -- every year
 * "quarters" -- every 3 months (Note the label is the month name not Q1, Q2, Q3 etc)
 * "months" -- every month
 * "weeks" -- every week
 * "days" -- every day

 #myAxis<b>.minorAxis([Boolean])</b> Switches the display of the minor axis on or off (see examples). Defailt is treu (on) Depending on the <b>.interval</b> setting the minor axis will deiplay tick lines in the following increments
  * "decade" -- minor axis ticks show years
 * "lustrum" -- minor axis ticks show years
 * "years" -- minor axis ticks show months
 * "quarters" -- minor axis ticks show months
 * "months" -- minor axis ticks show days
 * "weeks" -- minor axis ticks show days
 * "days" -- minor axis ticks show seconds

#myAxis<b>.rem([Number])</b> Easily overlooked but important as it is used to keep the size of the ticks proportional to each frame style. It is the text height of the subtitle e.g. For web frame the text height is 18pt whilst on the print frame the text height is 9.6pt. The size of the ticks are calculated as a factor of <b>.rem</b> and so kept relative to the labels stopping them being disproprtionally large or small

## Examples

### Every year

Defined date range from Jan 1 2005 to June 1 2017, with each year labeled and no minot axis

```
const myXAxis = xaxisDate();//sets up yAxis
const currentFrame = frame[frameName];

let mindate = new Date(2005,1,1);
let maxdate = new Date(2017,6,1);

myXAxis
	.height(currentFrame.dimension().height)
	.domain([mindate,maxdate])
	.range([0,currentFrame.dimension().width])
	.interval("years")
	.minorAxis(false)

currentFrame.plot()
    .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example01.png)

### Every five years

Defined date range from Jan 1 2005 to June 1 2017, with every five years labeled and a minot axis

```
const myXAxis = xaxisDate();//sets up yAxis
const currentFrame = frame[frameName];

let mindate = new Date(2005,1,1);
let maxdate = new Date(2017,6,1);

myXAxis
	.height(currentFrame.dimension().height)
	.domain([mindate,maxdate])
	.range([0,currentFrame.dimension().width])
	.interval("lustrum")
	.minorAxis(true)
	.rem(currentFrame.rem())

currentFrame.plot()
    .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example02.png)

Defined date range from Jan 1 2017 to June 16 2017, with every month labeled and a minot axis

```
const myXAxis = xaxisDate();//sets up yAxis
const currentFrame = frame[frameName];

let mindate = new Date(2017,1,1);
let maxdate = new Date(2017,6,16);

myXAxis
	.height(currentFrame.dimension().height)
	.domain([mindate,maxdate])
	.range([0,currentFrame.dimension().width])
	.interval("months")
	.minorAxis(true)
	.rem(currentFrame.rem())

currentFrame.plot()
    .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example03.png)

Defined date range from Jun 1 2017 to June 6 2017, with every day labeled and a minot axis

```
const myXAxis = xaxisDate();//sets up yAxis
const currentFrame = frame[frameName];

let mindate = new Date(2017,6,1);
let maxdate = new Date(2017,6,6);

myXAxis
	.height(currentFrame.dimension().height)
	.domain([mindate,maxdate])
	.range([0,currentFrame.dimension().width])
	.interval("days")
	.minorAxis(true)
	.rem(currentFrame.rem())

currentFrame.plot()
    .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example04.png)