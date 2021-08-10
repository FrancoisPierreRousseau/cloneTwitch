import Repository from './repository'

const resource = '/streams';

export default {
    getTopStream(resultNumber) {
        return Repository.get(`${resource}/?first=${resultNumber}`)
    },
    getBroadCastByUserId(userId) {
        return Repository.get(`${resource}/?user_id=${userId}`)
    }
}
