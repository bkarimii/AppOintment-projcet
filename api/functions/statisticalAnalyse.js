/* eslint-disable no-console */
const timeExtractor = (dateTimeString) => {
	// This function extract time and date and return it in an array
	// Input format should be like this: "2024-10-13T06:20:00Z"
	// eslint-disable-next-line no-console
	const splittedDateTime = dateTimeString.split("T");
	// eslint-disable-next-line no-console
	if (splittedDateTime.length === 2) {
		const time = splittedDateTime[1].split("Z")[0];
		const date = splittedDateTime[0];
		return [date, time];
	} else {
		return "IncorrectFormat";
	}
};

// const travelDetailTwo = [
//   {
//     arrivalTime: "2024-10-13T10:00:00Z",
//     details: [
//       {
//         city: "Sheffield",
//         firstDepartureTime: "2024-10-13T03:55:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "21135s",
//         staticDuration: "21135s",
//       },
//       {
//         city: "Manchester",
//         firstDepartureTime: "2024-10-13T03:10:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "24116s",
//         staticDuration: "24116s",
//       },
//       {
//         city: "Norwich",
//         firstDepartureTime: "2024-10-13T08:00:00Z",
//         lastArrivalTime: "2024-10-13T09:39:00Z",
//         duration: "6163s",
//         staticDuration: "6163s",
//       },
//       {
//         city: "Liverpool",
//         firstDepartureTime: "2024-10-13T01:20:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "30377s",
//         staticDuration: "30377s",
//       },
//       {
//         city: "Newcastle",
//         firstDepartureTime: "2024-10-13T00:09:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "34788s",
//         staticDuration: "34788s",
//       },
//       {
//         city: "Cardiff",
//         firstDepartureTime: "2024-10-13T03:45:00Z",
//         lastArrivalTime: "2024-10-13T09:48:00Z",
//         duration: "22639s",
//         staticDuration: "22639s",
//       },
//       {
//         city: "Oxford",
//         firstDepartureTime: "2024-10-13T06:20:00Z",
//         lastArrivalTime: "2024-10-13T09:48:00Z",
//         duration: "12640s",
//         staticDuration: "12640s",
//       },
//     ],
//   },
//   {
//     arrivalTime: "2024-10-13T10:15:00Z",
//     details: [
//       {
//         city: "Sheffield",
//         firstDepartureTime: "2024-10-13T03:55:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "21135s",
//         staticDuration: "21135s",
//       },
//       {
//         city: "Manchester",
//         firstDepartureTime: "2024-10-13T04:40:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "19796s",
//         staticDuration: "19796s",
//       },
//       {
//         city: "Norwich",
//         firstDepartureTime: "2024-10-13T08:00:00Z",
//         lastArrivalTime: "2024-10-13T09:39:00Z",
//         duration: "6163s",
//         staticDuration: "6163s",
//       },
//       {
//         city: "Liverpool",
//         firstDepartureTime: "2024-10-13T01:20:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "30377s",
//         staticDuration: "30377s",
//       },
//       {
//         city: "Newcastle",
//         firstDepartureTime: "2024-10-13T00:09:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "34788s",
//         staticDuration: "34788s",
//       },
//       {
//         city: "Cardiff",
//         firstDepartureTime: "2024-10-13T05:05:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "18448s",
//         staticDuration: "18448s",
//       },
//       {
//         city: "Oxford",
//         firstDepartureTime: "2024-10-13T07:18:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "9892s",
//         staticDuration: "9892s",
//       },
//     ],
//   },
//   {
//     arrivalTime: "2024-10-13T10:30:00Z",
//     details: [
//       {
//         city: "Sheffield",
//         firstDepartureTime: "2024-10-13T03:55:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "21135s",
//         staticDuration: "21135s",
//       },
//       {
//         city: "Manchester",
//         firstDepartureTime: "2024-10-13T04:40:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "19796s",
//         staticDuration: "19796s",
//       },
//       {
//         city: "Norwich",
//         firstDepartureTime: "2024-10-13T08:00:00Z",
//         lastArrivalTime: "2024-10-13T09:39:00Z",
//         duration: "6163s",
//         staticDuration: "6163s",
//       },
//       {
//         city: "Liverpool",
//         firstDepartureTime: "2024-10-13T01:20:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "30377s",
//         staticDuration: "30377s",
//       },
//       {
//         city: "Newcastle",
//         firstDepartureTime: "2024-10-13T00:09:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "34788s",
//         staticDuration: "34788s",
//       },
//       {
//         city: "Cardiff",
//         firstDepartureTime: "2024-10-13T05:05:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "18448s",
//         staticDuration: "18448s",
//       },
//       {
//         city: "Oxford",
//         firstDepartureTime: "2024-10-13T07:18:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "9892s",
//         staticDuration: "9892s",
//       },
//     ],
//   },
//   {
//     arrivalTime: "2024-10-13T10:45:00Z",
//     details: [
//       {
//         city: "Sheffield",
//         firstDepartureTime: "2024-10-13T03:55:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "21135s",
//         staticDuration: "21135s",
//       },
//       {
//         city: "Manchester",
//         firstDepartureTime: "2024-10-13T04:40:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "19796s",
//         staticDuration: "19796s",
//       },
//       {
//         city: "Norwich",
//         firstDepartureTime: "2024-10-13T09:00:00Z",
//         lastArrivalTime: "2024-10-13T10:38:00Z",
//         duration: "6103s",
//         staticDuration: "6103s",
//       },
//       {
//         city: "Liverpool",
//         firstDepartureTime: "2024-10-13T01:20:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "30377s",
//         staticDuration: "30377s",
//       },
//       {
//         city: "Newcastle",
//         firstDepartureTime: "2024-10-13T00:09:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "34788s",
//         staticDuration: "34788s",
//       },
//       {
//         city: "Cardiff",
//         firstDepartureTime: "2024-10-13T05:05:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "18448s",
//         staticDuration: "18448s",
//       },
//       {
//         city: "Oxford",
//         firstDepartureTime: "2024-10-13T07:18:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "9892s",
//         staticDuration: "9892s",
//       },
//     ],
//   },
//   {
//     arrivalTime: "2024-10-13T11:00:00Z",
//     details: [
//       {
//         city: "Sheffield",
//         firstDepartureTime: "2024-10-13T05:45:00Z",
//         lastArrivalTime: "2024-10-13T10:48:00Z",
//         duration: "18606s",
//         staticDuration: "18606s",
//       },
//       {
//         city: "Manchester",
//         firstDepartureTime: "2024-10-13T04:40:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "19796s",
//         staticDuration: "19796s",
//       },
//       {
//         city: "Norwich",
//         firstDepartureTime: "2024-10-13T09:00:00Z",
//         lastArrivalTime: "2024-10-13T10:38:00Z",
//         duration: "6103s",
//         staticDuration: "6103s",
//       },
//       {
//         city: "Liverpool",
//         firstDepartureTime: "2024-10-13T01:20:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "30377s",
//         staticDuration: "30377s",
//       },
//       {
//         city: "Newcastle",
//         firstDepartureTime: "2024-10-13T00:09:00Z",
//         lastArrivalTime: "2024-10-13T09:40:00Z",
//         duration: "34788s",
//         staticDuration: "34788s",
//       },
//       {
//         city: "Cardiff",
//         firstDepartureTime: "2024-10-13T05:05:00Z",
//         lastArrivalTime: "2024-10-13T09:58:00Z",
//         duration: "18448s",
//         staticDuration: "18448s",
//       },
//       {
//         city: "Oxford",
//         firstDepartureTime: "2024-10-13T07:48:00Z",
//         lastArrivalTime: "2024-10-13T10:48:00Z",
//         duration: "11083s",
//         staticDuration: "11083s",
//       },
//     ],
//   },
// ];

