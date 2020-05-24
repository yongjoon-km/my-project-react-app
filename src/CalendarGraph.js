import React from 'react';


const CalendarGraph = () => {

	const today = new Date();



	return (
		<div>
			<text>{today.getDay()}</text>
			<svg>
			<g transform="translate(0, 0)">
          <rect class="day" width="10" height="10" x="14" y="0" fill="#ebedf0" data-count="0" data-date="2019-05-26"></rect>
          <rect class="day" width="10" height="10" x="14" y="13" fill="#ebedf0" data-count="0" data-date="2019-05-27"></rect>
          <rect class="day" width="10" height="10" x="14" y="26" fill="#ebedf0" data-count="0" data-date="2019-05-28"></rect>
          <rect class="day" width="10" height="10" x="14" y="39" fill="#ebedf0" data-count="0" data-date="2019-05-29"></rect>
          <rect class="day" width="10" height="10" x="14" y="52" fill="#ebedf0" data-count="0" data-date="2019-05-30"></rect>
          <rect class="day" width="10" height="10" x="14" y="65" fill="#ebedf0" data-count="0" data-date="2019-05-31"></rect>
          <rect class="day" width="10" height="10" x="14" y="78" fill="#ebedf0" data-count="0" data-date="2019-06-01"></rect>
      </g>
			<g transform="translate(14, 0)">
          <rect class="day" width="10" height="10" x="13" y="0" fill="#ebedf0" data-count="0" data-date="2019-06-02"></rect>
          <rect class="day" width="10" height="10" x="13" y="13" fill="#ebedf0" data-count="0" data-date="2019-06-03"></rect>
          <rect class="day" width="10" height="10" x="13" y="26" fill="#ebedf0" data-count="0" data-date="2019-06-04"></rect>
          <rect class="day" width="10" height="10" x="13" y="39" fill="#ebedf0" data-count="0" data-date="2019-06-05"></rect>
          <rect class="day" width="10" height="10" x="13" y="52" fill="#ebedf0" data-count="0" data-date="2019-06-06"></rect>
          <rect class="day" width="10" height="10" x="13" y="65" fill="#ebedf0" data-count="0" data-date="2019-06-07"></rect>
          <rect class="day" width="10" height="10" x="13" y="78" fill="#ebedf0" data-count="0" data-date="2019-06-08"></rect>
      </g>
			</svg>
		</div>
	);
}

export default CalendarGraph;