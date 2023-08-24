import { birthKey, emailKey} from './keys.js';

export default {
    firstName: "JUng",
    lastName: "Jioh",
    age: 37,
    [birthKey]: new Date(1980, 1, 1, 17, 30),
    [emailKey]: ['ckaquz98@naver.com', 'abc@naver.com']
}