import * as d3 from 'd3';

export default function() {
    let mindate = new Date(1970,1,1);
    let maxdate = new Date(2017,6,1);
    let scale = d3.scaleTime()
        .domain([mindate,maxdate])
        .range([0,220]);
    let offset = 0;
    let interval ="lustrum";
    let minorAxis = true;
    let rem=10;
    let tickSize = 0;

    
    function axis(parent) {

        const xAxis =d3.axisBottom()
            .tickSize(rem*0.75)
            .ticks(getTicks(interval))
            .tickFormat(tickFormat(interval))
            .scale(scale)

        const xMinor=d3.axisBottom()
            .tickSize(rem*.3)
            .ticks(getTicksMinor(interval))
            .tickFormat("")
            .scale(scale)

        const xLabel = parent.append("g")
            .attr("class","axis xAxis")
            .call(xAxis)

        if (tickSize>rem) {
            
        }
        xLabel.attr("transform","translate(0,"+(offset)+")");

        if (minorAxis) {
            const xLabelMinor = parent.append("g")
            .attr("class","axis baseline")
            .call(xMinor)
            
            xLabelMinor.attr("transform","translate(0,"+(offset)+")");
        }

        let ticks = xLabel.selectAll(".tick");
        ticks.each(function (d) {
            d3.select(this)
            .classed("baseline",true);
        })

    }

    function getTicks(interval) {
        console.log()
        return {
            "centuary":d3.timeYear.every(100),
            "jubilee":d3.timeYear.every(50),
            "decade":d3.timeYear.every(10),
            "lustrum":d3.timeYear.every(5),
            "years":d3.timeYear.every(1),
            "quarters":d3.timeMonth.every(3),
            "months":d3.timeMonth.every(1),
            "weeks":d3.timeWeek.every(1),
            "days":d3.timeDay.every(1),
            "hours":d3.timeHour.every(1)
        }[interval]
    }
    function getTicksMinor(interval) {
        return {
            "centuary":d3.timeYear.every(10),
            "jubilee":d3.timeYear.every(10),
            "decade":d3.timeYear.every(1),
            "lustrum":d3.timeYear.every(1),
            "years":d3.timeMonth.every(1),
            "quarters":d3.timeMonth.every(1),
            "months":d3.timeDay.every(1),
            "weeks":d3.timeDay.every(1),
            "days":d3.timeHour.every(1),
            "hours":d3.timeMinute.every(1)
        }[interval]
    }

    function tickFormat(interval) {
        return {
            "decade":d3.timeFormat("%y"),
            "lustrum":d3.timeFormat("%y"),
            "years":d3.timeFormat("%y"),
            "quarters":d3.timeFormat("%b"),
            "months":d3.timeFormat("%b"),
            "weeks":d3.timeFormat("%b"),
            "days":d3.timeFormat("%d"),
            "hours":d3.timeFormat("%I"+":00")
        }[interval]
    }

    axis.scale = (d)=>{
        scale = d;
        return axis;
    }
    axis.domain = (d)=>{
        scale.domain(d);
        return axis;
    };
    axis.range = (d)=>{
        scale.range(d);
        return axis;
    };
    axis.offset = (d)=>{
        offset = d;
        return axis;
    }
    axis.interval = (d)=>{
        interval = d;
        return axis;
    }
    axis.rem = (d)=>{
        if(!d) return rem;
        rem = d;
        return axis;
    }
    axis.minorAxis = (d)=>{
        minorAxis = d;
        return axis;
    }
    axis.tickSize = (d)=>{
        tickSize = d;
        return axis;
    }
    return axis
};