// convert time to minutes for mathmatical operation
function timeToMinutes(time) {
	if (!time) {
		// eslint-disable-next-line no-console
		return 0;
	} else {
		const [hours, minutes, seconds] = time.split(":").map(Number);
		// eslint-disable-next-line no-console
		return hours * 60 + minutes + seconds / 60;
	}
}

function processTravelInfo(array) {
	const meetingTime = "2024-10-13T10:00:00Z";
	const analys = [];
	const bigArray = [];

	// Iterate through the array param
	for (const item of array) {
		for (const detail of item.details) {
			// The difference between meeeting time and arrival time [waiting time in the train station]
			const difference = Math.floor(
				(new Date(meetingTime) - new Date(detail.lastArrivalTime)) / 1000,
			);
			// console.log(difference,"<---Difference")
			const tripDuration = Number(detail.duration.split("s")[0]);
			// Total of the time spent on this journey , travel time+ waiting time
			const totalSpentTimeInMinutes = Math.floor(
				(tripDuration + difference) / 60,
			);
			const totalSpentTimeInHours =
				Math.round((totalSpentTimeInMinutes / 60) * 1000) / 1000;

			// A quick check if a traveler has to depart a day before for furthur consideration
			const durationInDays =
				new Date(timeExtractor(detail.lastArrivalTime)[0]) -
				new Date(timeExtractor(detail.firstDepartureTime)[0]);

			//adding each user trip information as Object to the analyse array
			analys.push({
				city: detail.city,
				spentTimeInMinutes: totalSpentTimeInMinutes,
				spentTimeInHour: totalSpentTimeInHours,
				departureTime: timeExtractor(detail.firstDepartureTime)[1],
				arrivalTime: timeExtractor(detail.lastArrivalTime)[1],
				departureDate: timeExtractor(detail.firstDepartureTime)[0],
				arrivalDate: timeExtractor(detail.lastArrivalTime)[0],
				durationInDays: durationInDays,
			});
		}
		bigArray.push({ meetingTime: item.arrivalTime, analys });
	}

	return bigArray;
}

