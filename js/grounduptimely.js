let dateTime = new Date();
		console.log('data type of dateTime:', typeof(dateTime));

		let hour = dateTime.getHours();

		let meal = "";

		if (hour < 11) {
			meal = "Breakfast";
		}
		else if (hour < 15) {
			meal = "Lunch";
		}
		else {
			meal = "Dinner";
		}

		let mealLink = '<a class="button" href="' + meal + '.html>' + meal + '</a>';
		console.log(mealLink)