
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
// eslint-disable-next-line no-unused-vars
import ruLocale from 'date-fns/locale/ru'


const  Time =(props) =>
    formatDistanceToNowStrict(props.date, {addSuffix:true } ) 



export default Time;