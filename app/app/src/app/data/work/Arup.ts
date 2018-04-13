import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "Javascript",
    "SASS",
    "HTML5",
    "Responsive Design"
]

const arup = {
    "name": "Arup",
    "url": "Arup",
    "work_class": "work_arup",
    "desc": "This was a large project for a full design and build new website for engineering market leaders Arup. The challenge was matching the ambitions of the client for a new and innovative site with the scale and amount of content they have.<br/><br/>This project was completed while working for digital agency THINK.",
    "cover": "assets/images/home/arupcover",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/arupbg.jpg",
    "images": [
      {
          "thumb": "assets/images/thumbs/arupthumb1.jpg",
          "image": "assets/images/lightboximages/arupmain1.jpg"
      },
        {
            "thumb": "assets/images/thumbs/arupthumb2.jpg",
            "image": "assets/images/lightboximages/arupmain2.jpg"
        },
        {
            "thumb": "assets/images/thumbs/arupthumb3.jpg",
            "image": "assets/images/lightboximages/arupmain3.jpg"
        },
        {
            "thumb": "assets/images/thumbs/arupthumb4.jpg",
            "image": "assets/images/lightboximages/arupmain4.jpg"
        }
    ],
    "links": [
        {
            "title": "Arup",
            "link": "http://www.arup.com"
        }
    ]
}

export default arup;