import './index.scss';
import JaneStreet from '../../assets/img/Jane_Street_logo.png';
import ChipSoft from '../../assets/img/ChipSoft_logo.png';
import ElNino from '../../assets/img/El_Nino_Logo.png';

const Partners = () => {
    const partnersData = [
        {
            name: <h3><strong>JaneStreet</strong></h3>,
            logo: JaneStreet,
            url: "https://www.janestreet.com/",
            description: 
                "Jane Street is a quantitative trading firm with offices worldwide.\n" +
                "We hire smart, humble people who love to solve problems, build systems, and test theories.\n" + 
                "Will our next great idea come from you?",
            linkText: "Official website: https://www.janestreet.com/",
        },
        {
            name: <h3><strong>El Niño</strong></h3>,
            logo: ElNino,
            url: "https://elnino.tech/",
            description:
                "At El Niño, we build digital products that matter: from complex web platforms and mobile apps" + 
                "to cutting-edge AI applications for clients across the Netherlands, Belgium, Spain and Germany.\n\n" +
                "As a Dutch digital development agency based in Enschede and The Hague, we work at the" + 
                "intersection of software engineering, system integrations, and artificial intelligence." + 
                "We work on multiple projects: no two projects are the same, and we take care of the full" + 
                "stack (from architecture to deployment).\n\n" +
                "We're looking for curious, driven developers and AI engineers who want to grow fast," + 
                "work across multiple domains, and stay ahead of the curve in tech. Whether you're" + 
                "finishing your studies or ready to dive in now, there's a place for you here.\n\n" +
                "What we offer: real responsibility from day one, a team that values craftsmanship" + 
                "and innovation, and the opportunity to work on AI-powered products that are shaping" + 
                "the future of digital services.\n\n" +
                "Sound like your kind of place? Check us out at https://www.elnino.tech/golustrum or" + 
                "reach out directly. We’d love to meet you!",
            linkText: "Official website: https://elnino.tech/",
        },
        {
            name: <h3><strong>ChipSoft</strong></h3>,
            logo: ChipSoft,
            url: "https://www.chipsoft.com/en/",
            description: 
                "Wil jij meehelpen de zorg te verbeteren, maar zie jij jezelf niet direct aan het bed van" +
                "een patiënt staan? Neem dan eens een kijkje bij ChipSoft\n\n" +
                "Als toonaangevende leverancier van zorg-ICT voorziet ChipSoft veel Nederlandse en" +
                "Belgische zorginstellingen van efficiënte, innovatieve softwareoplossingen. Geïntegreerde" +
                "oplossingen binnen één systeem – HiX – die zorgen dat zorgverleners op het juiste moment" +
                "de juiste zorg kunnen bieden.\n\n" +
                "Met gepassioneerde developers en consultants, die stuk voor stuk hart hebben voor de zorg," +
                "ontwikkelt het bedrijf vanuit Amsterdam, Antwerpen, Heerenveen en Hoogeveen oplossingen" +
                "die de registratielast voor zorgverleners verminderen, de samenwerking tussen" +
                "zorginstellingen verbeteren en de patiënt meer regie geven over zijn of haar behandeling." +
                "ChipSoft ontzorgt hiermee (grote academische) ziekenhuizen, maar ook huisartsen, GGZ-" +
                "instellingen, zelfstandige klinieken, verpleeghuizen, verzorgingshuizen en" +
                "thuiszorginstanties.\n\n" +
                "Met HiX als totaaloplossing voor de zorg zijn zorginstellingen van allerlei omvang altijd klaar" +
                "voor nu én voor de toekomst. Daarin spelen digitale samenwerking, technologieën als AI en" +
                "gegevensuitwisseling tussen alle partijen rondom de patiënt een steeds grotere rol." +
                "Help jij graag mee de zorg verbeteren met slimme ICT? Bekijk onze vacatures en stuur dan" +
                "een mail naar recruitment@chipsoft.com.",
            linkText: "Official website: https://www.chipsoft.com/en/",
        }
    ];

    return (
        <div className="Partners-Grid">
            {partnersData.map((partner, index) => (
                <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="Partner-Card" 
                    key={index}
                >
                    <div className="Partner-Logo-Wrapper">
                        <img src={partner.logo} alt={partner.name} />
                    </div>
                    <div className="Partner-Info">
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                        <a href={partner.url} target="_blank" rel="noreferrer" className="Partner-Link">
                            {partner.linkText}
                        </a>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Partners;
