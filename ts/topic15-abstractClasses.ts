abstract class utensils {

    constructor(public spoon: string) {
        this.spoon = spoon;
        console.log(this.spoon);
    }
}

class table extends utensils { }

let teaparty = new table('ken hery');