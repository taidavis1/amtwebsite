import { faGlobe , faCalendar , faMagnifyingGlass , faChartBar} from "@fortawesome/free-solid-svg-icons";
import { faComment , faObjectGroup } from "@fortawesome/free-regular-svg-icons";

const Data = [
    {
        id: 1,
        name: 'Website Creator',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faGlobe,
    },
    {
        id: 2,
        name: 'Booking System',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faCalendar,
    },
    {
        id: 3,
        name: 'Advertising',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faComment,
    },
    {
        id: 4,
        name: 'SEO Content',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faMagnifyingGlass,
    },
    {
        id: 5,
        name: 'Graphic Design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faObjectGroup,
    },
    {
        id: 6,
        name: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        font: faChartBar,
    },
];

const SwiperData = [
    {
        id: 1,
        img: require('../img/mnail.png'),
        link : 'https://mnail-lashplano.com/'
    },
    {
        id: 2,
        img: require('../img/nicespa.png'),
        link : 'https://nicespa.info/'
    },
    {
        id: 3,
        img: require('../img/nailstech.png'),
        link : 'https://www.nailstech-md.com/'
    },
    {
        id: 4,
        img: require('../img/finestnail.png'),
        link : 'https://finestnail.com/'
    },
    {
        id: 5,
        img: require('../img/salinas.png'),
        link : 'https://salinascellular.com/'
    },
    {
        id: 6,
        img: require('../img/bdhome.png'),
        link : 'https://bdhomegroup.info/'
    }
];

export default {Data , SwiperData};
