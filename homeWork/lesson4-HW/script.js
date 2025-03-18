function Participant(name, email) {
    this.name = name;
    this.email = email;
}
function Event(eventName, eventDate){
    this.eventName = eventName;
    this.eventDate = eventDate;

   this.participants=[];

    this.addParticipant=function(participant){
        if(participant instanceof Participant){
            this.participants.push(participant);
        }

    }

    this.listParticipants=function(){
        // this.participants;
        console.log(this.participants);
    }

    this.findParticipantByEmail=function(email){
        for(key of this.participants){
            if(email===key.email){

            console.log(`The name of the participant is: ${key.name}`)
            }
        }
    }
}

const jack=new Participant("Jack",'jack-sparrow@me.com');
const alice=new Participant("Alice",'alice-sparrow@me.com');
const bob=new Participant("Bob",'bob-sparrow@me.com');

const meeting=new Event("Meeting",'March, 20th');

console.log(meeting);

meeting.addParticipant(jack);
meeting.addParticipant(alice);
meeting.addParticipant(bob);

meeting.listParticipants()

meeting.findParticipantByEmail('bob-sparrow@me.com')