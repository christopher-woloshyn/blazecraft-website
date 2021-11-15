import { Fragment, FunctionComponent } from 'react';
import './styles/Temp.css';
import Logo from '../images/blazecraft-logo.png';


const Temp: FunctionComponent<any> = () => {
    return (
        <div className="content-wrapper">
            <h1>
                Welcome to BlazeCraft.info!
            </h1>

            <h2>
                This site is under construction. Please enjoy the download
                links to our previous seasons!
            </h2>

            <ul>
                <li>
                    <a
                        href='https://drive.google.com/file/d/1L9qw7AJ0gnwDiEOFFUAzpH0VTrxY0Gnm/view?usp=sharing'
                        target="_blank"
                    >
                        Season 1 World Download
                    </a>
                </li>
                <li>
                    <a
                        href='https://drive.google.com/file/d/12DONeU371797FxMO6dI-ki_pwDE_40j2/view?usp=sharing'
                        target="_blank"
                    >
                        Season 2.
                    </a>
                </li>
                <li>
                    <a
                        href='https://drive.google.com/file/d/1y_tA67srMfpYjnLneC3TcUGJk8PDn3q5/view?usp=sharing'
                        target="_blank"
                    >
                        World DL Season 3
                    </a>
                </li>
                <li>
                    Season 4 (Not OUt yet.)
                </li>
            </ul>
            <div className="image-wrapper">
                <img src={Logo} />
            </div>
            
        </div>
    );
}

export default Temp;