Pensees = new Meteor.Collection("pensees");
 
// Seed the movie database with a few Pensees
Meteor.startup(function () {
    if (Pensees.find().count() == 0) {
        Pensees.insert({ today: "", texte: "Que vais-je faire ?" });
        Pensees.insert({ today: "", texte: "What ?" });
        Pensees.insert({ today: "", texte: "Zut!" });
    }
});