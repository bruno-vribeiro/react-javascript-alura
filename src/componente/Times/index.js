import Colaborador from '../Colaborador';
import './Times.css';

const Times = (props)=>{
    return(
        <section  
        style={{backgroundColor: props.corSecundaria}}
        className="times">
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomes}</h3>
            <Colaborador />
            <Colaborador />
        </section>
    )
}

export default Times;