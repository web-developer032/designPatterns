// MEDIATOR PATTERN WORKS IN A WAY THAT IT WORKS IN MIDDLE FOR A TASK TO BE PERFORMED.

// ----------------------------
// CONSTRUCTOR WAY
// ----------------------------

// function Member(name) {
//     this.name = name;
//     this.chatRoom = null;
// }

// Member.prototype = {
//     send: function (message, toMember) {
//         this.chatRoom.send(message, this, toMember); // CALLING SEND FUNCTION OF THE CHATROOM
//     },
//     recieve: function (message, fromMember) {
//         console.log(`${fromMember.name} to ${this.name}: ${message}`); // CALLING THIS FUNCTION FROM THE CHATROOM
//     },
// };

// function ChatRoom() {
//     this.members = {};
// }

// ChatRoom.prototype = {
//     addMember: function (member) {
//         this.members[member.name] = member;
//         member.chatRoom = this;
//     },
//     send: function (message, fromMember, toMember) {
//         toMember.recieve(message, fromMember);
//     },
// };

// ----------------------------
// CLASS WAY
// ----------------------------
class Member {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }

    send(message, toMember) {
        this.chatRoom.send(message, this, toMember); // CALLING SEND FUNCTION OF THE CHATROOM
    }

    recieve(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`); // CALLING THIS FUNCTION FROM THE CHATROOM
    }
}

class ChatRoom {
    constructor() {
        this.members = {};
    }

    addMember(member) {
        this.members[member.name] = member;
        member.chatRoom = this;
    }
    send(message, fromMember, toMember) {
        toMember.recieve(message, fromMember);
    }
}

// -------------------
// CREATE MEMBERS
// -------------------
const bob = new Member("Bob");
const john = new Member("John");
const tim = new Member("Tim");

// -------------------
// CREATE CHAT
// -------------------
const chat = new ChatRoom();

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hey", john);
john.send("Hey", tim);
