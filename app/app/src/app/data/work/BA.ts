import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "CSS3",
    "HTML5",
    "Javascript"
]

const ba = {
    "name": "British Airways",
    "url": "BA",
    "work_class": "work_ba",
    "desc": "While working for web agency Leighton, I contributed to British Airways projects. This involved working directly with a team based in London and Newcastle to complete various projects.<br/><br/>The most high profile project i worked on was the front end interface to allow Saved Payment Cards on the payment page, giving the functnality re-use previously saved cards and save new ones. <br/><br/> I also worked on a project to improve the functionality of the recent searches feature. This used the browsers localStorage and a database to allow the user to replay a previous search by clicking a button.",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "cover": "assets/images/home/bacover",
    "bg": "assets/images/backgrounds/babg.jpg",
    "images": [
        {
            "thumb": "assets/images/thumbs/bathumb1.png",
            "image": "assets/images/lightboximages/bamain1.jpg"
        },
        {
            "thumb": "assets/images/thumbs/bathumb3.png",
            "image": "assets/images/lightboximages/bamain3.png"
        }
    ],
    "links": [
        {
            "title": "Leighton",
            "link": "http://www.leighton.com"
        }
    ]
};

export default ba;