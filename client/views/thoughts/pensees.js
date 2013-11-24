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
            today: tmpl.find("#today").value,
            texte: tmpl.find("#texte").value
        };
 
        // add the pensee to the db
        Pensees.insert(newPensee);
    }
};

Template.main.showMember = function() {
    return Session.get("showMember");
  };