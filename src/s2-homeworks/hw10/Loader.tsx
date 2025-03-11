import s from './Loader.module.css';
import loadingImage from './Loading.svg'; 

export function Loader() {
    return (
        <div className={s.loader}>
            <img src={loadingImage} alt="Loading..." />
        </div>
    );
}
