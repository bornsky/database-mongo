var simpledb = require('mongoose-simpledb');

simpledb.init(function (err, db) {
	if (err) return console.error(err);

	db.Kitten.findOne( {'name.first': 'Koda'}, function (err, koda) {
		if(err) return console.error(err);
		console.log(koda);
		koda.name.last = 'Ford';
		koda.save(function (err) {
			if (err) return console.error(err);
			console.log(koda);
		});
	});
});