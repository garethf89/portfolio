import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faBriefcase from '@fortawesome/fontawesome-free-solid/faBriefcase';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faMobile from '@fortawesome/fontawesome-free-solid/faMobile';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

export const Icons = () => {
    fontawesome.library.add(brands, faDownload, faBriefcase, faCog, faMobile, faEnvelope);
}
