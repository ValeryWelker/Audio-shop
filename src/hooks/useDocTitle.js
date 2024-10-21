import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Аудио`;
        } else {
            document.title = 'Аудио | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
