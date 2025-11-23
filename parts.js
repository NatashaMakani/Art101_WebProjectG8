class BodyPart {
    constructor(id = 0, name = null, icon = "images/null.png", partclass = null) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.partclass = partclass;
    }
};

let partLibrary = {
    undefined: [
        {
            id: 0,
            name: null,
            icon: "images/null.png",
            partclass: null
        }
    ],
    "ears": [
        {
            id: 101,
            name: "draco",
            icon: "images/ears1.png",
            partclass: "ears"
        },
        {
            id: 102,
            name: "bnuuy",
            icon: "images/ears2.png",
            partclass: "ears"

        },
        {
            id: 103,
            name: "heehaw",
            icon: "images/ears3.png",
            partclass: "ears"

        },
        {
            id: 104,
            name: "face tube",
            icon: "images/ears4.png",
            partclass: "ears"
        },
    ],
    "eyes": [
        {
            id: 201,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eyes"
        },
        {
            id: 202,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eyes"
        },
        {
            id: 203,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eyes"
        },
        {
            id: 204,
            name: "tbd",
            icon: "images/null.png",
            partclass: "eyes"
        },
    ],
    "mouth": [

    ],
    "tail": [

    ],
    "leg": [

    ]
};