// This function does the statistical analysis on the user travel information we get back from processTravelInfo
function statistics(array) {
	const difficultTravels = []; // Array to hold users info who needs to travel a day before
	const tooLongTravel = []; // Array to hold travels longer than 8 hours
	const travelStatsByMeeting = []; // Array to hold statistics grouped by meeting time

	for (const object of array) {
		let [
			maxTravelTime,
			minTravelTime,
			totalTravelTime,
			earliestArrival,
			latestArrival,
			earliestDeparture,
			latestDeparture,
		] = [0, Infinity, 0, "23:59:59", "00:00:00", "23:59:59", "00:00:00"];

		const arrivalTimesInMinutes = [];
		let countOfTraveler = 0;

		for (const element of object.analys) {
			totalTravelTime += element.spentTimeInMinutes;
			countOfTraveler++;

			// Track difficult travels (arriving a day earlier)
			if (element.durationInDays > 0) {
				difficultTravels.push({ meetingTime: object.meetingTime, element });
			}

			// Track too long travels (longer than 8 hours)
			if (element.durationInDays === 0 && element.spentTimeInHour > 10) {
				tooLongTravel.push({ meetingTime: object.meetingTime, element });
			}

			// Finding the max and min travel times
			if (element.spentTimeInMinutes > maxTravelTime) {
				maxTravelTime = element.spentTimeInMinutes;
			}
			if (element.spentTimeInMinutes < minTravelTime) {
				minTravelTime = element.spentTimeInMinutes;
			}

			// Earliest and latest arrival times
			if (element.arrivalTime < earliestArrival) {
				earliestArrival = element.arrivalTime;
			}
			if (element.arrivalTime > latestArrival) {
				latestArrival = element.arrivalTime;
			}

			// Earliest and latest departure times
			if (element.departureTime < earliestDeparture) {
				earliestDeparture = element.departureTime;
			}
			if (element.departureTime > latestDeparture) {
				latestDeparture = element.departureTime;
			}

			// Add arrival times in minutes for median calculation
			arrivalTimesInMinutes.push(timeToMinutes(element.arrivalTime));
		}

		// Calculate average travel time in minutes
		const averageTravelTime = totalTravelTime / countOfTraveler;

		// Calculate median arrival time
		const medianTravelTime = calculateMedian(arrivalTimesInMinutes);

		// Push statistics for the current meeting time
		travelStatsByMeeting.push({
			meetingTime: object.meetingTime,
			maxTravelTime: maxTravelTime / 60, // Convert to hours
			minTravelTime: minTravelTime / 60, // Convert to hours
			averageTravelTime: averageTravelTime / 60, // Convert to hours
			earliestArrival,
			latestArrival,
			earliestDeparture,
			latestDeparture,
			medianArrivalTime: minutesToTime(medianTravelTime),
			difficultTravels,
			tooLongTravel,
		});
	}

	return travelStatsByMeeting;
}

// Helper function to calculate median
function calculateMedian(arr) {
	if (arr.length === 0) return 0;
	const sorted = arr.slice().sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	return sorted.length % 2 !== 0
		? sorted[mid]
		: (sorted[mid - 1] + sorted[mid]) / 2;
}

function minutesToTime(minutes) {
	const hours = Math.floor(minutes / 60);
	const mins = Math.floor(minutes % 60);
	const secs = Math.round((minutes % 1) * 60);
	return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
		2,
		"0",
	)}:${String(secs).padStart(2, "0")}`;
}

export { statistics, processTravelInfo };
