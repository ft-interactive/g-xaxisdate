# xaxisDate

Pre styled and positioned date x-axis for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a date x-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard x-axis.

A centralised axis component for easy maintenance of styles and date formatting accross the full Visual Vocabulary. The axis component also appends the correct script tags for use with the FT Pre-Flight script in Adobe Illustrator.

Will also work with other builds where the axis is called into an svg.


### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Before starting

<b>Note</b> The <b>.range()</b> of the x-axis should be determind in part by the <b>.labelWidth()</b> of the y-axis, so it is advisable to ad your y-axis first. See the secton on positioning at [yaxisLinear](https://github.com/ft-interactive/g-yaxislinear).

<b>Intraday</b> charts that cross the date threshold will display 'dead-time', please use the intraday-axis and see reference (to come)

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

Add the following code to your index.js to append a default x-axis to the .plot object (grey here but is not normally visible). <b>Note</b> that <b>.tickSize()</b> is included and although not vital to create the axis it is important for the size of the tick (see nots in API)

```
let myAxis = gAxis.yaxisLinear;

myXAxis
	.tickSize(currentFrame.rem())

currentFrame.plot()
	.call(myYAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/default.png)

Set the <b>.range()</b> and the <b>.offsett()</b> to the dimensions of the <b>.plot()</b> object to correctly position the axis
```
myXAxis
    .offset(currentFrame.dimension().height)
    .range([0,currentFrame.dimension().width])
    .tickSize(currentFrame.rem())

    currentFrame.plot()
        .call(myXAxis);
```
![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/defined.png)

## API reference

#myAxis<b>.domain([Array])</b> defines the axis domain in the same way as you would when creating a normal d3.scaleTime(). If no <b>.domain()</b> is defined the default is [Jan 01 1970,Jun 01 2017]

#myAxis<b>.range([Array])</b> defines the axis  range in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.range()</b> is defined the default is [0,220])

#myAxis<b>.offset([Number])</b> Defines the distance the x-axis is positioned from the top of its container and also determines what style is applied to the lines. If a<b>.offset()</b> is set at zero then it is assumed that the long tick styling is required, see examples

#myAxis<b>.interval([String])</b> Defines the tick interval on the axis (see examples). By default this is set to "lustrum" meaning every five years. It can be set to:
 * "century" -- every one hundred years
 * "jubilee" -- every fifty years
 * "decade" -- every ten years
 * "lustrum" -- every five years
 * "years" -- every year
 * "quarters" -- every 3 months (Note the label is the month name not Q1, Q2, Q3 etc)
 * "months" -- every month
 * "weeks" -- every week
 * "days" -- every day

 #myAxis<b>.minorAxis([Boolean])</b> Switches the display of the minor axis on or off (see examples). Defailt is true (on). Depending on the <b>.interval</b> setting the minor axis will deiplay tick lines in the following increments
 * "century" -- minor axis ticks show every ten years
 * "jubilee" -- minor axis ticks show every ten years
 * "decade" -- minor axis ticks show years
 * "lustrum" -- minor axis ticks show years
 * "years" -- minor axis ticks show months
 * "quarters" -- minor axis ticks show months
 * "months" -- minor axis ticks show days
 * "weeks" -- minor axis ticks show days
 * "days" -- minor axis ticks show seconds

#myAxis<b>.fullYear([Boolean])</b> Works in conjuction with <b>.interval() </b> when it is set to "years" to force ticks labels to a full year format ( 1995, 1996, 1997 etc) when there is room on wider charts.

#myAxis<b>.tickSize([Number])</b> By default this is set to 10 but generally should be set as:
```
.tickSize(currentFrame.rem())
```
<b>.rem()</b> returns the height of the text in the suntitle in the current frame. Using this to set the <b>.ticksize()</b> keeps them proportional to the current frame stopping ticks being too long on print charts and too short on video. Priestly timelines and some circle timelines use long ticks (see example). <b>Note</b> that the style on long ticks changes automatically when the <b>.offset()</b> is set to zero.

## Examples

### Yearly

From Jan 1 2005 to June 1 2017, with each year labeled and no minor axis

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

From Jan 1 2005 to June 1 2017, with every five years labeled and a minor axis

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

### Monthly

From Jan 1 2017 to June 16 2017, with every month labeled and a minor axis

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

### Daily

From Jun 1 2017 to June 6 2017, with no minor axis

<b>Note</b> This axis is only suitable for single daily values and not hourly values such as a share price. This will result is 'dead-time'. Use to come

```
const myXAxis = xaxisDate();//sets up yAxis
const currentFrame = frame[frameName];

let mindate = new Date(2017,6,1);
let maxdate = new Date(2017,6,15);

myXAxis
	.height(currentFrame.dimension().height)
	.domain([mindate,maxdate])
	.range([0,currentFrame.dimension().width])
	.interval("days")
	.minorAxis(false)
	.rem(currentFrame.rem())

currentFrame.plot()
    .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example04.png)

### Houry-intraday

From Jun 1 2017 to June 6 2017, with no minor axis

<b>Note</b> For use with hourly values such as a share price but not suitable when crossing the date line to another day. This wil result in 'dead-time'. Use to come

```
const myXAxis = xaxisDate();//sets up yAxis
    const currentFrame = frame[frameName];

    let mindate = new Date(2017,6,1,8,30);
    let maxdate = new Date(2017,6,1,15,00);

    myXAxis
      .height(currentFrame.dimension().height)
      .domain([mindate,maxdate])
      .range([0,currentFrame.dimension().width])
      .interval("hours")
      .minorAxis(false)
      .rem(currentFrame.rem())

    currentFrame.plot()
        .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example05.png)

### Long ticks (used on Priestly timelines and circle timelines)

From Jun 1 1730 to Jun 1 2017 with a minor axos. In this case the <b>.offset()</b> is set to zero. The <b>.tickSize()</b> is set to the frame height which is what pushes the labels into the correct position at the bottom of the frame. <b>Note</b> when <b>.offset()</b> is set to zero the minor axis change their style to the default axis style of a dotted line and not the solid 'baseline' style. The 'baseline' style remains on the major ticks.


```
const myXAxis = xaxisDate();//sets up yAxis
        const currentFrame = frame[frameName];

        let mindate = new Date(1730,6,1);
        let maxdate = new Date(2017,6,1);

        myXAxis
          .offset(0)
          .domain([mindate,maxdate])
          .range([0,currentFrame.dimension().width])
          .interval("jubilee")
          .minorAxis(true)
          .tickSize(currentFrame.dimension().height)

        currentFrame.plot()
            .call(myXAxis);
```

![alt tag](https://github.com/ft-interactive/g-xaxisDate/blob/master/images/example06.png)

