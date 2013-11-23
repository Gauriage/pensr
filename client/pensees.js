Pensees = new Meteor.Collection("pensees");

Template.penseesTemplate.pensees = function () {
	return Pensees.find()
};

Template.penseeForm.events = {
    'submit': function (e, tmpl) {
        // Don't postback
        e.preventDefault();
 
        // create the new pensee
        var newPensee = {
            title: tmpl.find("#title").value,
            texte: tmpl.find("#texte").value
        };
 
        // add the movie to the db
        Pensees.insert(newPensee);
    }
};