import Data from './Data';

export const pedirData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Data)
        }, 1500);
    })
}