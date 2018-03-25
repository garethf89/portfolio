import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "Responsive Design",
    "CSS3",
    "HTML5",
    "Javascript"
]

const happiesthome = {
    "name": "Happiest Homepage",
    "url": "HappiestHome",
    "work_class": "work_hhomepage",
    "desc": "Happiest's latest homepage was designed mobile first so it would be compatible with all devices. The aim of the page is to give the user enough information about the company to convince them to sign up to the main web app. <br /> <br /> This project was developed using HTML5 and CSS3 with the modal popups and other functionality using JQuery.",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/hphomebg.jpg",
    "cover": "assets/images/home/hpcover",
    "images": [
        {
            "thumb": "assets/images/thumbs/hphomethumb1.png",
            "image": "assets/images/lightboximages/hphome1.png"
        },
        {
            "thumb": "assets/images/thumbs/hphomethumb2.png",
            "image": "assets/images/lightboximages/hphome2.png"
        }, {
            "thumb": "assets/images/thumbs/hphomethumb3.png",
            "image": "assets/images/lightboximages/hphome3.png"
        }

    ],
    "links": [
        {
            "title": "Happiest",
            "link": "http://www.happie.st"
        }
    ],
};
export default happiesthome;