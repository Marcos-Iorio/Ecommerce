import { MdOutlineLeaderboard } from "react-icons/md";

export const getParams = (url) => {
    return new URLSearchParams(url).get('search');
}

