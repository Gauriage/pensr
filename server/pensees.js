Pensees = new Meteor.Collection("pensees");
 
// Seed the movie database with a few Pensees
Meteor.startup(function () {
    if (Pensees.find().count() == 0) {
        Pensees.insert({ title: "Ma pensée du jour", texte: "Que vais-je faire ?" });
        Pensees.insert({ title: "Autre pensée", texte: "What ?" });
        Pensees.insert({ title: "Encore une ...", texte: "Zut!" });
    }
});