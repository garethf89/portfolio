import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "Responsive Design",
    "CSS3",
    "HTML5",
    "Javascript"
]

const anglian = {
    "name": "Anglian Home Improvements",
    "work_class": "work_ahi",
    "url": "Anglian",
    "desc": "This was developed as part of a team to modernise the companies existing website. It invloved creating the site to be an interactive brochure for people wanting to get a quote for home improvements.<br/><br/>This project was completed while working for digital agency THINK.",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/ahibg.jpg",
    "cover": "assets/images/home/ahicover",
    "images": [
        {
            "thumb": "assets/images/thumbs/ahithumb1.jpg",
            "image": "assets/images/lightboximages/ahimain1.jpg"
        },
        {
            "thumb": "assets/images/thumbs/ahithumb2.jpg",
            "image": "assets/images/lightboximages/ahimain2.jpg"
        }, {
            "thumb": "assets/images/thumbs/ahithumb3.jpg",
            "image": "assets/images/lightboximages/ahimain3.jpg"
        }

    ],
    "links": [
        {
            "title": "Anglian Home Improvements",
            "link": "http://www.anglianhome.co.uk/"
        }
    ]
};

export default anglian;