exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("events")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("events").insert([
				{ id: 1, eventName: "event 1", eventInfo: "first event" },
				{ id: 2, eventName: "event 2", eventInfo: "second event" },
				{ id: 3, eventName: "event 3", eventInfo: "third event" }
			]);
		});
};
