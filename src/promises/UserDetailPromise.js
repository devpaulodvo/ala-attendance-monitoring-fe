import { useSelector } from 'react-redux';
import { selectUserData } from '../slice/AuthSlice';

const UserDetail = () => {
    const user = useSelector(selectUserData);
    return user
}

export default UserDetail;