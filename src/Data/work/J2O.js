import { SkillsData } from '../SkillsData';

const skills = [
    "CSS3",
    "HTML5",
    "Javascript",
    "Responsive Design"
]

const j2o = {
    "name": "J2O",
    "url": "J2O",
    "work_class": "work_j2o",
    "desc": "This project was for the J2O Midnight Editions flavours lauched in 2015. The site had 2 new flavours and re-styling to all other pages. A lot of complex CSS animations were used to create the visual effects of the page.<br/><br/>This project was completed while working for digital agency THINK.",
    "cover": "assets/images/home/j2ocover",
    "skills": SkillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/j2obg.jpg",
    "images": [
        {
            "thumb": "assets/images/thumbs/j2othumb1.jpg",
            "image": "assets/images/lightboximages/j2omain1.jpg"
        },
        {
            "thumb": "assets/images/thumbs/j2othumb2.jpg",
            "image": "assets/images/lightboximages/j2omain2.jpg"
        },
        {
            "thumb": "assets/images/thumbs/j2othumb3.jpg",
            "image": "assets/images/lightboximages/j2omain3.jpg"
        }
    ],
    "links": [
        {
            "title": "j2o",
            "link": "http://www.j2o.co.uk"
        }
    ]
};

export default j2o;