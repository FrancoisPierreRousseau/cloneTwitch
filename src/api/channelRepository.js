import Repository from './repository'

const resource = '/channels';
export default {
    getChannelByUserId(userId){
        return Repository.get(`${resource}?broadcaster_id=${userId}`)
    }
}