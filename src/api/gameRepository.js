import repository from './repository'

const resource = '/games';
export default {
    getTopGame(resultNumber){
        return repository.get(`${resource}/top?first=${resultNumber}`)
    }
}