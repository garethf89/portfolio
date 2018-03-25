import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "CSS3",
    "HTML5",
    "Javascript",
    "PHP",
    "PostgreSQL"
]

const happiest = {
    "name": "Happiest Application",
    "url": "Happiest",
    "work_class": "work_happ",
    "desc": "Happiest was a social network that allows users to connect with businesses and gain rewards for the products they buy. This complex RESTful site was built as a single-page app with client side Javascript and server side PHP/Postgres.<br/><br/> Most of the technology was developed in-house however I did get some exposure to JS libraries such as Handlebars templating and Underscore. ",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/hpbg.jpg",
    "cover": "assets/images/home/happcover",
    "images": [
        {
            "thumb": "assets/images/thumbs/hpthumb1.png",
            "image": "assets/images/lightboximages/hp2.png"
        },
        {
            "thumb": "assets/images/thumbs/hpthumb2.png",
            "image": "assets/images/lightboximages/hp2.png"
        }, {
            "thumb": "assets/images/thumbs/hpthumb3.png",
            "image": "assets/images/lightboximages/hp3.png"
        }

    ]
};

export default happiest;