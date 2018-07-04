import templateHTML from "../templates/main.html"
import Mustache from "mustache"


const grids = [{
    "id": "grid2",
    "weighting": "inline",
    "photos": [{
            "weighting": "full",
            "heightWeighting": "normal",
            "url": "https://media.guim.co.uk/91c08a87ff1ac5dcec8ecf939e59843b416fd270/60_0_1800_1080/1000.jpg",
            "mobileUrl": "https://media.guim.co.uk/91c08a87ff1ac5dcec8ecf939e59843b416fd270/60_0_1800_1080/500.jpg"
        }
    ],
    "caption": "The group have been underground for 10 days",
    "slot": "#interactive-slot-2"
},
{
    "id": "grid3",
    "weighting": "inline",
    "photos": [{
        "weighting": "full",
        "heightWeighting": "normal",
        "url": "https://media.guim.co.uk/a7bae74f43f907e9efc07b3831f7669ad5a23adc/0_7_6737_4042/1000.jpg",
        "mobileUrl": "https://media.guim.co.uk/a7bae74f43f907e9efc07b3831f7669ad5a23adc/0_7_6737_4042/500.jpg"
    }],
    "caption": "Full-face masks will be needed for a diving-based rescue",
    "slot": "#interactive-slot-3"
}];
        
grids.forEach(grid => {
    try {
        document.querySelector(grid.slot).innerHTML = Mustache.render(templateHTML, grid);
    } catch (err) {
        console.log(grid.slot + " not found");
    }
});