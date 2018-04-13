import { Skills } from '../../data/skills';
import { Skill } from '../../classes/skill';

const skillsData: Skill[] = Skills;

const skills = [
    "Swift"
]

const apps = {
    "name": "Apps and Other Projects",
    "url": "Apps",
    "work_class": "work_mini",
    "desc": "The iOS Beacons App is an experimental app to track the users that are in each room. This was used for meeting rooms in the office but the concept can apply to much more ineresting scenarios.<br/><br/>This used MongoDB to store the real time users in each room. It was built in Swift as a native iOS app.",
    "skills": skillsData.filter(x => skills.indexOf(x.name) > -1),
    "bg": "assets/images/backgrounds/otherbg.jpg",
    "cover": "assets/images/home/othercover",
    "images": [
        {
            "image": "assets/images/lightboximages/beacons0.jpg",
            "thumb": "assets/images/thumbs/beaconthumb1.jpg"
        },
        {
            "image": "assets/images/lightboximages/beacons1.jpg",
            "thumb": "assets/images/thumbs/beaconthumb1.png"
        },
        {
            "image": "assets/images/lightboximages/beacons2.jpg",
            "thumb": "assets/images/thumbs/beaconsthumb2.jpg"
        },
        {
            "image": "assets/images/lightboximages/beacons3.jpg",
            "thumb": "assets/images/thumbs/beaconsthumb3.jpg"
        }
    ]
}
export default apps;