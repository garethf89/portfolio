import { SkillsData } from '../SkillsData';

const skills = [
    "Wordpress",
    "PayPal and Woocommerce",
    "CSS3",
    "HTML5",
    "Javascript",
    "PHP",
    "Responsive Design"
]
const elevon = {
    "name": "Elevon World",
    "url": "Elevon",
    "work_class": "work_elevon",
    "desc": "This is a Wordpress based site for a fashion company based in Newcastle. This project invovled work on the Wordpress template using PHP, HTML and JavaScript. It also required integration with a payment system Woocommerce.",
    "cover": "assets/images/home/elevoncover",
    "skills": SkillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/elevonbg.jpg",
    "images": [
        {
            "thumb": "assets/images/thumbs/elevonthumb1.png",
            "image": "assets/images/lightboximages/elevonmain1.jpg"
        },
        {
            "thumb": "assets/images/thumbs/elevonthumb2.png",
            "image": "assets/images/lightboximages/elevonmain2.png"
        },
        {
            "thumb": "assets/images/thumbs/elevonthumb3.png",
            "image": "assets/images/lightboximages/elevonmain3.png"
        },
        {
            "thumb": "assets/images/thumbs/lifestylethumb2.png",
            "image": "assets/images/lightboximages/lifestyle2.png"
        }
    ],
    "links": [
        {
            "title": "Elevon",
            "link": "http://www.elevonworld.com"
        }
    ]
  };

  export default elevon;