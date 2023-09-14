import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import './forecast.css';

const WEEK_DAYS = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-Feira',
    'Quinta-feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img
                                        alt='weather'
                                        className='icon-small'
                                        src={`icons/${item.weather[0].icon}.svg`}
                                    />

                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>
                                        {item.weather[0].description}
                                    </label>
                                    <label className='min-max'>
                                        {Math.round(item.main.temp_min)}°C /
                                        {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Pressão</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Umidade</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Nuvens</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Velocidade Vento</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Nível do mar</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Sensação Térmica</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}

export default Forecast;