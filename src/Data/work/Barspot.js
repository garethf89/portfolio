import { SkillsData } from '../SkillsData';

const skills = [
    "Wordpress",
    "SASS",
    "CSS3",
    "HTML5",
    "Javascript",
    "PHP",
    "Responsive Design"
]
const barspot  ={
        "name": "Barspot",
        "url": "Barspot",
        "work_class": "work_barspot",
        "desc": "This is a Wordpress site developed with a custom Wordpress theme from scratch. The biggest challenge of the website was the balance between performance and the high-res images needed to showcase the designs of this new creative agency.",
        "cover": "assets/images/home/barspotcover",
        "skills": SkillsData.filter(x => skills.indexOf(x.name) > -1),
        "bg": "assets/images/backgrounds/barspotbg.jpg",
        "images": [
            {
                "thumb": "assets/images/thumbs/bsthumb1.jpg",
                "image": "assets/images/lightboximages/bsmain1.jpg"
            },
            {
                "thumb": "assets/images/thumbs/bsthumb2.jpg",
                "image": "assets/images/lightboximages/bsmain2.jpg"
            },
            {
                "thumb": "assets/images/thumbs/bsthumb3.jpg",
                "image": "assets/images/lightboximages/bsmain3.jpg"
            }
        ],
        "links": [
            {
                "title": "Barspot",
                "link": "http://www.barspot.co.uk"
            }
        ]
    };

    export default barspot;