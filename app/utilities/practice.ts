const isWinner: boolean = true;

const age: number = 15;

const currency : number = 15.25;

const hex : number = 0x322;  // Detects hex

const binary : number = 0b1010  // binary

const username: string = "benny";

const password : string = "123";

const scoreList : number[] = [0, 1, 2]  // 

const nameList : Array<String> = ["benny" , "frida"] // Prefer using the primitive `string` as a type name, rather than the upper-cased `String`.

let x : [string, number, boolean]
x = ["test", 0, true]

const y : unknown = 2

enum Color {
    Red,
    Blue,
    Green
};

let myColor = Color.Blue;
myColor = Color.Red;

let unkown : any = "" // Try to avoid as much as possible
unkown = true;

function whiteSpace () : void {

}
whiteSpace();


function addition ( x: number, y: number) {

    return x + y;
}
addition(2, 2);


function makeFetchCall () : object {

    return JSON;
}
makeFetchCall();

const myObject : {} = {}
const benny : {name : string } = {name : "benny"}

function callbackfunction (func : () => void ) {
    func()
}

callbackfunction(whiteSpace) 

console.log(isWinner, age, currency, hex, binary, username, password, scoreList, nameList, x, y, myColor, unkown)


interface Student {
    firstName: string,
    lastName: string,
    className: string,
    age: number,
    subjects: string[],
    book : {
        title: string,
        author: string,
        pages: number
    },

    printStudentDetails: () => Student
    getFirstLastName: () => string

}

const frida : Student = {
    firstName: "Frida",
    lastName: "Andersson",
    className: "Andersson",
    age: 15,
    subjects: ["Biology", "Math", "Music"],
    book: {
        title: "Mein Kampf",
        author: "Me",
        pages: 1550
    },
    printStudentDetails: function (): Student {
        return this;
    },
    getFirstLastName: function (): string {
        return this.firstName + this.lastName;
    }
}

console.log(frida.book.author)

