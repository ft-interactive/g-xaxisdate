import * as d3 from 'd3';

export default function() {

	let interval=0


	function axis(parent) {
		
	}

	axis.interval = (d)=>{
		 if(!d) return interval;
        interval = d;
        return axis;
    }

	return axis
};
